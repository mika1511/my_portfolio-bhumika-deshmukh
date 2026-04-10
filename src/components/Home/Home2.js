import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

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
              I’m a Backend-focused Software Engineer who enjoys building scalable systems,
              microservices, and real-time applications. I like turning complex problems
              into clean, efficient architectures that are reliable in production.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Java, and SQL{" "}
                </b>
              </i>
              — with hands-on experience across MERN stack and Java Spring Boot ecosystems.
              <br />
              <br />
              My key areas of interest include designing
              <i>
                <b className="purple">
                  {" "}
                  Microservices, Event-Driven Systems, and REST APIs{" "}
                </b>
              </i>
              — along with building scalable backend workflows using asynchronous processing and real-time communication.
              <br />
              <br />
              I enjoy working with
              <b className="purple"> Node.js </b>,{" "}
              <b className="purple"> Spring Boot </b>,{" "}
              <b className="purple"> Redis </b>, and{" "}
              <b className="purple"> WebSockets </b>, while also exploring
              <i>
                <b className="purple"> AI-powered features and LLM integrations</b>
              </i>
              to build smarter applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
