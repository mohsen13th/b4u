"use client";

import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { BarData } from "../../types/types";

import { type ChartConfig } from "@/components/ui/chart"
 
const chartConfig = {
  desktop: {
    label: "سایت",
    color: "#2563eb",
  },
  mobile: {
    label: "اپلیکیشن",
    color: "#60a5fa",
  },
} satisfies ChartConfig

type Props = {
  data: BarData[];
};

const BarChart = ({ data }: Props) => {

return (
    <ChartContainer config={chartConfig}>
    <ResponsiveContainer width="100%" height={300}>
      <ReBarChart
        accessibilityLayer 
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="day" tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4,4,0,0]} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4,4,0,0]} />
      </ReBarChart>
    </ResponsiveContainer>
    </ChartContainer>
   
  );


//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <ReBarChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="day" tick={{ fontSize: 14 }} />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="value" fill="#1E40AF" />
//       </ReBarChart>
//     </ResponsiveContainer>
//   );
}

export default BarChart