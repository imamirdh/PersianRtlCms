import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart rounded-lg p-6 shadow-lg border-s-4 border-slate-500 dark:border-none">
      <h1 className="dark:text-white mb-4 font-semibold text-xl">{title}</h1>
      <ResponsiveContainer  width={1200}  aspect={5}>
        <BarChart width={500} height={300} data={data} barSize={50}>
          <XAxis dataKey="name" scale="point" />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
