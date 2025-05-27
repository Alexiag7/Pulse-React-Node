import React, { useEffect, useState } from 'react'
import { NavbarPpal } from '../../components/navbar/NavbarPpal'
import { Col, Container, Row } from 'react-bootstrap'
import { FooterPpal } from '../../components/footer/FooterPpal'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../helpers/axiosHelper'
import "./campaignprofile.css"
import { ModalSelectInfluencer } from '../../components/modalSelectInfluencer/ModalSelectInfluencer'
import { CardInfluencer } from '../../components/CardInfluencer/CardInfluencer'


export const CampaignProfile = () => {
  const [campaign, setCampaign] = useState(null)
  const [showModalInfluencer, setShowModalInfluencer] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [influencers, setInfluencers] = useState([])

  const {id} = useParams();
  console.log(id)

  //funcion para quitarle el tiempo a la fecha
  const formatDate = (dateString) => dateString ? dateString.split(" ")[0] : "–";

  const handleClose = async () => {
    setShowModalInfluencer(false);
    setSelectedOption("");;
  };

  useEffect(()=>{
    const fetchCampaign = async ()=>{
      try {
        let res = await fetchData(`campaign/getOneCampaign/${id}`, "get", null, null);
        setCampaign(res.data.campaign)
      
      } catch (error) {
        console.log(error)
      }
    }
    fetchCampaign();
  }, [id])

  const fetchCampaignInfluencer = async ()=>{
    try {
      let res = await fetchData(`campaign/getInfluencers/${id}`, "get", null, null)
      setInfluencers(res.data.influencers);
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    fetchCampaignInfluencer();
  },[id])

   const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const influencerAdded = () => {
    fetchCampaignInfluencer();
  };

  return (
    <>
    <header>
    <NavbarPpal/>
    </header>
    <main>
      <section className='section-profile padding-y-section '>
      <Container fluid="xxl">
        <Row className='justify-content-center align-items-center pb-4'>
        <Col lg={4} md={6} xs={9} className='campaign d-flex flex-column justify-content-center align-items-center'>
        <h2>{campaign?.name}</h2>
        <p className="card-dates">
          📅 {formatDate(campaign?.start_date)} – {formatDate(campaign?.end_date)}
        </p>
        <p className="card-description">{campaign?.description}</p>
        <button onClick={()=>setShowModalInfluencer(true)} className="card-button">Añadir influencer</button>
        {showModalInfluencer && <ModalSelectInfluencer influencerAdded={influencerAdded} setInfluencers={setInfluencers} selectedOption={selectedOption} handleSelectChange={handleSelectChange} show={showModalInfluencer} handleClose={handleClose}/>}
        </Col>
        </Row>
        <Row>
          {influencers.map((i)=>{
            return(
              <CardInfluencer key={i.id} influencer={i}/>
            )
          })}
        </Row>
      </Container>
      </section>
    </main>
    <footer>
    <FooterPpal/>
    </footer>
    </>
  )
}
