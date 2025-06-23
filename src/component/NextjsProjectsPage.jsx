// HtmlProjectsPage.js
import React from "react";
import ProjectsPage from "./AllProjectsPage";
import { nextProjects } from "./AllProjectsData";

const NextjsProjectsPage = () => {
  return <ProjectsPage category="nextjs" projects={nextProjects} />;
};

export default NextjsProjectsPage;
