import React from "react";
import { Image } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Instagram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Image
              src={Logo}
              className="logo"
              alt="Logo Rafael Sasaki"
              width={400}
              height={400}
            />
          </Col>
          <Col className="info">
            <p>info@rafaelsasaki.com</p>
            <p>Tel:(44) 9 9148-4320</p>
            <p>Av. Mauá, 1308 - Maringá/PR</p>
          </Col>
          <Col>
            <a href="https://wa.me/+5544991484320" target="_blank">
              <Image
                className="img-redes"
                src={Whatsapp}
                alt="Botão Whatsapp"
                width={50}
                height={50}
                href=""
              />
            </a>
            <a href="https://www.instagram.com/sasaki_rafael/" target="_blank">
              <Image
                className="img-redes"
                src={Instagram}
                alt="Botão Instagram"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.facebook.com/rafael.montoia.7"
              target="_blank"
            >
              <Image
                className="img-redes"
                src={Facebook}
                alt="Botão Facebook"
                width={50}
                height={50}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <p className="p-footer">
        Copyright 2022 © Desenvolvido por Yumi Kawano
      </p>
    </footer>
  );
}
