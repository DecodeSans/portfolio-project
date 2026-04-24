import { capitalize, formatSkills, truncate, formatLink } from "../../utils/helpers";
import "./template1.css";

export default function Template1({ data }) {
  return (
    <div className="template">

      <h1>{capitalize(data.name)}</h1>
      <p>{truncate(data.about, 120)}</p>

      <h2>Skills</h2>
      <p>{formatSkills(data.skills)}</p>

      <h2>Projects</h2>
      {data.projects.map((p, i) => (
        <div key={i} className="card">
          <h4>{capitalize(p.title)}</h4>
          <p>{truncate(p.description, 100)}</p>
          <a href={formatLink(p.link)} target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      ))}

      <h2>Education</h2>
      <p>{data.education}</p>

      <h2>Contact</h2>
      <p>{data.contact}</p>

    </div>
  );
}