import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Phat Huynh </span>
            from{" "}
            <span className="purple">
              {" "}
              University of Information Technology - VNUHCM
            </span>
            <br />
            I’m a Software Engineering student at the University of Information Technology - Vietnam National University,
            HCMC, aiming to specialize as a mobile application developer. I possess strong skills in Flutter, React Native, and
            Android, alongside experience in implementing AI models and utilizing Flask in various projects. My passion
            lies in artificial intelligence and integrating these cutting-edge technologies into my projects.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Think BIG! You are going to be thinking anyway, so think BIG!"{" "}
          </p>
          <footer className="blockquote-footer">Donald Trump</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
