import { Search, Plus, Filter, MoreVertical, Users as UsersIcon, UserCheck, UserX, UserPlus } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Users.css';

export default function Users() {
  const usersData = [
    { id: 1, name: 'John Smith', organization: 'Acme Corporation', role: 'Admin', status: 'Active', lastActive: '2 mins ago' },
    { id: 2, name: 'Sarah Johnson', organization: 'Globex Industries', role: 'Admin', status: 'Active', lastActive: '15 mins ago' },
    { id: 3, name: 'Michael Brown', organization: 'Initech', role: 'Viewer', status: 'Active', lastActive: '2 hours ago' },
    { id: 4, name: 'Emily Davis', organization: 'Stark Industries', role: 'Admin', status: 'Active', lastActive: '1 day ago' },
    { id: 5, name: 'David Wilson', organization: 'Umbrella Corp', role: 'Editor', status: 'Inactive', lastActive: '2 days ago' },
    { id: 6, name: 'Lisa Anderson', organization: 'Wayne Enterprises', role: 'Viewer', status: 'Active', lastActive: '30 mins ago' },
    { id: 7, name: 'James Thomas', organization: 'Cyberdyne Systems', role: 'Editor', status: 'Active', lastActive: '5 hours ago' },
    { id: 8, name: 'Sophie Martinez', organization: 'Oscorp', role: 'Editor', status: 'Pending', lastActive: '-' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Users</h1>
          <p className="page-subtitle">Manage users across all organizations</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search users..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <Plus size={16} />
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className="stats-grid users-stats-grid">
        <StatCard title="Total Users" value="12,589" trend={null} isPositive={true} icon={UsersIcon} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Active Users" value="11,234" trend={null} isPositive={true} icon={UserCheck} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Suspended" value="1,012" trend={null} isPositive={false} icon={UserX} iconColor="#EF4444" iconBg="#FEF2F2" />
        <StatCard title="Pending Invitations" value="343" trend={null} isPositive={true} icon={UserPlus} iconColor="#F59E0B" iconBg="#FFFBEB" />
      </div>

      <div className="card users-table-card">
        <div className="table-filters">
          <select className="filter-select">
            <option>All Organizations</option>
            <option>Acme Corporation</option>
            <option>Globex Industries</option>
          </select>
          <select className="filter-select">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Organization</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <div className="user-avatar-placeholder">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-semibold">{user.name}</span>
                    </div>
                  </td>
                  <td className="text-muted">{user.organization}</td>
                  <td>
                    <span className={`role-badge role-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge status-${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="text-muted">{user.lastActive}</td>
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
          <span className="text-muted text-sm">Showing 1 to 8 of 12,589 entries</span>
          <div className="page-controls">
            <button className="page-btn" disabled>Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="text-muted">...</span>
            <button className="page-btn">1574</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
