import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatCurrency = (v) => `$${v.toLocaleString()}`;

export default function CategoryBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="category" stroke="#64748b" fontSize={12} />
        <YAxis tickFormatter={formatCurrency} stroke="#64748b" fontSize={12} />
        <Tooltip
          formatter={(v) => [formatCurrency(v), "Sales"]}
          contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8 }}
        />
        <Bar dataKey="total" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
