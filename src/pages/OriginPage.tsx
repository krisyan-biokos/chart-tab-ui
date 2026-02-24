import React from "react";
import { StateCard } from "../components/StateCard";
import { VerticalBarChart } from "../components/Charts";
import { originData } from "../data/mockData";
import "../styles/Pages.css";

export const OriginPage: React.FC = () => {
  return (
    <div className="page-content origin-layout">
      <div className="origin-chart-area">
        <VerticalBarChart data={originData} title="Projetos por origem" />
      </div>
      <div className="origin-stats">
        <StateCard value={651} label="Projetos" />
        <StateCard value={34} label="Programas G1" />
        <StateCard value={1} label="Projetos sem origem" />
      </div>
    </div>
  );
};
