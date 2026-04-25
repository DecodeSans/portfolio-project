import React from "react";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

import Template1 from "../templates/Template1/Template1";
import Template2 from "../templates/Template2/Template2";

export default function Preview() {
  const { data } = useContext(PortfolioContext);

  if (data.template === "template2") {
    return <Template2 data={data} />;
  }

  return <Template1 data={data} />;
}