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
              imgPath="https://res.cloudinary.com/dupkiibar/image/upload/v1716053451/LOGO4_mquwzq.png"
              isBlog={false}
              title="NeuralParking - Research AI"
              description="Neural Parking is an application that utilizes Computer Vision to automate parking management. The
system employs YOLOv8, an advanced real-time object detection algorithm, to recognize license plates,
count empty parking spots, and detect fire hazards"
              // ghLink="https://github.com/duonguwu/DetectionAppPNJ"
              demoLink="https://neuralparking.online/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dupkiibar/image/upload/v1715013936/pnj_prj_wmu2hh.png"
              isBlog={false}
              title="Jewelry Detection App - Research AI"
              description="The application is capable of automatically recognizing and counting jewelry, aiming to save time during end-of-day inventory checks."
              ghLink="https://github.com/duonguwu/DetectionAppPNJ"
              demoLink="http://neuralparking.online:5000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dupkiibar/image/upload/v1715013934/job_uel_rfkfzn.jpg"
              isBlog={false}
              title="The Navigator - Recommendation System"
              description="The website can assess your suitability for your profession through a test, thereby suggesting courses to help you improve and enhance your skills for the job."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://the-navigator-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dupkiibar/image/upload/v1715014243/Screenshot_2024-05-06_234918_k8rveu.png"
              isBlog={false}
              title="MATVIET - E-commerce Website"
              description="This website allows users to browse and purchase fashionable eyewear. Administrators can manage theirproducts, invoices, and customers efficiently."
              ghLink="https://github.com/duonguwu/frontend_web_hk4"
              demoLink="https://youtu.be/2xAH6ci-jEk?si=pnFiXdhiAMugQEbz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dupkiibar/image/upload/v1715014320/Screenshot_2024-05-06_235138_f8ltfr.png"
              isBlog={false}
              title="Shoes E-commerce Website"
              description="This website allows users to browse and purchase fashionable sneakers. Administrators can manage their products, invoices, and customers efficiently."
              ghLink="https://github.com/DiiKhanh/FE-Project-Sneaker-with-springboot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dupkiibar/image/upload/v1714297596/au86l0qgczfympl5camw.jpg"
              isBlog={false}
              title="Plate Number Recognition"
              description="The Plate Number Recognition application utilizes the YOLOv8 model to detect the position of license plates in images. Once the plate's location is identified, the application employs the OpenCV library to crop the plate region and adjust its orientation to ensure proper alignment. Subsequently, Optical Character Recognition (OCR) techniques are applied to recognize the characters on the license plate, thereby extracting the identification information. By integrating these methods, the application is capable of automatically identifying license plates in images or videos, facilitating traffic monitoring, parking management, and related applications."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dupkiibar/image/upload/v1715015455/460c49df-ccb0-4e1c-be88-2aee9a68da44_ypzlb9.jpg"
              isBlog={false}
              title="Parking lot detection"
              description="The Parking Lot Detection system leverages YOLOv8 to train on datasets sourced from Roboflow specifically tailored for parking lots. By training on these datasets, the system can effectively discern between occupied and vacant parking spaces within a parking lot. Additionally, it is capable of accurately counting the number of available parking spots in real-time. This functionality enables efficient parking management by providing insights into parking space availability, thereby optimizing parking resource utilization and enhancing user convenience."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.licdn.com/dms/image/D4D12AQEuTGj7eyRgtQ/article-cover_image-shrink_600_2000/0/1677594737628?e=2147483647&v=beta&t=A5U9W1Sb659ZRsAk0He9XRgGE4kUi0LXjt9VL2TZaXk"
              isBlog={false}
              title="Global Tech Company Layoffs Data Warehouse"
              description="Integrated a global dataset of tech company layoffs into an OLAP data warehouse. Implemented ETL processes using SSIS, SSAS, and SSRS."
              ghLink="https://github.com/duonguwu/IS217.O21_DataWarehouse"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
