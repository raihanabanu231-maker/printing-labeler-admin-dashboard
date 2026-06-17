import { Search, Filter, Download, FileText, CheckCircle2, Clock, AlertCircle, DollarSign, MoreVertical } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Labels.css';

export default function Billing() {
  const invoicesData = [
    { id: 'INV-2024-001', organization: 'Acme Corporation', amount: '$1,200.00', status: 'Paid', date: 'Jun 01, 2024' },
    { id: 'INV-2024-002', organization: 'Globex Industries', amount: '$499.00', status: 'Pending', date: 'Jun 15, 2024' },
    { id: 'INV-2024-003', organization: 'Initech', amount: '$99.00', status: 'Overdue', date: 'May 10, 2024' },
    { id: 'INV-2024-004', organization: 'Stark Industries', amount: '$2,500.00', status: 'Paid', date: 'Jun 05, 2024' },
    { id: 'INV-2024-005', organization: 'Wayne Enterprises', amount: '$3,000.00', status: 'Paid', date: 'Jun 01, 2024' },
    { id: 'INV-2024-006', organization: 'Cyberdyne Systems', amount: '$99.00', status: 'Pending', date: 'Jun 20, 2024' },
    { id: 'INV-2024-007', organization: 'Oscorp', amount: '$499.00', status: 'Paid', date: 'Jun 10, 2024' },
    { id: 'INV-2024-008', organization: 'Massive Dynamic', amount: '$1,200.00', status: 'Overdue', date: 'May 15, 2024' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Billing & Invoices</h1>
          <p className="page-subtitle">Manage platform revenue and billing history</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search invoices..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn-outline">
            <Download size={16} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid">
        <StatCard title="Monthly Revenue" value="$25,430" trend="+16.7%" isPositive={true} icon={DollarSign} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Processed (Month)" value="342" trend="+12.4%" isPositive={true} icon={CheckCircle2} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Pending Payments" value="45" trend="+5.2%" isPositive={false} icon={Clock} iconColor="#F59E0B" iconBg="#FFFBEB" />
        <StatCard title="Overdue Invoices" value="12" trend="-8.1%" isPositive={true} icon={AlertCircle} iconColor="#EF4444" iconBg="#FEF2F2" />
      </div>

      <div className="card labels-table-card">
        <div className="table-filters">
          <select className="filter-select">
            <option>All Statuses</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
          <select className="filter-select">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
        </div>
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Organization</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date Issued</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {invoicesData.map((inv) => (
                <tr key={inv.id}>
                  <td>
                    <div className="label-cell">
                      <div className="label-icon-wrapper">
                        <FileText size={14} className="label-icon" />
                      </div>
                      <span className="font-semibold">{inv.id}</span>
                    </div>
                  </td>
                  <td className="text-muted">{inv.organization}</td>
                  <td><span className="font-medium">{inv.amount}</span></td>
                  <td>
                    <span className={`label-status-badge status-${inv.status.toLowerCase()}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="text-muted">{inv.date}</td>
                  <td>
                    <button className="icon-btn-small" title="Download Invoice">
                      <Download size={16} />
                    </button>
                    <button className="icon-btn-small" style={{marginLeft: '0.5rem'}}>
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="pagination">
          <span className="text-muted text-sm">Showing 1 to 8 of 1,245 entries</span>
          <div className="page-controls">
            <button className="page-btn" disabled>Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="text-muted">...</span>
            <button className="page-btn">156</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
