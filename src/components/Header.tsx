import React from "react";
import "../styles/components/Header.css";

interface HeaderProps {
  activeTab: string;
  tabs: string[];
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  tabs,
  onTabChange,
}) => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-title">
            <h1>Amapá, a fronteira do futuro</h1>
            <p>Plano Amapá 2043</p>
          </div>
          <div className="header-filters">
            <p className="header-info">
              Despenses • <span className="highlight">Filtro aplicados</span>
            </p>
            <p className="applied-filters">
              3 filtros aplicados. Ano 2025 Emenda Sem emendo
            </p>
            <div className="header-buttons">
              <button className="btn btn-filters">Filtros</button>
              <button className="btn btn-clear">Limpar filtros</button>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};
