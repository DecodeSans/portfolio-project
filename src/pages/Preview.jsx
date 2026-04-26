import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

import Template1 from "../templates/Template1/Template1";
import Template2 from "../templates/Template2/Template2";

export default function Preview() {
  const { data } = useContext(PortfolioContext);

  // Fallback safety (prevents crash)
  if (!data) return <div>Loading...</div>;

  // Template switch
  if (data.template === "template2") {
    return <Template2 data={data} />;
  }

  // Default template
  return <Template1 data={data} />;
}