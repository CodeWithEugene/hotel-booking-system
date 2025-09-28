
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DailyMetric } from '../types';

interface OccupancyChartProps {
    data: DailyMetric[];
}

const OccupancyChart: React.FC<OccupancyChartProps> = ({ data }) => {
  return (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg h-96">
        <h3 className="text-xl font-semibold text-white mb-4">Weekly Performance</h3>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#415A77" />
                <XAxis dataKey="day" tick={{ fill: '#E0E1DD' }} />
                <YAxis yAxisId="left" orientation="left" stroke="#E0E1DD" tickFormatter={(value) => `${value}%`} />
                <YAxis yAxisId="right" orientation="right" stroke="#E0E1DD" tickFormatter={(value) => `KSHS ${(value / 1000)}k`} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#0D1B2A', border: '1px solid #415A77' }}
                    labelStyle={{ color: '#E0E1DD' }}
                    formatter={(value, name) => {
                        if (name === 'occupancy') return [`${value}%`, 'Occupancy'];
                        if (name === 'revenue') return [`KSHS ${(value as number).toLocaleString()}`, 'Revenue'];
                        return [value, name];
                    }}
                />
                <Legend wrapperStyle={{color: '#E0E1DD'}} />
                <Bar yAxisId="left" dataKey="occupancy" fill="#3b82f6" name="Occupancy (%)" />
                <Bar yAxisId="right" dataKey="revenue" fill="#10B981" name="Revenue (KSHS)" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default OccupancyChart;