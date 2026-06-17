import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Info } from 'lucide-react';
import './ChartsWidget.css';

const COLORS = ['#5A52FF', '#F59E0B', '#EF4444'];

export function DonutChartWidget({ data }) {
  return (
    <div className="card chart-card">
      <div className="chart-header">
        <h3 className="chart-title">Label Overview (All Organizations)</h3>
      </div>
      <div className="chart-content">
        <div className="donut-chart-container">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center-text">
            <span className="donut-total">45,678</span>
            <span className="donut-label">Total Labels</span>
          </div>
        </div>
        <div className="chart-legend">
          {data.map((item, index) => (
            <div key={item.name} className="legend-item">
              <div className="legend-indicator" style={{ backgroundColor: COLORS[index] }}></div>
              <div className="legend-text">
                <span className="legend-name">{item.name}</span>
                <span className="legend-value">{item.value.toLocaleString()}</span>
                <span className="legend-percent">{item.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-footer">
        <Info size={14} className="info-icon" />
        <span>Total Labels Created by All Organizations</span>
      </div>
    </div>
  );
}

export function LineChartWidget({ data }) {
  return (
    <div className="card chart-card">
      <div className="chart-header">
        <h3 className="chart-title">Labels Trend (All Organizations)</h3>
        <select className="chart-select">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="chart-content line-chart-content">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dx={-10} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
            <Line type="monotone" dataKey="Total Created" stroke="#5A52FF" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Published" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Draft" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Deleted" stroke="#EF4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
