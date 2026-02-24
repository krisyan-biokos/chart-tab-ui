import React from "react";
import { StateCard } from "../components/StateCard";
import { VerticalBarChart } from "../components/Charts";
import { deliveryTimelineData } from "../data/mockData";

export const DeliveryTimelinePage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="stats-grid">
        <StateCard value={22} label="Dotação inicial" />
        <StateCard value={51} label="Total dotação atualizada" />
        <StateCard value={110} label="Ajuste dotação" />
      </div>
      <div className="filters-section">
        <select className="filter-select">
          <option>Origem</option>
        </select>
        <select className="filter-select">
          <option>Municípios</option>
        </select>
      </div>
      <VerticalBarChart
        data={deliveryTimelineData}
        title="Projetos final dos projetos"
      />
    </div>
  );
};
