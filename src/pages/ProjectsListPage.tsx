import React from "react";
import { ProjectsTable } from "../components/Table";
import { projectsListData } from "../data/mockData";

export const ProjectsListPage: React.FC = () => {
  return (
    <div className="page-content">
      <ProjectsTable data={projectsListData} />
    </div>
  );
};
