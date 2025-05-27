import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.css"

export const FooterPpal = () => {
  return (
    <footer className="fondo footer-ppal ">
      <Container fluid>
        <Row>
          <Col className="text-center py-3 text-light">
            <span>© 2025 Prueba Técnica. Alexia Gavira</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
