import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiBrain ,GiChart} from "react-icons/gi";
import {BsFillChatTextFill} from "react-icons/bs";
import {FaBaby,FaLaptopCode,FaHandHoldingHeart,FaPeopleCarry} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiBrain />
        <p style={{fontSize:"45%",color:"#1e27a6"}}>Psychology</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Abnormal Psychology</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Cognitive Psychology</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Physiological Psychology</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Organizational Psychology</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Industrial Psychology</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillChatTextFill />
        <p style={{fontSize:"45%",color:"#1e27a6"}}>Communication</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Oral Communication</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Written Communication</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBaby />
        <p style={{fontSize:"45%",color:"#1e27a6"}}>Childcare</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Creating Safe/Nurturing environments</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>A.B.A.</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Special needs tutoring</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaptopCode />
        <p style={{fontSize:"45%",color:"#1e27a6"}}>Technical</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>HTML/CSS</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>MS Excel</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>MS PowerPoint</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Dreamweaver</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Social Media Marketing</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHandHoldingHeart />
        <p style={{fontSize:"45%",color:"#1e27a6"}}>Soft Skills</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Empathy</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Oral Communication</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Work Ethic</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Adaptibility</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiChart />
        <p style={{fontSize:"45%",color:"#1e27a6"}}>Planning</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Analytical Thinking</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Problem Solving</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Attention to detail</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPeopleCarry />
        <p style={{fontSize:"45%",color:"#1e27a6"}}>Oganizational</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Leadership</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Event Planning</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Teamwork</p>
        <p style={{fontSize:"25%",color:"#ffffff"}}>Conflict Resolution</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
