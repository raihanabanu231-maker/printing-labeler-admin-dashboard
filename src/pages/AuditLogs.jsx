import { Search, Filter, History, ShieldAlert, UserX, UserCheck, AlertTriangle, MoreVertical } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Labels.css';

export default function AuditLogs() {
  const logsData = [
    { id: 'LOG-8902', user: 'admin@acme.com', action: 'API Key Generated', resource: 'Organization Settings', ip: '192.168.1.45', status: 'Success', time: '10 mins ago' },
    { id: 'LOG-8901', user: 'john@globex.com', action: 'Failed Login Attempt', resource: 'Authentication', ip: '45.22.19.102', status: 'Failed', time: '25 mins ago' },
    { id: 'LOG-8900', user: 'sarah@initech.com', action: 'Deleted User "mike@initech.com"', resource: 'User Management', ip: '10.0.0.15', status: 'Success', time: '1 hour ago' },
    { id: 'LOG-8899', user: 'system', action: 'Automated Backup Completed', resource: 'Database', ip: 'Internal', status: 'Success', time: '2 hours ago' },
    { id: 'LOG-8898', user: 'unknown', action: 'Rate Limit Exceeded', resource: 'Public API', ip: '203.0.113.42', status: 'Blocked', time: '3 hours ago' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Audit Logs</h1>
          <p className="page-subtitle">Track security events and user activity</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search logs..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid">
        <StatCard title="Total Events (24h)" value="142,590" trend="+5%" isPositive={true} icon={History} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Critical Alerts" value="3" trend="-2" isPositive={true} icon={ShieldAlert} iconColor="#EF4444" iconBg="#FEF2F2" />
        <StatCard title="Failed Logins" value="124" trend="+15" isPositive={false} icon={UserX} iconColor="#F59E0B" iconBg="#FFFBEB" />
        <StatCard title="New Logins" value="1,245" trend="+12%" isPositive={true} icon={UserCheck} iconColor="#10B981" iconBg="#ECFDF5" />
      </div>

      <div className="card labels-table-card">
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Resource</th>
                <th>IP Address</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {logsData.map((log) => (
                <tr key={log.id}>
                  <td className="text-muted text-sm">{log.time}</td>
                  <td className="font-medium">{log.user}</td>
                  <td>{log.action}</td>
                  <td className="text-muted">{log.resource}</td>
                  <td className="text-muted font-mono text-sm">{log.ip}</td>
                  <td>
                    <span className={`badge badge-${log.status === 'Success' ? 'success' : log.status === 'Failed' ? 'danger' : 'warning'}`}>
                      {log.status}
                    </span>
                  </td>
                  <td>
                    <button className="icon-btn-small">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <span className="text-muted text-sm">Showing 1 to 5 of 142,590 entries</span>
          <div className="page-controls">
            <button className="page-btn" disabled>Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <span className="text-muted">...</span>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
