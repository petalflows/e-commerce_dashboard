import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatCurrency = (v) => `$${v.toLocaleString()}`;

export default function TopProductsBar({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis type="number" tickFormatter={formatCurrency} stroke="#64748b" fontSize={12} />
        <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} width={80} />
        <Tooltip
          formatter={(v) => [formatCurrency(v), "Revenue"]}
          contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8 }}
        />
        <Bar dataKey="total" fill="#f97316" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
