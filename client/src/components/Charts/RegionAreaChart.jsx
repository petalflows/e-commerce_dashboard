import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatCurrency = (v) => `$${v.toLocaleString()}`;

export default function RegionAreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="region" stroke="#64748b" fontSize={12} />
        <YAxis tickFormatter={formatCurrency} stroke="#64748b" fontSize={12} />
        <Tooltip
          formatter={(v) => [formatCurrency(v), "Revenue"]}
          contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8 }}
        />
        <Area type="monotone" dataKey="total" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
