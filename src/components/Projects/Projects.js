import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/user-attachments/assets/b5846ce6-409a-4b3d-8da1-a52b39bceba5"
              isBlog={false}
              title="MultiGames"
              description="A cross-platform mobile app for Android and iOS with two games: Drawing Guess and Spy Detection. These involve
creative drawing and word guessing, as well as inference challenges similar to the game Werewolf."
              ghLink="https://github.com/phathuynh24/MultiGames"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/user-attachments/assets/c55f0e8e-8707-43db-a35c-c7b18aa6c4a2"
              isBlog={false}
              title="Health Consulting"
              description="An advanced health consulting application featuring chat and video consultations, appointment management, health
records, a GPT-powered chatbot, and a medical product marketplace. The app includes three modules for users, doctors,
and admins. It integrates AI models for disease prediction to suggest suitable doctors for consultation."
              ghLink="https://github.com/phathuynh24/HealthConsulting"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/user-attachments/assets/82896ebd-0f67-4020-a1a6-2b7c7ea28efe"
              isBlog={false}
              title="Asset Management "
              description="An application for managing physical assets within the university, including device management, inventory tracking, maintenance scheduling, usage history, and feedback for repairs if damaged. The app features two roles: students/teachers and admins."
              ghLink="https://github.com/phathuynh24/AssetManagement"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/user-attachments/assets/43e53557-37c8-4093-97b5-f8d86dd76ddb"
              isBlog={false}
              title="Money Management"
              description="An Android app for recording income and expenses by category, with monthly transaction statistics."
              ghLink="https://github.com/phathuynh24/MoneyManagement"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/user-attachments/assets/57ef9d4e-5dad-4604-8bf1-74a9c5f66aee"
              isBlog={false}
              title="Hotel Management - C#"
              description="A desktop app for hotel management, handling staff, customers, rooms, inventory, services, reservations, and generating
statistical reports."
              ghLink="https://github.com/phathuynh24/HotelManagement_CSharp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/user-attachments/assets/57ef9d4e-5dad-4604-8bf1-74a9c5f66aee"
              isBlog={false}
              title="Hotel Management - Java"
              description="A desktop app for hotel management, handling staff, customers, rooms, inventory, services, reservations, and generating
statistical reports."
              ghLink="https://github.com/phathuynh24/HotelManagement_Java"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
