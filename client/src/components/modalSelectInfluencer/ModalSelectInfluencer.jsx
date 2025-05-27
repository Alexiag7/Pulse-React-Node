import { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { fetchData } from '../../helpers/axiosHelper';
import { useParams } from 'react-router-dom';

export const ModalSelectInfluencer = ({ show, handleClose, selectedOption, handleSelectChange, influencerAdded}) => {

  const [allInfluencers, setAllInfluencers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const {id}= useParams();

  
    useEffect(() => {
      const fetch = async () => {
        try {
          let res = await fetchData(
            'influencer/getAllInfluencers',
            'get',
            null,
            null
          );
          setAllInfluencers(res.data.influencers);
        } catch (error) {
          console.log(error);
        }
      };
      fetch();
    }, []);

    const onSubmit = async()=>{

    
      try {

        let data={
          campaign_id: id,
          influencer_id: selectedOption
        }
        let res = await fetchData('campaign/includeInfluencer', 'post', {data}, null )

        console.log(res);
        influencerAdded();
        handleClose();

      
      } catch (error) {
        if (error.response && error.response.data?.message){
          setErrorMsg(error.response.data.message)
        }else{
          setErrorMsg("Error al añadir influencer")
          console.log(error);
        }
      }
    }


  return (
    <Modal dialogClassName='modal-edit-service' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='modal-title'>Elige un Influencer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="selectInput">
            <Form.Label>Elige un influencer</Form.Label>
            <Form.Select value={selectedOption} onChange={handleSelectChange}>
              <option value="">-- Elige --</option>
              {allInfluencers.map((influencer) => (
                <option key={influencer.id} value={influencer.id}>{influencer.influencer_name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          {errorMsg !== "" && <p>{errorMsg}</p>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className='boton-modal' onClick={handleClose}>
          Cancelar
        </button>
        <button className='boton-modal' onClick={onSubmit} >
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
};
