import { useState, useEffect } from "react";
import {
  getMonthlyRevenue,
  getSalesByCategory,
  getOrderStatus,
  getSalesByRegion,
  getTopProducts,
} from "../api";
import RevenueLineChart from "./Charts/RevenueLineChart";
import CategoryBarChart from "./Charts/CategoryBarChart";
import OrderStatusPie from "./Charts/OrderStatusPie";
import RegionAreaChart from "./Charts/RegionAreaChart";
import TopProductsBar from "./Charts/TopProductsBar";
import OrderTable from "./OrderTable";

export default function Dashboard() {
  const [revenue, setRevenue] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [regions, setRegions] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getMonthlyRevenue(),
      getSalesByCategory(),
      getOrderStatus(),
      getSalesByRegion(),
      getTopProducts(),
    ]).then(([rev, cat, stat, reg, top]) => {
      setRevenue(rev);
      setCategories(cat);
      setStatuses(stat);
      setRegions(reg);
      setTopProducts(top);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="loading">Loading dashboard...</div>;

  return (
    <div className="dashboard">
      <h1>E-Commerce Sales Dashboard</h1>
      <p className="subtitle">Overview of sales performance and order analytics</p>

      <div className="grid">
        <div className="card full">
          <h2>Monthly Revenue</h2>
          <RevenueLineChart data={revenue} />
        </div>

        <div className="card">
          <h2>Sales by Category</h2>
          <CategoryBarChart data={categories} />
        </div>

        <div className="card">
          <h2>Order Status</h2>
          <OrderStatusPie data={statuses} />
        </div>

        <div className="card">
          <h2>Revenue by Region</h2>
          <RegionAreaChart data={regions} />
        </div>

        <div className="card">
          <h2>Top 10 Products</h2>
          <TopProductsBar data={topProducts} />
        </div>

        <div className="card full">
          <h2>Recent Orders</h2>
          <OrderTable />
        </div>
      </div>
    </div>
  );
}
