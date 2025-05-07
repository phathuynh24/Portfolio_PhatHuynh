import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
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
              I am a Software Engineering student at the University of Information Technology - Vietnam National University, HCMC, specializing in mobile application development. I have strong skills in
              <i>
                <b className="purple"> Flutter, React Native, and Android (Java) </b>
              </i>
              , and experience with AI models and Flask.
              <br />
              {/* <br />
              As an intern at COHOTA, I developed and published the Catbus Student and Teacher apps, and enhanced the Catbus Parent app, reducing bugs by 30%.
              <br /> */}
              <br />
              During my time at university, I have worked on several projects, but the two standout projects are leading the development of the MultiGames app and creating the Health Consulting app with AI integration. These projects allowed me to apply and refine my skills using technologies such as
              <i>
                <b className="purple"> React Native, Javascript, MongoDB, Express.js, Node.js, Dart, Flutter, Python, Flask, and Gemini API </b>
              </i>
              .
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple"> Dart, Javascript, Java, Python, C#, and C++ </b>
              </i>
              , and frameworks such as
              <i>
                <b className="purple"> Flutter, React Native, ReactJS, WPF, and WinForms </b>
              </i>
              . I also have experience with
              <i>
                <b className="purple"> Firebase, MongoDB, MS SQL Server, Android Studio, Postman, and Figma </b>
              </i>.
              <br />
              <br />
              I aim to integrate advanced technologies into mobile applications to create impactful solutions.
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
                  href="https://github.com/phathuynh24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/phathuynhtien24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/phathuynh24/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/phat.ht24"
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
