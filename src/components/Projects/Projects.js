import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shopy from "../../Assets/Projects/shopyy.jpg";
import connectworld from "../../Assets/Projects/content.png";
import videocon from "../../Assets/Projects/video.png";
import protestyou from "../../Assets/Projects/protestyou.jpg";
import todo from "../../Assets/Projects/todolist.jpg";
import Healthify from "../../Assets/Projects/healtify.jpg";


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
              imgPath={videocon}
              isBlog={false}
              title="Video Conference Website "
              description="Personal Video Conference Room to Connect and Collaborate uses React.js, TypeScript, Firebase, and ZogoCloud to offer live video conferencing, screen sharing, and a built-in chat feature. Users can easily share images and express themselves with reactions during chats, while collaborating seamlessly by sharing files and links."
              ghLink="https://github.com/Swati-jain123/Video_conference"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectworld}
              isBlog={false}
              title="Connect World"
              description="Connect World, built with the MERN stack, allows users to share their blogs with a title, author name, summary, description, and images. It provides a space to connect with the world, share ideas, and read others' blogs, fostering a community of creativity and knowledge exchange."
              ghLink="https://github.com/Swati-jain123/Content-management-System-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Healthify}
			  
              isBlog={false}
              title="Healthify:Disease Prediction System"
              description="This platform, built with Flask and Python with Mongodb , utilizes machine learning and artificial intelligence to predict diseases. Users can input their health data, and the system analyzes it to identify potential health risks, By leveraging advanced algorithms, Healthify connects users with insights about their health."
              ghLink="https://github.com/Swati-jain123/Healthify--Disease--Prediction-System"
                        
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protestyou}
              isBlog={false}
              title="ProtestYou- Personal Safety App"
              description="This app, developed with XML, Java, and Android, enables quick calls to emergency contacts and family. It includes live location sharing, image uploads to helplines, and the ability to find nearby hospitals and police stations, enhancing safety and preparedness. Its user-friendly design offers vital support during emergencies."
              ghLink="https://github.com/Swati-jain123/Protectyou_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopy}
              isBlog={false}
              title="Shopy:-Online Shopping"
              description="This platform, built with Java and MySQL, offers a seamless online shopping experience. Users can browse products, add items to their cart, and complete transactions easily. With a user-friendly interface, the platform also provides personalized product recommendations and secure payment options to enhance the shopping journey. "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List Web App"
              description="This platform, built with HTML, CSS, and JavaScript, provides a simple and effective way to manage tasks. Users can easily add, edit, and delete items on their to-do list, helping them stay organized and productive."
              ghLink="https://github.com/Swati-jain123/-OIBGRIP/tree/main/To-Do-List-Web-App"
              />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
