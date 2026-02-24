import React from "react";
import "../styles/components/StateCard.css";

interface StateCardProps {
  value: number | string;
  label: string;
}

export const StateCard: React.FC<StateCardProps> = ({ value, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};
