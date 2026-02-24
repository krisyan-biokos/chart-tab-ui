import React from "react";
import { VerticalBarChart } from "../components/Charts";
import { stageData } from "../data/mockData";

export const StagePage: React.FC = () => {
  return (
    <div className="page-content">
      <VerticalBarChart data={stageData} title="Projetos por etapa" />
    </div>
  );
};
