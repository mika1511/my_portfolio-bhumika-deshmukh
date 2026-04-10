import React from "react";
import { Col, Row } from "react-bootstrap";

import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* IDEs */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="intelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      {/* Core Dev */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git & GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      {/* Browser */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Chrome DevTools</div>
      </Col>

      {/* AI Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">ChatGPT</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Antigravity</div>
      </Col>

      {/* Backend Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">MongoDB Compass</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">pgAdmin</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Redis CLI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Linux / Terminal</div>
      </Col>

    </Row>
  );
}

export default Toolstack;