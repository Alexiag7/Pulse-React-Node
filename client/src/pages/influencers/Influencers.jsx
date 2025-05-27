import React, { useEffect, useState } from 'react'
import { fetchData } from '../../helpers/axiosHelper';
import { NavbarPpal } from '../../components/navbar/NavbarPpal';
import { Col, Container, Row } from 'react-bootstrap';
import { FooterPpal } from '../../components/footer/FooterPpal';
import { CardInfluencer } from '../../components/CardInfluencer/CardInfluencer';

export const Influencers = () => {
  const [allInfluencers, setAllInfluencers] = useState([]);
  console.log(allInfluencers);

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

  return (
    <>
      <header>
        <NavbarPpal />
      </header>
      <main>
        <section className="section-home padding-y-section ">
          <Container fluid="xxl">
            <Row className="justify-content-center gy-4">
              {allInfluencers.map((influencer) => (
                <Col
                  key={influencer.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center"
                >
                  <CardInfluencer influencer={influencer} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <footer>
        <FooterPpal />
      </footer>
    </>
  );
};