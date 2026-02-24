import React from "react";
import { StateCard } from "../components/StateCard";
import { VerticalBarChart } from "../components/Charts";
import { municipalitiesData } from "../data/mockData";

export const MunicipalitiesPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="stats-grid">
        <StateCard value={7} label="Projetos sem município" />
      </div>
      <VerticalBarChart data={municipalitiesData} title="Projetos por origem" />
    </div>
  );
};
