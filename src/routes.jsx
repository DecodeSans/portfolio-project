import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Builder from "./pages/Builder.jsx";
import Preview from "./pages/Preview.jsx";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}