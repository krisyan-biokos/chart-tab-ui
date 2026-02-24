import React from 'react';
import { StateCard } from '../components/StateCard';
import { HorizontalBarChart } from '../components/Charts';
import { organizationData } from '../data/mockData';

export const OrganizationPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="stats-grid">
        <StateCard value={2} label="Projetos sem órgão" />
      </div>
      <HorizontalBarChart data={organizationData} title="Projetos por órgão" />
    </div>
  );
};
