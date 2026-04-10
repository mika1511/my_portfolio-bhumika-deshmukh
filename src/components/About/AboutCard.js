import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Bhumika Deshmukh</span> from{" "}
            <span className="purple">Bhilai</span>.
            <br />
            <br />
            I’m a{" "}
            <span className="purple"> Software Engineering Enthusiast</span>{" "}
            who enjoys building scalable systems and real-world applications.
            My work revolves around designing{" "}
            <span className="purple">APIs, microservices, and distributed systems</span>{" "}
            with a strong focus on performance and clean architecture.
            <br />
            <br />
            I’ve worked extensively with{" "}
            <span className="purple">Node.js, TypeScript, Java, and Spring Boot</span>,{" "}
            and have built projects involving{" "}
            <span className="purple">
              real-time systems, asynchronous processing, and AI-powered features
            </span>.
            <br />
            <br />
            Recently, I’ve been exploring{" "}
            <span className="purple">LLM integrations and event-driven architectures</span>{" "}
            — building systems that combine backend engineering with intelligent automation.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me energized and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and building new tech projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging with developer communities 👩‍💻
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I enjoy building systems that are not just functional, but impactful."
          </p>
          <footer className="blockquote-footer">Bhumika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;