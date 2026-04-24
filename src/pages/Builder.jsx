import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import "../styles/Builder.css";

export default function Builder() {
  const { data, setData } = useContext(PortfolioContext);
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

        <input
          placeholder="Skills (comma separated)"
          onChange={(e) =>
            setData({ ...data, skills: e.target.value.split(",") })
          }
        />

        <textarea
          placeholder="Education"
          value={data.education}
          onChange={(e) =>
            setData({ ...data, education: e.target.value })
          }
        />

        <input
          placeholder="Contact"
          value={data.contact}
          onChange={(e) =>
            setData({ ...data, contact: e.target.value })
          }
        />

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