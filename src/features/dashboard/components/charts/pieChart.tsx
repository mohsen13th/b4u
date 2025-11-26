"use client";

import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieData } from "../../types/types";

type Props = {
  data: PieData[];
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PieChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RePieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="45%"
          outerRadius={90}
          fill="#8884d8"
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="right"
          wrapperStyle={{
            fontSize: "12px",
            lineHeight: "20px",
          }}
        />
      </RePieChart>
    </ResponsiveContainer>
  );
}
