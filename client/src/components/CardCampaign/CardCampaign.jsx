import React from 'react'
import {Button, Card, Col} from 'react-bootstrap'
import "./cardcampaign.css"
import { useNavigate } from 'react-router-dom'

export const CardCampaing = ({campaign}) => {
  const navigate = useNavigate()
  
  return (
    <Col className="d-flex justify-content-center ">
      <div className="custom-card">
        <h3 className="card-title">{campaign.name.toUpperCase()}</h3>
        <p className="card-dates">
          📅 {campaign.start_date} – {campaign.end_date}
        </p>
        <p className="card-description">{campaign.description}</p>
        <button onClick={()=>navigate(`/campaign/${campaign.id}`)} className="card-button">Ir a campaña</button>
      </div>
    </Col>
  )
}
