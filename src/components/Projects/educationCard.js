import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCards(props) {
  return (
    <Card className="project-card-view"  style={{flexDirection:"row", width:"330%",height:"10%"}}>
      <div>
      <Card.Body>
        <Card.Title style={{  color:"#1b33ab", fontWeight:"bold", fontSize:35 }}>{props.title}</Card.Title>
        <Card.Subtitle style={{  color:"#1b33ab", padding:"3%",fontSize:25}}>{props.position}</Card.Subtitle>
        <Card.Subtitle style={{  color:"#1b33ab", padding:"3%",fontSize:25}}>{props.awards}</Card.Subtitle>
        <Card.Subtitle style={{  color:"#1b33ab", padding:"3%",fontSize:25}}>{props.honours}</Card.Subtitle>
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
      </div>
      <div style={{padding:"5%", alignSelf:"flex-end"}}>
      <Card.Img  src={props.imgPath} alt="card-img" />
      </div>
    </Card>
  );
}
export default EducationCards;
