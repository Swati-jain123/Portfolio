import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_mbf2e64", "template_1ddr4u9", formData, "yLEr6E0sijQUKb1Bc")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", user_subject: "", message: "" }); // Reset form
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <Container style={{ marginTop: "100px",}}>
      <Row>
        <Col md={12}>
          <h1 style={{ marginBottom: "10px" }}><span className="purple">Contact Form</span></h1>
          <p style={{ marginBottom: "30px", color: "white" }}>You can also use the form below to send me a message</p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "600px",
              margin: "auto",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2 style={{ color: "#007bff" }}>Contact Us</h2>
            <div style={{ margin: "10px 0" }}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                value={formData.user_subject}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height: "100px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
            >
              Send
            </button>
          </form>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h2 style={{ marginTop: "30px" }}><span className="purple">Or</span></h2>
          <div>
            <h1 style={{ color:"white" }}>FIND ME ON</h1>
            <p style={{ color:"white" }} >Feel free to <span className="purple">connect</span> with me</p>
            <ul className="home-about-social-links" style={{ listStyle: 'none', padding: 0 }}>
              <li className="social-icons">
                <a
                  href="https://github.com/Swati-jain123/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/swati-jain-sj/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:swati2003jain@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/swatijain_9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
