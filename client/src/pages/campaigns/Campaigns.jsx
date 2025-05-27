import React, { useEffect, useState } from 'react';
import { NavbarPpal } from '../../components/navbar/NavbarPpal.jsx';
import { FooterPpal } from '../../components/footer/FooterPpal.jsx';
import "../home/home.css"
import { Col, Container, Row } from 'react-bootstrap';
import { fetchData } from '../../helpers/axiosHelper.js';
import { CardCampaing } from '../../components/CardCampaign/CardCampaign.jsx';
import ModalCreateCampaign from '../../components/modalCreateCampaign/ModalCreateCampaign.jsx';
import { ModalSelectInfluencer } from '../../components/modalSelectInfluencer/ModalSelectInfluencer.jsx';

export const Campaigns = () => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [showModal, setShowModal] = useState(false);

  console.log(allCampaigns);

  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await fetchData(
          'campaign/getAllCampaigns',
          'get',
          null,
          null
        );
        setAllCampaigns(res.data.campaigns);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleClose = async () => {
    setShowModal(false);
  };

  const onUpdated = (newCampaign) => {
    setAllCampaigns(prev => [...prev, newCampaign]);
  };

  return (
    <>
      <header>
        <NavbarPpal />
      </header>
      <main>
        <section className="section-home padding-y-section ">
          <Container fluid="xxl">
            <Row>
              <Col>
              <button onClick={()=>setShowModal(true)} className="boton mb-5">Crear nueva campaña</button>
              </Col>
            </Row>
            <Row className="justify-content-center gy-4">
              {allCampaigns.map((campaign) => (
                <Col
                  key={campaign.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center"
                >
                  <CardCampaing campaign={campaign} />
                </Col>
              ))}
            </Row>
            {showModal && <ModalCreateCampaign show={showModal} handleClose={handleClose} onUpdated={onUpdated} />}

          </Container>
        </section>
      </main>
      <footer>
        <FooterPpal />
      </footer>
    </>
  );
};
