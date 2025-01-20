import MetricCard from "@components/metricCard";
import RecentOrdersCardTable from "@components/recentOrdersCardTable";
import SalesCardChart from "@components/salesCardChart";

import mockMetricCardData from "./mockMetricCardData";
const DashboardTemplate = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
        <RecentOrdersCardTable />
        <div className="grid gap-6 mb-4 md:grid-cols-4 xl:grid-cols-4">
          {mockMetricCardData.map((card, index) => (
            <MetricCard
              key={index}
              title={card.title}
              icon={card.icon}
              text={card.text}
              subText={card.subText}
            />
          ))}
        </div>
        <SalesCardChart />
      </div>
    </div>
  );
};

export default DashboardTemplate;
