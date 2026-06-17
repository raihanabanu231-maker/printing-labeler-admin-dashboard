import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './StatCard.css';

export default function StatCard({ title, value, trend, isPositive, icon: Icon, iconColor, iconBg }) {
  return (
    <div className="card stat-card">
      <div className="stat-header">
        <div className="stat-title">{title}</div>
        <div 
          className="stat-icon-wrapper" 
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          <Icon size={20} />
        </div>
      </div>
      <div className="stat-value">{value}</div>
      {trend && (
        <div className="stat-trend">
          <span className={`trend-badge ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {trend}
          </span>
          <span className="trend-text">from last month</span>
        </div>
      )}
    </div>
  );
}
