import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalLinks, setModalLinks] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    // Toggle scrolling on the background when modal is open
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  const card_line = [
    {
      borderColor: '#b3e5fc',
      title: "Frontend Developer",
      description: "Crafting stunning UI with Tailwind-With-React",
      link: "https://github.com/kirtan1313/Tailwind-Css-Project.git"
    },
    {
      borderColor: '#ffccbc',
      title: "Frontend Developer",
      description: "Crafting stunning UI with MUI-With-React",
      link: "https://github.com/kirtan1313/MUI-Webpage.git"
    },
    {
      borderColor: '#c8e6c9',
      title: "Full Stack Dev",
      description: "End-to-end development",
      links: [
        { text: "Client-Side Repo", url: "https://github.com/kirtan1313/E-Commerce-Client-Side.git" },
        { text: "Backend Repo", url: "https://github.com/kirtan1313/E-Commerce-Project-Backend.git" },
        { text: "Admin-Side Repo", url: "https://github.com/kirtan1313/E-Commerce-Admin-Side.git" }
      ]
    },
    {
      borderColor: '#d1c4e9',
      title: "React Project",
      description: " E-Commerce Project With Firebase",
      link: "https://github.com/kirtan1313/Final-Project.git"
    },
    {
      borderColor: '#f8bbd0',
      title: "Node Js Project",
      description: "Blog Project With MongoDB",
      link: "https://github.com/kirtan1313/Blog-Post-Pannel-Node-JS.git"
    },
    {
      borderColor: '#ffe082',
      title: "HTML_CSS_JS",
      description: "Multiple Project",
      link: "https://github.com/kirtan1313/Multiple-HTML_CSS_JS-Project.git"
    },
  ];

  const openModal = (links) => {
    setModalLinks(links);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className="project-section">
      <h2 className="services-heading">
        Stuff I’ve<span className="highlight"> worked on</span>
        <div className="underline"></div>
      </h2>
      <div className="container">
        <div className="card-container">
          {card_line.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="card-width"
              style={{ border: `3px solid ${project.borderColor}` }}
              onClick={() =>
                project.title === "Full Stack Dev"
                  ? openModal(project.links)
                  : window.open(project.link, '_blank')
              }
            >
              <div className="card1">
                <div className="github-icon">
                  <FaGithub />
                </div>
                <div className="card-title">{project.title}</div>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Full Stack Development Links</h3>
            <ul>
              {modalLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
