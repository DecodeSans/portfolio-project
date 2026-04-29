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

        {data?.image && <img src={data.image} alt="profile" />}
      </div>

      <hr />

      {/* TOP */}
      <div className="cv-top">

        {(data?.contact?.phone || data?.contact?.email || data?.contact?.address) && (
          <div className="no-break">
            <h3>CONTACT</h3>
            {data?.contact?.phone && <p>📞 {data.contact.phone}</p>}
            {data?.contact?.email && <p>✉️ {data.contact.email}</p>}
            {data?.contact?.address && <p>📍 {data.contact.address}</p>}
          </div>
        )}

        {data?.about && (
          <div className="no-break">
            <h3>SUMMARY</h3>
            <p>{data.about}</p>
          </div>
        )}
      </div>

      <hr />

      {/* MAIN */}
      <div className="cv-main">

        {/* LEFT */}
        <div className="left">

          {skillsList.length > 0 && (
            <div className="section no-break">
              <h3>SKILLS</h3>
              <ul>
                {skillsList.map((s, i) => (
                  <li key={i}>{s?.name || s}</li>
                ))}
              </ul>
            </div>
          )}

          {educationList.length > 0 && (
            <div className="section no-break">
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

          {/* ✅ LANGUAGES MOVED HERE */}
          {langList.length > 0 && (
            <div className="section no-break">
              <h3>LANGUAGES</h3>
              {langList.map((l, i) => (
                <p key={i}>{l?.name || l}</p>
              ))}
            </div>
          )}

        </div>

        {/* RIGHT */}
        <div className="right">

          {certList.length > 0 && (
            <div className="section no-break">
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

        </div>

      </div>
    </div>
  );
}