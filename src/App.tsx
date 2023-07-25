import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./Pages/about/About";
import Education from "./Pages/education/Education";
import Projects from "./Pages/projects/Projects";
import Techstack from "./Pages/techstack/Techstack";
import WorkEx from "./Pages/workEx/WorkEx";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <WorkEx />
        <Techstack />
        <Projects />
      </div>
    </>
  );
}

export default App;
