import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ABI from "../../Assets/Projects/ABI.jpg";
import Bierman from "../../Assets/Projects/Bierman.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Organizations I've worked with.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ABI}
              isBlog={false}
              title="Applied Behavior Institute, Massachusetts"
              position="Behavior Technician"
              description="||	Provided a one-on-one clinical services to children from ages 3 - 22 years that are on the autism spectrum   
              ||	Crafted a fun learning environment   
              ||	Developed day-to-day life and academic skills ||
              "

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bierman}
              isBlog={false}
              title="Bierman Autism Centers, Massachusetts"
              position="Behavior Technician"
              description="||	Offered individual clinical services to children between the ages of 3 and 12 who have autism spectrum disorder. 
              ||	Established an engaging educational setting that promotes enjoyable learning. 
              ||	Fostered the growth of essential everyday life and academic abilities ||  
              "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
