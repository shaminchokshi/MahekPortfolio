import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Mahek Bhagchandani</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mahek-bhagchandani-a6404022b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_mahek.bhagchandani_/?ref=9gag"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
