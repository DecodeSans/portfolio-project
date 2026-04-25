import React,{ useState,useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import "../styles/Builder.css";

export default function Builder() {
  const { data, setData } = useContext(PortfolioContext);
  const [skillName, setSkillName] = useState("");
  const navigate = useNavigate();

  const handleProjectChange = (index, field, value) => {
    const updated = [...data.projects];
    updated[index][field] = value;
    setData({ ...data, projects: updated });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [...data.projects, { title: "", description: "", link: "" }]
    });
  };
  const updateSkill = (index, value) => {
  const updatedSkills = [...data.skills];
  updatedSkills[index].name = value;
  setData({ ...data, skills: updatedSkills });
};

const removeSkill = (index) => {
  const updatedSkills = data.skills.filter((_, i) => i !== index);
  setData({ ...data, skills: updatedSkills });
};
  const addSkill = () => {
  if (!skillName) return;

  setData({
    ...data,
    skills: [
      ...(data.skills || []),
      { name: skillName }
    ]
  });

  setSkillName("");
  
};

  return (
    <div className="builder-container">
      <Sidebar />

      <div className="form-area">
        <h2>Build Your Portfolio</h2>

        <input
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <textarea
          placeholder="About"
          value={data.about}
          onChange={(e) => setData({ ...data, about: e.target.value })}
        />

        <div>
  <h3>Add Skill</h3>

  <input
    type="text"
    placeholder="Skill name"
    value={skillName}
    onChange={(e) => setSkillName(e.target.value)}
  />

 

  <button onClick={addSkill}>Add Skill</button>
  {data.skills?.map((skill, i) => (
  <div key={i} className="skill-item">
    <input
      value={skill.name}
      onChange={(e) => updateSkill(i, e.target.value)}
    />
    <button onClick={() => removeSkill(i)}>❌</button>
  </div>
))}
</div>
        

        <textarea
          placeholder="Education"
          value={data.education}
          onChange={(e) =>
            setData({ ...data, education: e.target.value })
          }
        />

        <h3>Contact</h3>

<input
  type="text"
  placeholder="Phone Number"
  value={data.phone || ""}
  onChange={(e) =>
    setData({ ...data, phone: e.target.value })
  }
/>

<input
  type="email"
  placeholder="Email"
  value={data.email || ""}
  onChange={(e) =>
    setData({ ...data, email: e.target.value })
  }
/>
<input
  type="text"
  placeholder="Skill name"
  value={skillName}
  onChange={(e) => setSkillName(e.target.value)}
/>


<button onClick={addSkill}>Add Skill</button>
        <h3>Projects</h3>

        {data.projects.map((proj, index) => (
          <div key={index} className="project-card">
            <input
              placeholder="Title"
              value={proj.title}
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
            />

            <textarea
              placeholder="Description"
              value={proj.description}
              onChange={(e) =>
                handleProjectChange(index, "description", e.target.value)
              }
            />

            <input
              placeholder="Link"
              value={proj.link}
              onChange={(e) =>
                handleProjectChange(index, "link", e.target.value)
              }
            />
          </div>
        ))}

        <button onClick={addProject}>+ Add Project</button>

        <br /><br />
        <button onClick={() => navigate("/preview")}>
          Preview
        </button>
      </div>
    </div>
  );
}