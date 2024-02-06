import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./projects.css";
gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    name: "Portfolio Website",
    techStack: "React js, GSAP",
    description:
      "This website is design and built by myself in React JS, I have also use GSAP for the animations and GttHub pages for deployment",
    gitHub: "https://github.com/ameyaaade/portfolioWeb",
  },
  {
    name: "Personal Chat Aap",
    techStack: "Node-JS, Express js, Socket IO, Handlebars templates",
    description:
      "A simple chatroom application developed for the personal learning purpose uses Socket IO for establishing communication channel, Allows multiple people to join on a topic gor group discussion",
    gitHub: "https://github.com/ameyaaade/Chat-App",
  },
  {
    name: "Task Manager",
    techStack:
      "Node js, Express js, Microservices Architecture , Docker, Kubernetes",
    description:
      "A Task Management application which provides authentication API with JWT tokens, App Provides REST Api's for creation of Tasks and sub-tasks with CRUD capabilities",
    gitHub: "https://github.com/ameyaaade/TaskManagerAPI",
  },
  {
    name: "Coin Rush",
    techStack: "Python, Django, Bootstrap, Stripe",
    description:
      "Prototype application simulating cryptocurrency market environment, User can but and sell stocks and NFT's, Build as an academic projects",
    gitHub: "https://github.com/DjangoWriters-Internet-Application/Coin-Rush",
  },
  {
    name: "(MOMD) Multi Object Decision Making App",
    techStack: "JavaScript, Firebase Authentication, Chart JS",
    description:
      "Won! a 1st prise at the project pitch competition. Build as per the specific requirement to full-fill client's need. This app performs a MOMD calculation to make a best decision",
    gitHub: "https://github.com/navjotmakkar/COMP-8967-Climate-Neutral",
  },
  {
    name: "Wheelchair Guardian App",
    techStack: "React Native, python",
    description:
      "A mobile application allowing wheelchair users to automatically place calls in an emergency and digital locking system.",
    gitHub:
      "https://github.com/Manjinder-Singh/wheelchair-guardian/tree/dev/application/wheelchair",
  },
];

const Projects = ({ projectRef }) => {
  useEffect(() => {
    gsap.utils.toArray(".project-item").forEach((card) => {
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          duration: 0.5,
          autoAlpha: 1,
          y: 0,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);


  return (
    <section id="projects"  ref={projectRef}>
      <h2 className="section-label">Projects</h2>
      <div className="container projects-content ">
        {projects.map((project) => (
              <div className="project-item">
                <h3 className="project-title">{project.name}</h3>
                <h4 className="project-tech-stack">
                  <span>Tech Stack - </span>
                  {project.techStack}
                </h4>
                <p className="project-description">{project.description}</p>
                <div className="project-overlay">
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
