import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import minecraft from "../../Assets/Projects/minecraft.png";
import hdc from "../../Assets/Projects/hdc.png";
import proskill from "../../Assets/Projects/proskill.png";
import odooGarment from "../../Assets/Projects/odooGarment.jpg";
import viet from "../../Assets/Projects/viet.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="primary">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proskill}
              isBlog={false}
              title="Proskill"
              description="The software classifies and manages YouTube videos in the form of courses, using ReactJS for the frontend, Node.js for the backend, and MySQL as the database. Allows users to create accounts, register for courses, and leave comments for each course."
              ghLink="https://github.com/dfa8336hgjz/Proskill_frontend_app"
              demoLink="https://youtu.be/Dl01nMmLGWg?si=Q-v_Nw_tx5X67CfX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viet}
              title="Viet Project"
              description="The document-based chatbot website supports uploading documents, interacting with their content via chatbot, and managing documents in the form of projects. It is developed using Google's Gemini API, with a tech stack including FastAPI, Next.js, Redis, MySQL, and Weaviate."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://youtu.be/Q7DPt7Lbpxo?si=hdn9Qb5OXoJpJlmM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hdc}
              title="HDC Bank Application"
              description="A banking transaction application integrated with a 6-jar budgeting system, supporting user expense management through AI models and chatbot assistance."
              ghLink="https://github.com/dfa8336hgjz/VpBank_App_FE.git"
              demoLink="https://youtube.com/shorts/FWvbXdUcPqc?feature=share"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minecraft}
              title="G3Craft"
              description="A simple proskill clone that allows for infinite terrain generation and basic interaction through movement, block placement, and removal. The entire implementation, from the user interface to game rendering, is built using OpenGL in Java."
              ghLink="https://github.com/dfa8336hgjz/Minecraft_clone.git"
              demoLink="https://youtu.be/p7Y6J0QVLWI?si=LvTiqHDEw-83jCaw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={odooGarment}
              title="Garment Management System"
              description="An Odoo-based application for managing garment production processes, including sample, order, inventory and production management. It allows users to manage orders, track inventory levels, and generate production reports."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
