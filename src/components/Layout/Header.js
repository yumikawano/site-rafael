import React from "react";
import { Button } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <img
              src={Logo}
              className="logo"
              alt="Logo Rafael Sasaki"
              width={200}
              height={200}
            />
          </Col>
          <Col className="btn-menu">
            <a href="#home">
              <Button variant="outline-warning">Inicio</Button>
            </a>
            <a href="#about">
              <Button variant="outline-warning">Sobre</Button>
            </a>
            <a href="#job">
              <Button variant="outline-warning">Meu trabalho</Button>
            </a>
            <a href="#serv">
              <Button variant="outline-warning">Serviços</Button>
            </a>
              <Button id="btn-cart">
                <i className="bi bi-cart-fill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-cart-fill"
                    viewBox="0 0 30 30"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </i>
                <span className="btn-cart-badge"></span>
              </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
