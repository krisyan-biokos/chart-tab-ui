import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/components/Charts.css";

interface HorizontalBarChartProps {
  data: Array<{ name: string; value: number; color?: string }>;
  title?: string;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  title,
}) => {
  return (
    <div className="chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 250, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={250} />
          <Tooltip />
          <Bar dataKey="value" fill="#6b80f5" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface VerticalBarChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
}

export const VerticalBarChart: React.FC<VerticalBarChartProps> = ({
  data,
  title,
}) => {
  return (
    <div className="chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6b80f5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface MultiColorBarChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  title?: string;
}

export const MultiColorBarChart: React.FC<MultiColorBarChartProps> = ({
  data,
  title,
}) => {
  return (
    <div className="chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 250, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={250} />
          <Tooltip />
          {data.length > 0 && (
            <Bar
              dataKey="value"
              fill="#6b80f5"
              radius={[0, 8, 8, 0]}
              shape={<CustomBar data={data} />}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  const color = payload?.color || "#6b80f5";
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      rx={8}
      ry={8}
    />
  );
};
