import { Shield, Search, Filter, Plus, Users, MoreVertical, ShieldCheck } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Labels.css';

export default function RolesPermissions() {
  const rolesData = [
    { id: 1, name: 'Super Admin', users: 5, level: 'Full Access', description: 'Complete access to all platform settings and data.' },
    { id: 2, name: 'Support Agent', users: 24, level: 'Restricted', description: 'Can view users and manage support tickets only.' },
    { id: 3, name: 'Billing Manager', users: 3, level: 'Restricted', description: 'Can view and modify billing and subscriptions.' },
    { id: 4, name: 'Org Admin (Default)', users: 850, level: 'Org Level', description: 'Full access within their own organization context.' },
    { id: 5, name: 'Org Member', users: 11200, level: 'Org Level', description: 'Can view and create labels within their organization.' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Roles & Permissions</h1>
          <p className="page-subtitle">Manage access control policies</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search roles..." />
          </div>
          <button className="btn-primary">
            <Plus size={16} />
            <span>Create Role</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid">
        <StatCard title="Total Roles" value="12" trend="+1" isPositive={true} icon={Shield} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Custom Roles" value="7" trend="+2" isPositive={true} icon={ShieldCheck} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Active Admins" value="5" trend="0" isPositive={true} icon={Users} iconColor="#F59E0B" iconBg="#FFFBEB" />
      </div>

      <div className="card labels-table-card">
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Role Name</th>
                <th>Users Assigned</th>
                <th>Permission Level</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rolesData.map((role) => (
                <tr key={role.id}>
                  <td>
                    <div className="label-cell">
                      <div className="label-icon-wrapper">
                        <Shield size={14} className="label-icon" />
                      </div>
                      <span className="font-semibold">{role.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-info">{role.users} Users</span>
                  </td>
                  <td className="font-medium">{role.level}</td>
                  <td className="text-muted">{role.description}</td>
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
