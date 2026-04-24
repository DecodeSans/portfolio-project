import "./template2.css";

export default function Template2({ data }) {
  return (
    <div className="t2">
      <h1>{data.name}</h1>
      <p>{data.about}</p>

      <h3>Skills</h3>
      <ul>
        {data.skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <h3>Projects</h3>
      {data.projects.map((p, i) => (
        <div key={i}>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}