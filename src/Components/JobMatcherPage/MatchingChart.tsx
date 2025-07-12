"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Skills Match", value: 55 },
  { name: "Experience Match", value: 25 },
  { name: "Tone/Culture Match", value: 15 },
];

const COLORS = ["#007bff", "#facc15", "#dc2626"];
const RADIAN = Math.PI / 180;
const renderCenterLabel = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const percent = Math.round((data[0].value / total) * 100);
  return (
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={20}
      fontWeight="bold"
    >
      {percent}%
    </text>
  );
};

export default function MatchingChart() {
  return (
    <div className="dashboard_card">
      <h4 className="section_sub_title !mb-8">Matching</h4>

      <div className="flex justify-center items-center gap-8">
        {/* Left */}
        <ResponsiveContainer width={200} height={250}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={90}
              dataKey="value"
              stroke="none"
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            {renderCenterLabel()}
          </PieChart>
        </ResponsiveContainer>

        {/* Right */}
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="w-3.5 h-3.5 rounded-[2px]"
                style={{ background: COLORS[0] }}
              />
              <span>Skills Match</span>
            </div>
            <p className="pl-5 text-sm mt-1 text-gray-500">55%</p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div
                className="w-3.5 h-3.5 rounded-[2px]"
                style={{ background: COLORS[1] }}
              />
              <span>Experience Match</span>
            </div>
            <p className="pl-5 text-sm mt-1 text-gray-500">25%</p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div
                className="w-3.5 h-3.5 rounded-[2px]"
                style={{ background: COLORS[2] }}
              />
              <span>Tone/Culture Match</span>
            </div>
            <p className="pl-5 text-sm mt-1 text-gray-500">15%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
