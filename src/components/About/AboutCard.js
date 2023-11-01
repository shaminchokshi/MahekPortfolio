import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          
            I'm <span className="purple">Mahek Bhagchandani</span>, a psychology graduate from <span className="purple">Lynn University</span> in Florida. 
            <br />
            My journey spans the realms of academia and artistry, from delving into psychology to working as a <span className="purple">Behavior Technician</span> with children on the <span className="purple">autism spectrum.</span> 
            <br />
            As I express myself through the language of dance, I invite you to explore the unique fusion of intellect, compassion, and art that defines my world.
            Alongside this I love :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Debates
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about the brain
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
