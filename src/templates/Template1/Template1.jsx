import React from "react";
import "./template1.css";

export default function Template1({ data }) {
  return (
    <div className="portfolio">

      {/* ================= SIDEBAR ================= */}
      <div className="sidebar slide-left">
        <h1 className="name">{data.name || "Your Name"}</h1>

        <p className="bio">
          {data.about || "Your short bio..."}
        </p>

        {/* SKILLS */}
{data.skills && data.skills.length > 0 && (
  <section className="skills-section fade-up">
    <h2>Skills</h2>

    <div className="skills-list">
      {data.skills.map((skill, i) => (
        <span key={i} className="skill-tag">
          {skill.name}
        </span>
      ))}
    </div>

  </section>
)}

        {/* Contact */}
        {data.contact && (
          <>
            <h3>Contact</h3>
         <p>📞 {data.phone}</p>
         <p>📧 {data.email}</p>
          </>
        )}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="main fade-up">

        {/* HERO / TITLE */}
        <section className="hero fade-in">
          <h2>Welcome 👋</h2>
          <p>Here are my projects and work</p>
        </section>

        {/* PROJECTS */}
        {data.projects &&
          data.projects.length > 0 &&
          data.projects[0].title && (
            <section className="projects-section">
              <h2>Projects</h2>

              <div className="projects">
                {data.projects.map((p, i) => (
                  <div key={i} className="project-card card">
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>

                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* EDUCATION */}
        {data.education && (
          <section className="education-section fade-up">
            <h2>Education</h2>
            <div className="card">
              <p>{data.education}</p>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}