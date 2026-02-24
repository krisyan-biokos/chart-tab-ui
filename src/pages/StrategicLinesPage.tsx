import React from "react";
import { StateCard } from "../components/StateCard";
import { MultiColorBarChart } from "../components/Charts";
import { strategicLinesData } from "../data/mockData";

export const StrategicLinesPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="stats-grid">
        <StateCard value={7} label="Linhas estratégicas" />
        <StateCard value={40} label="Estratégias" />
        <StateCard value={178} label="Ações estratégicas" />
        <StateCard value={651} label="Projetos" />
      </div>
      <MultiColorBarChart
        data={strategicLinesData}
        title="Projetos por linha estratégica"
      />
    </div>
  );
};
