import React from "react";
import { Layout } from "../../components/Layout";
import Carousel from 'react-bootstrap/Carousel';
import Foto1 from '../../assets/images/foto1.jpeg';
import Foto2 from '../../assets/images/foto2.jpeg';
import Foto3 from '../../assets/images/foto3.jpg';
import Foto4 from '../../assets/images/foto4.jpg';
import Foto5 from '../../assets/images/foto5.jpg';
import { Button, Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Home() {
    return(
        <Layout>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Foto1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Foto2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Foto3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Foto4}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
            <h1 className="personal">Personal Trainer</h1>
            <h1 className="personal-nome">Rafael Sasaki</h1>
            <p className="description">Como um instrutor qualificado e certificado, tenho ajudado os moradores de Maringá a conquistar um corpo saudável. Se quiser perder alguns quilos ou ganhar músculos, entre em contato comigo e comece hoje mesmo!</p>
            <Button className="btn-contact" variant="outline-light">CONTATO</Button>
            <Container>
      <Row>
        <Col className="sobre">
        <h2>Sobre mim</h2>
        <h3>Impactando de forma positiva</h3>
        <p>Acredito que um estilo de vida saudável começa ao manter um corpo forte e em forma. Meu objetivo é ajudar você a identificar seu caminho fitness, criar uma série de exercícios que atendam às suas necessidades e orientar em todos os treinos. Minha abordagem holística para uma vida saudável e fitness fará com que você se sinta bem e veja resultados em pouco tempo. Entre em contato hoje e vamos começar a treinar juntos!</p>
        <Button variant="outline-light">COMECE JÁ</Button>
        </Col>
        <Col>
        <Image src={Foto5} className='foto5' alt='imagem exercicio' />
        </Col>
      </Row>
    </Container>
        </Layout>
    );
}