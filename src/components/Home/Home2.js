import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mahek_DP.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            
              I'm <b className="purple">Mahek Bhagchandani</b>, a <b className="purple">B.Sc. Psychology</b> graduate with a passion for <b className="purple">supporting children on the autism spectrum.</b> 
              <br />As a dedicated <b className="purple">Behavior Technician</b>, I create <b className="purple">nurturing environments</b> for these exceptional kids, fostering their growth. 
              <br />My journey in <b className="purple">autism care</b> is both fulfilling and transformative. 
              <br />Looking ahead, I'm focused on <b className="purple">Industrial and Organizational Psychology, specializing in talent analytics.</b> 
              <br />Leveraging my expertise from hands-on experience as a Behavior Technician, along with my academic background and extracurricular involvement at <b className="purple">Lynn University</b>, 
              <br />I am poised for impactful growth in this field
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mahek-bhagchandani-a6404022b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_mahek.bhagchandani_/?ref=9gag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
