import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lakshay Gupta </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am a student of BCA at CCSU University.
            <br />
            where I am deeply engaged in my studies and actively pursuing a
            career in full stack development.I have a strong passion for coding
            and constantly seek to learn new technologies and improve my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it’s bad."{" "}
          </p>
          <footer className="blockquote-footer">Lakshay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
