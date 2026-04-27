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
      console.log("Loaded Data:", parsedData); // 🔍 debug
      setData(parsedData);
    }
  }, []);

  const downloadPDF = () => {
    const element = document.getElementById("cv-template");

    if (!element) {
      console.error("CV Template not found!");
      return;
    }

    html2pdf().from(element).save();
  };

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div>
      {/* Portfolio Preview */}
      <Template1 data={data} />

      {/* Hidden CV Template */}
      <div style={{ position: "absolute", top: "-9999px" }}>
        <Template2 data={data} />
      </div>

      {/* Download Button */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={downloadPDF}>Download CV</button>
      </div>
    </div>
  );
};

export default Preview;