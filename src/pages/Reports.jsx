import { Calendar, Download, BarChart2, PieChart, TrendingUp, Activity } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import './Labels.css';

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports & Analytics</h1>
          <p className="page-subtitle">Deep dive into platform metrics and usage</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">
            <Calendar size={16} />
            <span>Last 30 Days</span>
          </button>
          <button className="btn-primary">
            <Download size={16} />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>User Growth</h3>
            <Activity size={20} color="#5A52FF" />
          </div>
          <div style={{ height: '200px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="text-muted">Line Chart Visualization Placeholder</span>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Revenue by Plan</h3>
            <PieChart size={20} color="#10B981" />
          </div>
          <div style={{ height: '200px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="text-muted">Donut Chart Visualization Placeholder</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="table-header" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Top Performing Organizations</h3>
        </div>
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Organization</th>
                <th>Active Users</th>
                <th>Labels Created</th>
                <th>API Requests</th>
                <th>Growth (MoM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Acme Corporation</td>
                <td>1,245</td>
                <td>12,500</td>
                <td>1.2M</td>
                <td style={{ color: 'var(--success)' }}>+15%</td>
              </tr>
              <tr>
                <td className="font-medium">Globex Industries</td>
                <td>890</td>
                <td>8,200</td>
                <td>850K</td>
                <td style={{ color: 'var(--success)' }}>+8%</td>
              </tr>
              <tr>
                <td className="font-medium">Stark Industries</td>
                <td>2,100</td>
                <td>25,000</td>
                <td>3.5M</td>
                <td style={{ color: 'var(--success)' }}>+22%</td>
              </tr>
              <tr>
                <td className="font-medium">Wayne Enterprises</td>
                <td>1,500</td>
                <td>18,000</td>
                <td>2.1M</td>
                <td style={{ color: 'var(--success)' }}>+12%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
