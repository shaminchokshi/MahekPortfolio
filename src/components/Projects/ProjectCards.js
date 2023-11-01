import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{  color:"#1b33ab", fontWeight:"bold" }}>{props.title}</Card.Title>
        <Card.Subtitle style={{  color:"#1b33ab", padding:"1%"}}>{props.position}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", color:"#000000" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
