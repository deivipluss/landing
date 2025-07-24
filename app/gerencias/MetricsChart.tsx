import React from 'react';
import { motion } from 'framer-motion';

interface ChartDataPoint {
  year: number;
  value: number;
}

interface MetricsChartProps {
  data: {
    innovacion: ChartDataPoint[];
    tecnologia: ChartDataPoint[];
    comunicacion: ChartDataPoint[];
  };
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data }) => {
  const maxValue = Math.max(
    ...data.innovacion.map(d => d.value),
    ...data.tecnologia.map(d => d.value),
    ...data.comunicacion.map(d => d.value)
  );

  const getHeight = (value: number) => `${(value / maxValue) * 100}%`;

  return (
    <div className="h-[400px] relative flex items-end justify-between gap-16 p-6">
      {Object.entries(data).map(([key, values], categoryIndex) => (
        <div key={key} className="flex-1 flex items-end justify-center">
          <div className="w-full space-y-2">
            <h4 className="text-center text-white font-medium capitalize mb-4">{key}</h4>
            <div className="relative h-[300px] flex items-end justify-around">
              {values.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center group">
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A1A2E] text-white text-sm py-1 px-2 rounded">
                    {item.value}%
                  </div>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: getHeight(item.value) }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 0.5 }}
                    className="w-8 bg-gradient-to-t from-[#4A90E2] to-[#00F5D4] rounded-t-md"
                  />
                  <span className="text-gray-400 text-sm mt-2">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {/* Y-axis labels */}
      <div className="absolute left-0 h-[300px] flex flex-col justify-between">
        {[100, 75, 50, 25, 0].map((value) => (
          <div key={value} className="flex items-center">
            <span className="text-gray-400 text-xs mr-2">{value}%</span>
            <div className="w-full border-b border-gray-700/30" />
          </div>
        ))}
      </div>
    </div>
  );
};
