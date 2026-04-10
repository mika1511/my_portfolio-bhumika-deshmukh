import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskflow from "../../Assets/Projects/taskflow.png";
import ats from "../../Assets/Projects/ats.png";
import forgeStream from "../../Assets/Projects/forgestream.png";
import kdrama from "../../Assets/Projects/kdrama.png";
import pastebin from "../../Assets/Projects/pastebin.png";
import videoapp from "../../Assets/Projects/videoapp.png";


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
              imgPath={taskflow}
              isBlog={false}
              title="TaskFlow AI Platform"
              description="A production ready, distributed backend system for task management featuring AI-native automation, real-time WebSocket synchronization, and asynchronous job processing. Built with Node.js, TypeScript, and a polyglot persistence strategy using PostgreSQL, MongoDB, and Redis."
              ghLink="https://github.com/mika1511/Task-Manager"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoapp}
              isBlog={false}
              title="Video Upload, Sensitivity Processing, and Streaming Application"
              description="A full-stack application that enables users to upload videos, processes them for content sensitivity analysis, and provides seamless video streaming capabilities with real-time progress tracking."
              ghLink="https://github.com/mika1511/Video-Upload-Sensitivity-Processing-and-Streaming-Application"
              demoLink="https://video-upload-sensitivity-processing-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forgeStream}
              isBlog={false}
              title="ForgeStream Engine"
              description="ForgeStream Engine is a concurrency-safe backend event processing system built with Spring Boot that ingests large batches of manufacturing telemetry data, performs realtime validation, deduplication, and conflict safe updates, and exposes analytics APIs for machine and factory level statistics."
              ghLink="https://github.com/mika1511/ForgeStream-Engine"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ats}
              isBlog={false}
              title="ATS Resume Analyzer"
              description="An AI-powered Applicant Tracking System (ATS) that helps job seekers and recruiters evaluate resumes against specific job descriptions. By combining Semantic Similarity and Technical Keyword Matching, it provides a realistic match score along with actionable improvement suggestions."
              ghLink="https://github.com/mika1511/Resume_Analyser_Python_React_SQL"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pastebin}
              isBlog={false}
              title="Pastebin-Lite"
              description="Pastebin-Lite is a lightweight Pastebin-like web application that allows users to create text pastes and share them via a unique URL.
Pastes can optionally expire based on time-to-live (TTL) or a maximum view count. The project is built using Node.js (backend) and Next.js (frontend) and is deployed on Vercel."
              ghLink="https://github.com/mika1511/Pastebin-lite"
              demoLink="https://pastebin-lite-tg9k.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kdrama}
              isBlog={false}
              title="KDrama Reviewer App"
              description="A modern React Native app built with Expo Router and Firebase for discovering K-Dramas, writing reviews, and discussing episodes. Users browse dramas, post overall reviews, track personal thoughts, and share episode-specific feedback in real-time."
              ghLink="https://github.com/mika1511/ReactNative-Kdrama-Reviewer"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
