import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { fetchData } from '../../helpers/axiosHelper.js'
import  createCampaignSchema from '../../schemas/createCampaignSchema.js'
import { ZodError } from 'zod';
import "./modalcreatecampaign.css"

const initialValue = {
  name:"",
  description:"",
  start_date:"",
  end_date:""
}

const ModalCreateCampaign = ({show, handleClose, onUpdated}) => {
  const [newCampaign, setNewCampaign] = useState(initialValue)
  const [valErrors, setValErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  
  const handleChange = (e)=>{
    const {name, value} = e.target;

    setNewCampaign({...newCampaign, [name]:value})
  }
  

  const onSubmit = async ()=>{
    try {

      createCampaignSchema.parse(newCampaign)
      let res = await fetchData('campaign/addCampaign', "post", newCampaign, null)
      console.log(res.data.campaign);

      setErrorMsg(res.data.message);
      setValErrors({});

      onUpdated(newCampaign)
      handleClose();
      setNewCampaign(initialValue);
    } catch (error) {
      if(error instanceof ZodError){
        let objTemp = {};
        error.errors.forEach((er)=>{
          objTemp[er.path[0]] = er.message;
        });
        setValErrors(objTemp)
      }else if(error.response){
        setErrorMsg(error.response.data.message)

      }else{
        setErrorMsg("error")
      }
      console.log(error)
    }
  }

  return (
    <Modal dialogClassName='modal-edit-service' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>Editar Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newCampaign.name}
                onChange={handleChange}
                placeholder="Nombre"
                autoFocus
              />
              {valErrors.name && <p>{valErrors.name}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionInput">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                name="description"
                value={newCampaign.description}
                as="textarea"
                rows={3}
                maxLength={250}
                onChange={handleChange}
                placeholder="Descripción"
              />
              {valErrors.description && <p>{valErrors.description}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDateInput">
              <Form.Label>Fecha inicio</Form.Label>
              <Form.Control
                type="date"
                name="start_date"
                value={newCampaign.start_date}
                onChange={handleChange}
              />
              {valErrors.start_date && <p>{valErrors.start_date}</p>}

            </Form.Group>
            <Form.Group className="mb-3" controlId="endDateInput">
              <Form.Label>Fecha fin</Form.Label>
              <Form.Control
                type="date"
                name="end_date"
                value={newCampaign.end_date}
                onChange={handleChange}

              />
              {valErrors.end_date && <p>{valErrors.end_date}</p>}

            </Form.Group>     
            {errorMsg && <p className='text-center'>{errorMsg}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='boton-modal' onClick={handleClose}>
            Cancelar
          </button>
          <button className='boton-modal' onClick={onSubmit}>
            Guardar
          </button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalCreateCampaign