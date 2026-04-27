import React from "react";
import "./template2.css";

export default function Template2({ data }) {
  if (!data) return <div>Loading...</div>;

  return (
    <div id="cv-template" className="cv-container">

      {/* HEADER */}
      <div className="cv-header">
        <div className="cv-image">
          {data?.image && (
            <img src={data.image} alt="profile" crossOrigin="anonymous" />
          )}
        </div>

        <div className="cv-title">
          <h1>{data?.name}</h1>
          <h2>{data?.role}</h2>
        </div>
      </div>

      {/* BODY */}
      <div className="cv-body">

        {/* LEFT */}
        <div className="cv-left">

          {/* CONTACT */}
          {(data?.contact?.phone || data?.contact?.email || data?.contact?.address) && (
            <>
              <h3>CONTACT</h3>
              {data.contact.phone && <p>{data.contact.phone}</p>}
              {data.contact.address && <p>{data.contact.address}</p>}
              {data.contact.email && <p>{data.contact.email}</p>}
            </>
          )}

          {/* SKILLS */}
          {data?.skills?.some(s => s.name) && (
            <>
              <h3>SKILLS</h3>
              <ul>
                {data.skills.map((skill, i) =>
                  skill.name && <li key={i}>{skill.name}</li>
                )}
              </ul>
            </>
          )}

          {/* LANGUAGES */}
          {data?.languages?.some(l => l.name) && (
            <>
              <h3>LANGUAGES</h3>
              {data.languages.map((lang, i) =>
                lang.name && <p key={i}>{lang.name}</p>
              )}
            </>
          )}

          {/* CERTIFICATIONS */}
          {data?.certifications?.some(c => c.name) && (
            <>
              <h3>CERTIFICATIONS</h3>
              <ul>
                {data.certifications.map((cert, i) =>
                  cert.name && (
                    <li key={i}>
                      {cert.name}
                      {cert.org && ` | ${cert.org}`}
                      {cert.year && ` (${cert.year})`}
                    </li>
                  )
                )}
              </ul>
            </>
          )}

        </div>

        {/* RIGHT */}
        <div className="cv-right">

          {/* PROFILE */}
          {data?.about && (
            <div className="section">
              <h3>PERSONAL PROFILE</h3>
              <p>{data.about}</p>
            </div>
          )}

          {/* EDUCATION */}
          {(Array.isArray(data.education)
            ? data.education.some(e => e.degree || e.institute)
            : data.education) && (
            <div className="section">
              <h3>EDUCATION</h3>

              {Array.isArray(data.education) ? (
                data.education.map((edu, i) =>
                  (edu.degree || edu.institute) && (
                    <div key={i} className="item">
                      <h4>{edu.degree}</h4>
                      <p>{edu.institute}</p>
                      <p>{edu.duration}</p>
                    </div>
                  )
                )
              ) : (
                <p>{data.education}</p>
              )}
            </div>
          )}

          {/* ❌ EXPERIENCE REMOVED */}

        </div>
      </div>
    </div>
  );
}