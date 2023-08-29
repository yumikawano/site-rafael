import React from "react";
import { Layout } from "../../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import Foto1 from "../../assets/images/foto1.jpeg";
import Foto2 from "../../assets/images/foto2.jpeg";
import Foto3 from "../../assets/images/foto3.jpg";
import Foto4 from "../../assets/images/foto4.jpg";
import Foto5 from "../../assets/images/foto5.jpg";
import Foto6 from "../../assets/images/foto6.jpg";
import Foto7 from "../../assets/images/foto7.jpg";
import Foto8 from "../../assets/images/foto8.jpg";
import Foto9 from "../../assets/images/foto9.jpg";
import Foto10 from "../../assets/images/foto10.jpg";
import Foto11 from "../../assets/images/foto11.jpg";
import Foto91 from "../../assets/images/foto91.jpg";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Home() {
  return (
    <Layout>
      <section id="home">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Foto1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Foto2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Foto3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Foto4} alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <h1 className="personal">Personal Trainer</h1>
        <h1 className="personal-nome">Rafael Sasaki</h1>
        <p className="description">
          Como um instrutor qualificado e certificado, tenho ajudado os
          moradores de Maringá a conquistar um corpo saudável. Se quiser perder
          alguns quilos ou ganhar músculos, entre em contato comigo e comece
          hoje mesmo!
        </p>
        <a href="https://wa.me/+5544991484320" target="_blank">
          <Button className="btn-contact" variant="outline-light">
            CONTATO
          </Button>
        </a>
      </section>
      <Container id="about">
        <Row>
          <Col className="sobre">
            <h2>Sobre mim</h2>
            <h3>Impactando de forma positiva</h3>
            <p>
              Acredito que um estilo de vida saudável começa ao manter um corpo
              forte e em forma. Meu objetivo é ajudar você a identificar seu
              caminho fitness, criar uma série de exercícios que atendam às suas
              necessidades e orientar em todos os treinos. Minha abordagem
              holística para uma vida saudável e fitness fará com que você se
              sinta bem e veja resultados em pouco tempo. Entre em contato hoje
              e vamos começar a treinar juntos!
            </p>
            <a href="https://wa.me/+5544991484320" target="_blank">
              <Button variant="outline-dark">COMECE JÁ</Button>
            </a>
          </Col>
          <Col>
            <Image src={Foto5} className="foto5" alt="imagem exercicio" />
          </Col>
        </Row>
      </Container>
      <section id="job">
        <Container>
          <Row>
            <h2>Meu trabalho</h2>
            <h3>O caminho mais rápido para boa forma</h3>
            <Col className="trabalhos">
              <Image
                src={Foto6}
                className="foto-trabalho"
                alt="imagem caminhada na esteira"
              />
              <h4>Exercícios aeróbicos</h4>
              <h5>Força e resistência</h5>
              <p>
                Esta é uma forte tendência no mundo fitness. Se o seu objetivo
                for perder peso ou tonificar os músculos, meu programa poderá
                cuidar de sua saúde. Você se sentirá incrível ao notar
                rapidamente uma melhoria no seu desempenho.
              </p>
            </Col>
            <Col className="trabalhos">
              <Image
                src={Foto7}
                className="foto-trabalho"
                alt="imagem mulher segurando barra de peso"
              />
              <h4>Desenvolvimento de músculos</h4>
              <h5>Melhore seu corpo e sua mente</h5>
              <p>
                Uma vida saudável e fitness não significa apenas um corpo em
                dia, mas também uma mente equilibrada. Trabalho para
                proporcionar esse equilíbrio entre corpo e mente. O que você
                está esperando? Agende um horário comigo hoje mesmo!
              </p>
            </Col>
            <Col className="trabalhos">
              <Image
                src={Foto8}
                className="foto-trabalho"
                alt="imagem mulher se alongando"
              />
              <h4>Treino de flexibilidade</h4>
              <h5>Sua versão mais saudável</h5>
              <p>
                O programa exclusivo que desenvolvi ajudará você a queimar
                calorias, aumentar o metabolismo e melhorar sua saúde em geral.
                Com uma combinação de exercícios estratégicos e dieta saudável,
                você conquistará sua melhor forma.
              </p>
            </Col>
            <p className="p-trabalho">
              Mudar a sua vida é mais fácil do que imagina. Entre em contato e
              vamos começar!
            </p>
            <a href="https://wa.me/+5544991484320" target="_blank">
              <Button variant="outline-light">ENTRE EM CONTATO</Button>
            </a>
          </Row>
        </Container>
      </section>
      <Container id="serv">
        <Row>
          <Col className="services">
            <Image
              src={Foto91}
              className="foto-serv"
              alt="foto yoga"
              width={600}
              height={427}
            />
            <h4>Yoga</h4>
            <p className="p-serv">
              Yoga é uma pratica que tem como objetivo trabalhar corpo e a mente
              de forma interligada, com exercícios que auxiliam para o controle
              do estresse, ansiedade, dores no corpo e na colunna, além de
              melhorar o equilíbrio e promover a sensação de bem estar e a
              disposição.
            </p>
            <Button variant="outline-dark">CONTRATAR</Button>
          </Col>
          <Col className="services">
            <Image
              src={Foto10}
              className="foto-serv"
              alt="foto pilates"
              width={600}
              height={427}
            />
            <h4>Pilates</h4>
            <p className="p-serv">
              Pilates é um método de exercícios desenvolvido por Joseph Pilates
              na década de 1920 que visa trabalhar a conexão entre mente e
              corpo, como uma unidade, de modo a melhorar a consciência corporal
              e dessa forma promover outros benefícios. A maioria dos exercícios
              são executados com a pessoa deitada.
            </p>
            <Button variant="outline-dark">CONTRATAR</Button>
          </Col>
          <Col className="services">
            <Image
              src={Foto11}
              className="foto-serv"
              alt="foto fit dance"
              width={600}
              height={427}
            />
            <h4>Fit Dance</h4>
            <p className="p-serv">
              O FitDance é uma atividade aeróbica, que estimula diversos
              músculos e acelera o metabolismo. Com isso, além de gastar
              calorias durante a aula, o seu corpo continua “funcionando” e
              gastando calorias depois. Ou seja: esta aula pode ser uma forte
              aliada no processo de emagrecimento.
            </p>
            <Button variant="outline-dark">CONTRATAR</Button>
          </Col>
          <Col className="services">
            <Image
              src={Foto7}
              className="foto-serv"
              alt="foto pilates"
              width={600}
              height={427}
            />
            <h4>Pilates</h4>
            <p className="p-serv">
              Pilates é um método de exercícios desenvolvido por Joseph Pilates
              na década de 1920 que visa trabalhar a conexão entre mente e
              corpo, como uma unidade, de modo a melhorar a consciência corporal
              e dessa forma promover outros benefícios. A maioria dos exercícios
              são executados com a pessoa deitada.
            </p>
            <Button variant="outline-dark">CONTRATAR</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
