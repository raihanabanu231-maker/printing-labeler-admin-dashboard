import { Search, Filter, Plus, LifeBuoy, CheckCircle2, Clock, AlertCircle, MoreVertical } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Labels.css';

export default function SupportTickets() {
  const ticketsData = [
    { id: 'TKT-1024', subject: 'API Rate Limit Exceeded', org: 'Acme Corporation', priority: 'High', status: 'Open', agent: 'Unassigned', time: '10 mins ago' },
    { id: 'TKT-1023', subject: 'How to export labels?', org: 'Globex Industries', priority: 'Low', status: 'Resolved', agent: 'Sarah Jenkins', time: '2 hours ago' },
    { id: 'TKT-1022', subject: 'Billing issue on Pro plan', org: 'Initech', priority: 'Medium', status: 'In Progress', agent: 'Mike Ross', time: '5 hours ago' },
    { id: 'TKT-1021', subject: 'Feature Request: Bulk Edit', org: 'Stark Industries', priority: 'Low', status: 'Open', agent: 'Unassigned', time: '1 day ago' },
    { id: 'TKT-1020', subject: 'Login not working for team', org: 'Wayne Enterprises', priority: 'High', status: 'Resolved', agent: 'Sarah Jenkins', time: '1 day ago' },
    { id: 'TKT-1019', subject: 'Custom domain setup', org: 'Cyberdyne Systems', priority: 'Medium', status: 'In Progress', agent: 'David Kim', time: '2 days ago' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Support Tickets</h1>
          <p className="page-subtitle">Manage customer inquiries and technical support</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search tickets..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <Plus size={16} />
            <span>Create Ticket</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid">
        <StatCard title="Open Tickets" value="24" trend="-5%" isPositive={true} icon={LifeBuoy} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Avg Response Time" value="1.5h" trend="-30m" isPositive={true} icon={Clock} iconColor="#F59E0B" iconBg="#FFFBEB" />
        <StatCard title="Resolved (Today)" value="45" trend="+12" isPositive={true} icon={CheckCircle2} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Critical Issues" value="2" trend="0" isPositive={true} icon={AlertCircle} iconColor="#EF4444" iconBg="#FEF2F2" />
      </div>

      <div className="card labels-table-card">
        <div className="table-filters">
          <select className="filter-select">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="filter-select">
            <option>All Statuses</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Organization</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Agent</th>
                <th>Updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ticketsData.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span className="font-semibold">{ticket.subject}</span>
                      <span className="text-muted text-sm">{ticket.id}</span>
                    </div>
                  </td>
                  <td className="text-muted">{ticket.org}</td>
                  <td>
                    <span className={`badge badge-${ticket.priority === 'High' ? 'danger' : ticket.priority === 'Medium' ? 'warning' : 'info'}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`label-status-badge status-${ticket.status.toLowerCase().replace(' ', '-')}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="text-muted">{ticket.agent}</td>
                  <td className="text-muted text-sm">{ticket.time}</td>
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
      </div>
    </DashboardLayout>
  );
}
