import React, { useEffect, useState } from "react";
import Template1 from "../templates/Template1/Template1";
import Template2 from "../templates/Template2/Template2";
import html2pdf from "html2pdf.js";

const Preview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setData(parsedData);
    }
  }, []);

  const downloadPDF = () => {
    const element = document.getElementById("cv-template");

    if (!element) {
      console.error("CV Template not found!");
      return;
    }

    // ✅ Enable clean PDF mode
    element.classList.add("pdf-mode");

    setTimeout(() => {
      const opt = {
        margin: 0, // 🔥 MUST BE 0 (fixes blank page)
        filename: `${data?.name || "CV"}.pdf`,

        image: { type: "jpeg", quality: 1 },

        html2canvas: {
          scale: 2,
          useCORS: true,
          scrollY: 0,
        },

        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },

        // ✅ Controlled page break
        pagebreak: {
          mode: ["css"],
        },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .toPdf()
        .get("pdf")
        .then((pdf) => {
          // 🔥 REMOVE BLANK PAGE IF EXISTS
          const totalPages = pdf.internal.getNumberOfPages();
          if (totalPages > 1) {
            pdf.deletePage(totalPages);
          }
        })
        .save()
        .then(() => {
          element.classList.remove("pdf-mode");
        });

    }, 300);
  };

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div>
      {/* ✅ Visible Portfolio */}
      <Template1 data={data} />

      {/* ✅ Hidden CV (stable rendering) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "210mm",
          visibility: "hidden", // 🔥 better than opacity
          pointerEvents: "none",
        }}
      >
        <Template2 data={data} />
      </div>

      {/* ✅ Download Button */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          onClick={downloadPDF}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Preview;