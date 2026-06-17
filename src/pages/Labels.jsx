import { Search, Plus, Filter, MoreVertical, Tags, CheckCircle2, Edit3, Trash2 } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import './Labels.css';

export default function Labels() {
  const labelsData = [
    { id: 1, label: 'Product Warning', organization: 'Acme Corporation', status: 'Published', type: 'Warning', createdBy: 'Admin User', createdOn: 'May 31, 2024' },
    { id: 2, label: 'Shipping Label', organization: 'Globex Industries', status: 'Published', type: 'Shipping', createdBy: 'Sarah Johnson', createdOn: 'May 30, 2024' },
    { id: 3, label: 'Ingredient List', organization: 'Initech', status: 'Draft', type: 'Ingredient', createdBy: 'Michael Brown', createdOn: 'May 29, 2024' },
    { id: 4, label: 'Nutrition Facts', organization: 'Stark Industries', status: 'Published', type: 'Nutrition', createdBy: 'Emily Davis', createdOn: 'May 29, 2024' },
    { id: 5, label: 'Packaging Label', organization: 'Umbrella Corp', status: 'Draft', type: 'Packaging', createdBy: 'David Wilson', createdOn: 'May 28, 2024' },
    { id: 6, label: 'Barcode Label', organization: 'Wayne Enterprises', status: 'Published', type: 'Barcode', createdBy: 'Lisa Anderson', createdOn: 'May 27, 2024' },
    { id: 7, label: 'Safety Label', organization: 'Cyberdyne Systems', status: 'Deleted', type: 'Safety', createdBy: 'James Thomas', createdOn: 'May 27, 2024' },
    { id: 8, label: 'Tamper Evident', organization: 'Oscorp', status: 'Published', type: 'Security', createdBy: 'Sophie Martinez', createdOn: 'May 26, 2024' },
  ];

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Labels</h1>
          <p className="page-subtitle">Manage labels across all organizations</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search labels..." />
          </div>
          <button className="btn-outline">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <Plus size={16} />
            <span>Create Label</span>
          </button>
        </div>
      </div>

      <div className="stats-grid labels-stats-grid">
        <StatCard title="Total Labels" value="45,678" trend={null} isPositive={true} icon={Tags} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Published" value="28,350" trend={null} isPositive={true} icon={CheckCircle2} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Draft" value="12,450" trend={null} isPositive={true} icon={Edit3} iconColor="#F59E0B" iconBg="#FFFBEB" />
        <StatCard title="Deleted" value="4,878" trend={null} isPositive={false} icon={Trash2} iconColor="#EF4444" iconBg="#FEF2F2" />
      </div>

      <div className="card labels-table-card">
        <div className="table-filters">
          <select className="filter-select">
            <option>All Organizations</option>
            <option>Acme Corporation</option>
            <option>Globex Industries</option>
          </select>
          <select className="filter-select">
            <option>All Statuses</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Deleted</option>
          </select>
        </div>
        <div className="table-responsive">
          <table className="org-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Organization</th>
                <th>Status</th>
                <th>Type</th>
                <th>Created By</th>
                <th>Created On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {labelsData.map((label) => (
                <tr key={label.id}>
                  <td>
                    <div className="label-cell">
                      <div className="label-icon-wrapper">
                        <Tags size={14} className="label-icon" />
                      </div>
                      <span className="font-semibold">{label.label}</span>
                    </div>
                  </td>
                  <td className="text-muted">{label.organization}</td>
                  <td>
                    <span className={`label-status-badge status-${label.status.toLowerCase()}`}>
                      {label.status}
                    </span>
                  </td>
                  <td className="text-muted">{label.type}</td>
                  <td className="text-muted">{label.createdBy}</td>
                  <td className="text-muted">{label.createdOn}</td>
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
          <span className="text-muted text-sm">Showing 1 to 8 of 45,678 entries</span>
          <div className="page-controls">
            <button className="page-btn" disabled>Prev</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="text-muted">...</span>
            <button className="page-btn">5710</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
