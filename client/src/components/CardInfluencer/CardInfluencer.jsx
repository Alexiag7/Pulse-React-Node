import React from 'react'
import {Button, Card, Col} from 'react-bootstrap'
import "./cardinfluencer.css"

export const CardInfluencer = ({influencer}) => {
  return (
    <Col className="d-flex justify-content-center mb-3">
      <div className="custom-card">
        <h3 className="card-title">{influencer.influencer_name.toUpperCase()}</h3>
        <p className="card-description">{influencer.email}</p>
        <p className="card-description">{influencer.followers_count}</p>
      </div>
    </Col>
  )
}
