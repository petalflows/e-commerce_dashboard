import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatMonth = (str) => {
  const [y, m] = str.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[parseInt(m) - 1]} ${y.slice(2)}`;
};

const formatCurrency = (v) => `$${v.toLocaleString()}`;

export default function RevenueLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="month" tickFormatter={formatMonth} stroke="#64748b" fontSize={12} />
        <YAxis tickFormatter={formatCurrency} stroke="#64748b" fontSize={12} />
        <Tooltip
          formatter={(v) => [formatCurrency(v), "Revenue"]}
          labelFormatter={formatMonth}
          contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8 }}
        />
        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
