import React from 'react'
import { NavbarPpal } from '../../components/navbar/NavbarPpal'
import { FooterPpal } from '../../components/footer/FooterPpal'
import "./home.css"
import { Col, Container, Row } from 'react-bootstrap'


export const Home = () => {
  return (
    <>
    <header>
    <NavbarPpal/>
    </header>
    <main>
      <section className='section-home padding-y-section '>
      <Container fluid="xxl">
        <Row className='justify-content-center'>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h1>Pulse.</h1>
          <span>Conectamos marcas con las voces que importan.</span>
        </Col>
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
