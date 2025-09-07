"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useEffect, useState } from "react";

const COLORS = ["#007bff", "#facc15", "#dc2626", "#16a34a"];
const RADIAN = Math.PI / 180;

export default function MatchingChart({ data }: any) {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      const formattedData = [
        { name: "Skills Match", value: data?.skills },
        { name: "Experience Match", value: data?.experience },
        { name: "Education Match", value: data?.education },
        { name: "Tone Match", value: data?.tone },
      ];
      setChartData(formattedData);
    }
  }, [data]);

  const renderCenterLabel = () => {
    if (!chartData.length) return null;
    const total = chartData.reduce((acc, item) => acc + item.value, 0);
    const percent = Math.round((chartData[0].value / total) * 100);
    return (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={24}
        fontWeight="bold"
      >
        {percent}%
      </text>
    );
  };

  return (
    <div className="dashboard_card">
      <h4 className="section_sub_title !mb-8">Matching</h4>

      <div className="flex justify-center items-center md:gap-8 flex-col md:flex-row">
        {/* Left */}
        <ResponsiveContainer width={220} height={270}>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={60}
              outerRadius={110}
              dataKey="value"
              stroke="none"
              labelLine={false}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            {renderCenterLabel()}
          </PieChart>
        </ResponsiveContainer>

        {/* Right */}
        <div className="space-y-3">
          {chartData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <div
                  className="w-3.5 h-3.5 rounded-[2px]"
                  style={{ background: COLORS[index % COLORS.length] }}
                />
                <span>{item.name}</span>
              </div>
              <p className="pl-5 text-sm mt-1 text-gray-500">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
