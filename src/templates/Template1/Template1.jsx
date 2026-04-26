
import React,{useState} from "react";
import "./template1.css";

export default function Template1({ data }) {
  const [image,setImage] = useState(null);
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ================= HOME ================= */}
      <section id="home" className="hero">
  <div className="hero-container">

    {/* LEFT - IMAGE */}
    {data?.image && (
      <div className="hero-image">
        <img src={data.image} alt="profile" />
      </div>
    )}

    {/* RIGHT - TEXT */}
    <div className="hero-text">
      <h3>Hello I'm</h3>

      <h1>{data?.name || "Your Name"}</h1>

      <h2>
        And I'm a <span>{data?.role || "Your Role"}</span>
      </h2>

      <p>{data?.about}</p>
    </div>

  </div>
</section>
    

      {/* ================= SKILLS ================= */}
      {data?.skills && data.skills.length > 0 && (
        <section id="skills" className="skills-section fade-up">
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

      {/* ================= PROJECTS ================= */}
      {data?.projects &&
        data.projects.length > 0 &&
        data.projects[0]?.title && (
          <section id="projects" className="projects-section fade-up">
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

      {/* ================= EDUCATION ================= */}
      {data?.education && (
        <section className="education-section fade-up">
          <h2>Education</h2>

          <div className="card">
            <p>{data.education}</p>
          </div>
        </section>
      )}

      {/* ================= CONTACT ================= */}
      {(data?.phone || data?.email) && (
        <section id="contact" className="fade-up">
          <h2>Contact</h2>

          <p>📞 {data.phone}</p>
          <p>📧 {data.email}</p>
        </section>
      )}

    </div>
  );
}