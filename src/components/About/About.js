import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import EducationCards from "../Projects/educationCard";
import GradMahek from "../../Assets/GradMahek.JPG";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Education </strong>
        </h1>
        
        <Col md={4} className="project-card">
            <EducationCards
              imgPath={GradMahek}
              isBlog={false}
              title="Lynn University, Boca Raton, FL"
              position="Bachelor of Science in Psychology (GPA 3.81/4.00)"
              awards="Awards: Merit Scholarship and Vanessa Wolff Lumsden Endowed Scholarship"
              honours="Honours: Dean’s List 2019-2022"
             
            />
          </Col>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;
