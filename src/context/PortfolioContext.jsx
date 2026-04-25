import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
// Create context
export const PortfolioContext = createContext();

// Provider component
export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("portfolioData",{
    name: "",
    about: "",
    skills: [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "CSS", level: 85 }
],
    education: "",
    contact: "",
    template: "template1", // NEW
    projects: [
      { title: "", description: "", link: "" }
    ]
  });

  return (
    <PortfolioContext.Provider value={{ data, setData }}>
      {children}
  
    </PortfolioContext.Provider>
  );
};