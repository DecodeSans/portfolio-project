import React,{ useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import {useNavigate} from "react-router-dom";
import "../styles/Builder.css";

export default function Builder() {
  const { data, setData } = useContext(PortfolioContext);
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  // Add skill
  const addSkill = () => {
    setData({
      ...data,
      skills: [...(data.skills || []), { name: "" }],
    });
  };

  // Update skill
  const updateSkill = (index, value) => {
    const updated = [...data.skills];
    updated[index].name = value;
    setData({ ...data, skills: updated });
  };

  // Add project
  const addProject = () => {
    setData({
      ...data,
      projects: [
        ...(data.projects || []),
        { title: "", description: "", link: "" },
      ],
    });
  };

  // Update project
  const updateProject = (index, field, value) => {
    const updated = [...data.projects];
    updated[index][field] = value;
    setData({ ...data, projects: updated });
  };

  return (
    <div className="builder-container">
      <div className="form-area">
        <h2>Build Your Portfolio</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={data.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        {/* About */}
        <textarea
          placeholder="About You"
          value={data.about || ""}
          onChange={(e) => handleChange("about", e.target.value)}
        />

        {/* Skills */}
        <h3>Skills</h3>
        {(data.skills || []).map((skill, i) => (
          <div key={i} className="dynamic-field">
            <input
              type="text"
              placeholder="Skill"
              value={skill.name}
              onChange={(e) => updateSkill(i, e.target.value)}
            />
          </div>
        ))}
        <button className="add-btn" onClick={addSkill}>
          + Add Skill
        </button>

        {/* Projects */}
        <h3>Projects</h3>
        {(data.projects || []).map((proj, i) => (
          <div key={i} className="preview-card">
            <input
              type="text"
              placeholder="Project Title"
              value={proj.title}
              onChange={(e) =>
                updateProject(i, "title", e.target.value)
              }
            />
            
            <textarea
              placeholder="Description"
              value={proj.description}
              onChange={(e) =>
                updateProject(i, "description", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Project Link"
              value={proj.link}
              onChange={(e) =>
                updateProject(i, "link", e.target.value)
              }
            />
          </div>
        ))}
        <button className="add-btn" onClick={addProject}>
          + Add Project
        </button>

        {/* Education */}
        <h3>Education</h3>
        <input
          type="text"
          placeholder="Your Education"
          value={data.education || ""}
          onChange={(e) => handleChange("education", e.target.value)}
        />

        {/* Contact */}
        <h3>Contact</h3>
        <input
          type="text"
          placeholder="Phone"
          value={data.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        {/* Template Buttons */}
        <h3>Select Template</h3>
        <button
          onClick={() => setData({ ...data, template: "template1" })}
        >
          Use Template 1
        </button>

      
        <button 
  className="preview-btn"
  onClick={() => navigate("/preview")}
>
  Preview
</button>
      </div>
    </div>
  );
}