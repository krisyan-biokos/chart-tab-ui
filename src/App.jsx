import { useState } from "react";
import { Header } from "./components/Header";
import { StrategicLinesPage } from "./pages/StrategicLinesPage";
import { OriginPage } from "./pages/OriginPage";
import { MunicipalitiesPage } from "./pages/MunicipalitiesPage";
import { DeliveryTimelinePage } from "./pages/DeliveryTimelinePage";
import { OrganizationPage } from "./pages/OrganizationPage";
import { StagePage } from "./pages/StagePage";
import { ProjectsListPage } from "./pages/ProjectsListPage";
import { allTabsData } from "./data/mockData";
import "./styles/App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Linhas estratégicas");

  const renderPage = () => {
    switch (activeTab) {
      case allTabsData[0]:
        return <StrategicLinesPage />;
      case allTabsData[1]:
        return <OriginPage />;
      case allTabsData[2]:
        return <MunicipalitiesPage />;
      case allTabsData[3]:
        return <DeliveryTimelinePage />;
      case allTabsData[4]:
        return <OrganizationPage />;
      case allTabsData[5]:
        return <StagePage />;
      case allTabsData[6]:
        return <ProjectsListPage />;
      default:
        return <StrategicLinesPage />;
    }
  };

  return (
    <div className="app">
      <Header
        activeTab={activeTab}
        tabs={allTabsData}
        onTabChange={setActiveTab}
      />
      <div className="main-content">{renderPage()} </div>
    </div>
  );
}

export default App;
