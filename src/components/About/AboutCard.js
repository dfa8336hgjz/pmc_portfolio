import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary">Phung Minh Chien </span>
            <br />
            I'm employed as a software developer with 1 year of experience.
            <br />
            I have completed <span className="primary">Digital Communication and Multimedia Engineering {" "}</span>
             at <span className="primary">Hanoi University of Science and Technology (HUST)</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies (especially Pokemon ^^)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
          <br/>
          <br/>
          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
