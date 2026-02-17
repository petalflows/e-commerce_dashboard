import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = {
  completed: "#10b981",
  pending: "#f59e0b",
  cancelled: "#ef4444",
  refunded: "#6366f1",
};

export default function OrderStatusPie({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="status"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={50}
          paddingAngle={3}
          label={({ status, percent }) => `${status} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
          fontSize={12}
        >
          {data.map((entry) => (
            <Cell key={entry.status} fill={COLORS[entry.status] || "#64748b"} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8 }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
