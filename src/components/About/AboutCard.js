import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sophal Vaung </span>
            from <span className="purple"> Phnom Penh, Cambodia.</span>
            <br />
            I'm open to work as a software developer.
            <br />
            <br />
            I'm currently pusuring the Bechelor of Science in <span className="purple"> Information and Communication Technology (ICT) </span> 
            at the <span className="purple"> American University of Phnom Penh.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              🚀 Playing Games
            </li>
            <li className="about-activity">
              💻 Exploring new technologies and tools
            </li>
            <li className="about-activity">
              🌍 Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sophal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

