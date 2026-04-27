import React,{ useContext, useEffect } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import {useNavigate} from "react-router-dom";
import "../styles/Builder.css";

export default function Builder() {
  const { data, setData } = useContext(PortfolioContext);
  useEffect(() => {
  const savedData = localStorage.getItem("portfolioData");
  if (savedData) {
   setData(prev => ({ ...prev, ...JSON.parse(savedData) }));
  }
}, []);
useEffect(() => {
  localStorage.setItem("portfolioData", JSON.stringify(data));
}, [data]);

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

  
  const updateSkill = (index, value) => {
    const updated = [...data.skills];
    updated[index].name = value;
    setData({ ...data, skills: updated });
  };
  const removeSkill = (index) => {
  const updated = data.skills.filter((_, i) => i !== index);

  setData({
    ...data,
    skills: updated,
  });
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
  const removeProject = (index) => {
  const updated = data.projects.filter((_, i) => i !== index);

  setData({
    ...data,
    projects: updated,
  });
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
        <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setData({
          ...data,
          image: reader.result   // ✅ permanent (base64)
        });
      };

      reader.readAsDataURL(file);
    }
  }}
/>
{data?.image && (
  <button
    onClick={() => {
      setData({ ...data, image: null });
    }}
  >
    Remove Image
  </button>
)}
{/* Role */}
<input
  type="text"
  placeholder="Your Role"
  value={data.role || ""}
  onChange={(e) => handleChange("role", e.target.value)}
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
             <button className="delete-btn" onClick={() => removeSkill(i)}>
  ×
</button>
          </div>
        ))}
        <button className="add-btn" onClick={addSkill}>
          + Add Skill
        </button>
      <h3>Languages</h3>

{(data.languages || []).map((lang, index) => (
  <div key={index}>

    <input
      type="text"
      placeholder="Language"
      value={lang.name}
      onChange={(e) => {
        const updated = [...data.languages];
        updated[index].name = e.target.value;
        setData({ ...data, languages: updated });
      }}
    />

    {/* REMOVE BUTTON */}
    <button
      onClick={() => {
        const updated = data.languages.filter((_, i) => i !== index);
        setData({ ...data, languages: updated });
      }}
    >
      Remove
    </button>

  </div>
))}

{/* ADD BUTTON */}
<button
  onClick={() =>
    setData({
      ...data,
      languages: [...(data.languages || []), { name: "" }]
    })
  }
>
  + Add Language
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

    {/* ✅ REMOVE BUTTON */}
    <button
      className="delete-btn"
      onClick={() => removeProject(i)}
    >
      Remove
    </button>

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
        <h3>Certifications</h3>

{(data.certifications || []).map((cert, index) => (
  <div key={index}>

    <input
      type="text"
      placeholder="Certification Name"
      value={cert.name}
      onChange={(e) => {
        const updated = [...data.certifications];
        updated[index].name = e.target.value;
        setData({ ...data, certifications: updated });
      }}
    />

    <input
      type="text"
      placeholder="Organization"
      value={cert.org}
      onChange={(e) => {
        const updated = [...data.certifications];
        updated[index].org = e.target.value;
        setData({ ...data, certifications: updated });
      }}
    />

    <input
      type="text"
      placeholder="Year"
      value={cert.year}
      onChange={(e) => {
        const updated = [...data.certifications];
        updated[index].year = e.target.value;
        setData({ ...data, certifications: updated });
      }}
    />

    <button onClick={() => {
      const updated = data.certifications.filter((_, i) => i !== index);
      setData({ ...data, certifications: updated });
    }}>
      Remove
    </button>

  </div>
))}

<button onClick={() =>
  setData({
    ...data,
    certifications: [
      ...(data.certifications || []),
      { name: "", org: "", year: "" }
    ]
  })
}>
  + Add Certification
</button>
<h3>Contact</h3>

<input
  type="text"
  placeholder="Phone"
  value={data.contact?.phone || ""}
  onChange={(e) =>
    setData({
      ...data,
      contact: { ...data.contact, phone: e.target.value }
    })
  }
/>

<input
  type="email"
  placeholder="Email"
  value={data.contact?.email || ""}
  onChange={(e) =>
    setData({
      ...data,
      contact: { ...data.contact, email: e.target.value }
    })
  }
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