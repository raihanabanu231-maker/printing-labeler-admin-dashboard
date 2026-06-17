import { Link } from 'react-router-dom';
import { Building2, UserPlus, Tags, CreditCard, BarChart3, Settings } from 'lucide-react';
import './QuickActionsWidget.css';

export default function QuickActionsWidget() {
  const actions = [
    { name: 'Add Organization', icon: Building2, path: '/organizations/new' },
    { name: 'Create User', icon: UserPlus, path: '/users/new' },
    { name: 'Create Label', icon: Tags, path: '/labels/new' },
    { name: 'Manage Subscriptions', icon: CreditCard, path: '/subscriptions' },
    { name: 'View Reports', icon: BarChart3, path: '/reports' },
    { name: 'System Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="card quick-actions-widget">
      <div className="quick-actions-header">
        <h3 className="quick-actions-title">Quick Actions</h3>
      </div>
      <div className="quick-actions-grid">
        {actions.map((action, index) => (
          <Link key={index} to={action.path} className="action-button">
            <action.icon size={18} className="action-icon" />
            <span className="action-name">{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
