import React from "react";
import "../styles/components/StateCard.css";

interface StateCardProps {
  value: number | string;
  label: string;
}

export const StateCard: React.FC<StateCardProps> = ({ value, label }) => {
  return (
    <div className="state-card">
      <div className="state-value">{value}</div>
      <div className="state-label">{label}</div>
    </div>
  );
};
