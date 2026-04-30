import React from "react";
import "./template2.css";

export default function Template2({ data }) {

  const safeArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [value];
  };

  if (!data) return <div>Loading...</div>;

  const skillsList = safeArray(data?.skills);
  const educationList = safeArray(data?.education);
  const certList = safeArray(data?.certifications);
  const langList = safeArray(data?.languages);

  return (
    <div id="cv-template" className="cv-container">

      {/* HEADER */}
      <div className="cv-header">
        <div>
          <h1>{data?.name}</h1>
          <h2>{data?.role}</h2>
        </div>

        {data?.image && (
          <img src={data.image} alt="profile" className="profile-img" />
        )}
      </div>

      <hr />

      {/* TOP */}
      <div className="cv-top">

        {(data?.contact?.phone || data?.contact?.email || data?.contact?.address) && (
          <div>
            <h3>CONTACT</h3>
            {data?.contact?.phone && <p>📞 {data.contact.phone}</p>}
            {data?.contact?.email && <p>✉️ {data.contact.email}</p>}
            {data?.contact?.address && <p>📍 {data.contact.address}</p>}
          </div>
        )}

        {data?.about && (
          <div>
            <h3>SUMMARY</h3>
            <p>{data.about}</p>
          </div>
        )}
      </div>

      <hr />

      {/* MAIN 2 COLUMN */}
      <div className="cv-main">

        {/* LEFT SIDEBAR */}
        <div className="left">

          {skillsList.length > 0 && (
            <div className="section">
              <h3>SKILLS</h3>
              <ul>
                {skillsList.map((s, i) => (
                  <li key={i}>{s?.name || s}</li>
                ))}
              </ul>
            </div>
          )}

          {educationList.length > 0 && (
            <div className="section">
              <h3>EDUCATION</h3>
              {educationList.map((edu, i) => (
                <div key={i} className="timeline">
                  <h4>{edu?.degree || edu}</h4>
                  {edu?.institute && <p>{edu.institute}</p>}
                  {edu?.duration && <span>{edu.duration}</span>}
                </div>
              ))}
            </div>
          )}

          {langList.length > 0 && (
            <div className="section">
              <h3>LANGUAGES</h3>
              <ul>
                {langList.map((l, i) => (
                  <li key={i}>{l?.name || l}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="right">

          {certList.length > 0 && (
            <div className="section">
              <h3>CERTIFICATIONS</h3>
              {certList.map((c, i) => (
                <div key={i} className="timeline">
                  <h4>{c?.name || c}</h4>
                  {c?.org && <p>{c.org}</p>}
                  {c?.year && <span>{c.year}</span>}
                </div>
              ))}
            </div>
          )}

          {/* ✅ FIX: PROJECTS MOVED INSIDE RIGHT */}
          {data.projects?.length > 0 && (
            <div className="section">
              <h3>PROJECTS</h3>

              {data.projects.map((p, i) => (
                <div key={i} className="timeline">
                  <h4>{p.title}</h4>
                  {p.description && <p>{p.description}</p>}
                  {p.link && <span>{p.link}</span>}
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}