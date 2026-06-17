import { RefreshCw, Download, Activity, HardDrive, Cpu, Clock, Server, CheckCircle2, AlertCircle } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Labels.css';

export default function SystemHealth() {
  const services = [
    { name: 'Core API API', status: 'Operational', uptime: '99.99%', latency: '45ms' },
    { name: 'Label Processing Engine', status: 'Operational', uptime: '99.95%', latency: '120ms' },
    { name: 'Database Cluster', status: 'Operational', uptime: '99.99%', latency: '12ms' },
    { name: 'Storage Service', status: 'Degraded', uptime: '98.50%', latency: '350ms' },
    { name: 'Authentication (SSO)', status: 'Operational', uptime: '100%', latency: '25ms' },
    { name: 'Background Workers', status: 'Operational', uptime: '99.90%', latency: 'N/A' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">System Health</h1>
          <p className="page-subtitle">Monitor platform infrastructure and services</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
          <button className="btn-outline">
            <Download size={16} />
            <span>Export Logs</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid">
        <StatCard title="Overall Uptime" value="99.99%" trend="+0.01%" isPositive={true} icon={Activity} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Avg Latency" value="45ms" trend="-5ms" isPositive={true} icon={Clock} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="CPU Usage" value="42%" trend="+5%" isPositive={false} icon={Cpu} iconColor="#F59E0B" iconBg="#FFFBEB" />
        <StatCard title="Storage" value="78%" trend="+2%" isPositive={false} icon={HardDrive} iconColor="#3B82F6" iconBg="#EFF6FF" />
      </div>

      <div className="card">
        <div className="table-header" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Service Status</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map((service, idx) => (
            <div key={idx} style={{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: '6px' }}>
                    <Server size={18} className="text-muted" />
                  </div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.95rem' }}>{service.name}</h4>
                </div>
                {service.status === 'Operational' ? (
                  <CheckCircle2 size={18} color="var(--success)" />
                ) : (
                  <AlertCircle size={18} color="var(--warning)" />
                )}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span className="text-muted">Status</span>
                  <span style={{ color: service.status === 'Operational' ? 'var(--success)' : 'var(--warning)', fontWeight: 500 }}>
                    {service.status}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span className="text-muted">Uptime</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span className="text-muted">Latency</span>
                  <span className="font-medium">{service.latency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
