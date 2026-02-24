import React from "react";
import { StateCard } from "../components/StateCard";
import { VerticalBarChart } from "../components/Charts";
import { originData } from "../data/mockData";

export const OriginPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="stats-grid">
        <StateCard value={651} label="Projetos" />
        <StateCard value={34} label="Programas G1" />
        <StateCard value={1} label="Projetos sem origem" />
      </div>
      <VerticalBarChart data={originData} title="Projetos por origem" />
    </div>
  );
};
