import React from "react";
import { tableHeaderData } from "../data/mockData";
import "../styles/components/Table.css";

interface ProjectData {
  id: number;
  name: string;
  origin: string;
  organization: string;
  municipality: string;
  deadline: string;
  progress: string;
  strategicLine: string;
}

interface ProjectsTableProps {
  data: ProjectData[];
}

export const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
  return (
    <div className="table-container">
      <table className="projects-table">
        <thead>
          <tr>
            {tableHeaderData.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((project) => (
            <tr key={project.id}>
              <td className="project-name">{project.name}</td>
              <td>{project.origin}</td>
              <td>{project.organization}</td>
              <td>{project.municipality}</td>
              <td>{project.deadline}</td>
              <td>{project.progress}</td>
              <td>{project.strategicLine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
