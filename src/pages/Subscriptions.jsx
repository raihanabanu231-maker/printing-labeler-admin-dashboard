import { Search, Plus, Filter, MoreVertical, CreditCard, CheckCircle2, AlertTriangle, Users, TrendingUp } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Labels.css'; // Reusing Labels CSS for stats grid and table styles

export default function Subscriptions() {
  const subscriptionsData = [
    { id: 1, organization: 'Acme Corporation', plan: 'Enterprise', status: 'Active', mrr: '$1,200', renewal: 'Jul 01, 2024' },
    { id: 2, organization: 'Globex Industries', plan: 'Pro', status: 'Active', mrr: '$499', renewal: 'Jun 25, 2024' },
    { id: 3, organization: 'Initech', plan: 'Starter', status: 'Past Due', mrr: '$99', renewal: 'Jun 10, 2024' },
    { id: 4, organization: 'Stark Industries', plan: 'Enterprise', status: 'Active', mrr: '$2,500', renewal: 'Aug 15, 2024' },
    { id: 5, organization: 'Umbrella Corp', plan: 'Pro', status: 'Canceled', mrr: '$0', renewal: '-' },
    { id: 6, organization: 'Wayne Enterprises', plan: 'Enterprise', status: 'Active', mrr: '$3,000', renewal: 'Dec 01, 2024' },
    { id: 7, organization: 'Cyberdyne Systems', plan: 'Starter', status: 'Active', mrr: '$99', renewal: 'Jun 20, 2024' },
    { id: 8, organization: 'Oscorp', plan: 'Pro', status: 'Active', mrr: '$499', renewal: 'Jul 10, 2024' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Subscriptions</h1>
          <p className="page-subtitle">Manage organization subscriptions and MRR</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search subscriptions..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <Plus size={16} />
            <span>New Subscription</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid">
        <StatCard title="Total MRR" value="$125,430" trend="+12.5%" isPositive={true} icon={TrendingUp} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Active Subscriptions" value="842" trend="+5.2%" isPositive={true} icon={CheckCircle2} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Past Due" value="15" trend="-2.1%" isPositive={false} icon={AlertTriangle} iconColor="#F59E0B" iconBg="#FFFBEB" />
        <StatCard title="Total Organizations" value="857" trend="+4.8%" isPositive={true} icon={Users} iconColor="#3B82F6" iconBg="#EFF6FF" />
      </div>

      <div className="card labels-table-card">
        <div className="table-filters">
          <select className="filter-select">
            <option>All Plans</option>
            <option>Enterprise</option>
            <option>Pro</option>
            <option>Starter</option>
          </select>
          <select className="filter-select">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Past Due</option>
            <option>Canceled</option>
          </select>
        </div>
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Organization</th>
                <th>Plan</th>
                <th>Status</th>
                <th>MRR</th>
                <th>Renewal Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {subscriptionsData.map((sub) => (
                <tr key={sub.id}>
                  <td>
                    <div className="label-cell">
                      <div className="label-icon-wrapper">
                        <CreditCard size={14} className="label-icon" />
                      </div>
                      <span className="font-semibold">{sub.organization}</span>
                    </div>
                  </td>
                  <td><span className="text-muted">{sub.plan}</span></td>
                  <td>
                    <span className={`label-status-badge status-${sub.status.toLowerCase().replace(' ', '-')}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="font-medium">{sub.mrr}</td>
                  <td className="text-muted">{sub.renewal}</td>
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
          <span className="text-muted text-sm">Showing 1 to 8 of 857 entries</span>
          <div className="page-controls">
            <button className="page-btn" disabled>Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="text-muted">...</span>
            <button className="page-btn">108</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
