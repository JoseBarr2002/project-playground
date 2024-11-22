import MetricCard from "@components/metricCard";
import RecentOrdersCardTable from "@components/recentOrdersCardTable";
import SalesCardChart from "@components/salesCardChart";

const DashboardTemplate = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Total Revenue"
            icon="💰"
            text="$45,231.89"
            subText="+20.1% from last month"
          />
          <MetricCard
            title="Orders"
            icon="📦"
            text="+2350"
            subText="+180.1% from last month"
          />
          <MetricCard
            title="Customers"
            icon="👥"
            text="+12,234"
            subText="+19% from last month"
          />
          <MetricCard
            title="Active Tables"
            icon="🍽️"
            text="+573"
            subText="+201 since last hour"
          />
        </div>
        <RecentOrdersCardTable />
        <SalesCardChart />
      </div>
    </div>
  );
};

export default DashboardTemplate;
