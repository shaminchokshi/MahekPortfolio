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
            I'm <b className="purple">Mahek Bhagchandani</b>, and I hold a <b className="purple">B.Sc. in Psychology</b>. 
            
              <br />My journey has led me to become a <b className="purple">Behavior Technician</b>, specializing in working with children on the <b className="purple">autism spectrum</b>. 
             
              <br /> My passion for this field is unwavering, and it drives me to <b className="purple">create a nurturing and supportive environment for these exceptional kids</b>. 
              <br />I'm dedicated to continuous learning and advocacy, and I've witnessed significant personal and professional growth in the realm of autism care. 
              <br />It's a profound privilege to make a positive impact on the lives of these incredible children, and it's a journey I cherish every day.
              
              
              
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
