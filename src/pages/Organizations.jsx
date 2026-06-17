import { Building2, Search, Plus, Filter, MoreVertical } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import './Organizations.css';

export default function Organizations() {
  const organizations = [
    { id: 1, organization: 'Acme Corporation', plan: 'Enterprise', users: 300, labels: 5678, status: 'Active', joinedOn: 'May 10, 2024' },
    { id: 2, organization: 'Globex Industries', plan: 'Pro', users: 250, labels: 4890, status: 'Active', joinedOn: 'Apr 22, 2024' },
    { id: 3, organization: 'Initech', plan: 'Pro', users: 180, labels: 3456, status: 'Active', joinedOn: 'Mar 15, 2024' },
    { id: 4, organization: 'Umbrella Corp', plan: 'Starter', users: 50, labels: 2987, status: 'Suspended', joinedOn: 'Feb 10, 2024' },
    { id: 5, organization: 'Stark Industries', plan: 'Enterprise', users: 320, labels: 2345, status: 'Active', joinedOn: 'Jan 05, 2024' },
    { id: 6, organization: 'Wayne Enterprises', plan: 'Pro', users: 150, labels: 1987, status: 'Trial', joinedOn: 'Dec 20, 2023' },
    { id: 7, organization: 'Cyberdyne Systems', plan: 'Starter', users: 60, labels: 1234, status: 'Inactive', joinedOn: 'Nov 15, 2023' },
    { id: 8, organization: 'Oscorp', plan: 'Pro', users: 110, labels: 987, status: 'Active', joinedOn: 'Nov 05, 2023' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Organizations</h1>
          <p className="page-subtitle">Manage and monitor all organizations on the platform</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search organizations..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <Plus size={16} />
            <span>Add Organization</span>
          </button>
        </div>
      </div>

      <div className="card org-table-card">
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Organization</th>
                <th>Plan</th>
                <th className="text-right">Users</th>
                <th className="text-right">Total Labels</th>
                <th>Status</th>
                <th>Joined On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {organizations.map((org) => (
                <tr key={org.id}>
                  <td>
                    <div className="org-cell">
                      <div className="org-icon-wrapper">
                        <Building2 size={16} className="org-icon" />
                      </div>
                      <span className="font-semibold">{org.organization}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`plan-badge plan-${org.plan.toLowerCase()}`}>
                      {org.plan}
                    </span>
                  </td>
                  <td className="text-right font-medium">{org.users}</td>
                  <td className="text-right font-medium">{org.labels.toLocaleString()}</td>
                  <td>
                    <span className={`status-badge status-${org.status.toLowerCase()}`}>
                      {org.status}
                    </span>
                  </td>
                  <td className="text-muted">{org.joinedOn}</td>
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
          <span className="text-muted text-sm">Showing 1 to 8 of 256 entries</span>
          <div className="page-controls">
            <button className="page-btn" disabled>Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="text-muted">...</span>
            <button className="page-btn">32</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
