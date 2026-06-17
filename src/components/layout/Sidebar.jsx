import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Users,
  Tags,
  CreditCard,
  Receipt,
  BarChart3,
  LifeBuoy,
  Activity,
  History,
  Settings,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Organizations', path: '/organizations', icon: Building2 },
  { name: 'Users', path: '/users', icon: Users },
  { name: 'Labels', path: '/labels', icon: Tags },
  { name: 'Subscriptions', path: '/subscriptions', icon: CreditCard },
  { name: 'Billing & Invoices', path: '/billing', icon: Receipt },
  { name: 'Reports', path: '/reports', icon: BarChart3 },
  { name: 'Support Tickets', path: '/support', icon: LifeBuoy },
  { name: 'System Health', path: '/health', icon: Activity },
  { name: 'Audit Logs', path: '/audit', icon: History },
  { name: 'Settings', path: '/settings', icon: Settings },
  { name: 'Roles & Permissions', path: '/roles', icon: ShieldCheck },
];

export default function Sidebar({ isCollapsed, toggleCollapse }) {
  const location = useLocation();

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">
            <span className="logo-dot"></span>
          </div>
          {!isCollapsed && <span className="logo-text">LabelSaaS</span>}
        </div>
      </div>
      
      <div className="sidebar-scroll">
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon size={20} className="nav-icon" />
                {!isCollapsed && <span className="nav-text">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="collapse-btn" onClick={toggleCollapse}>
          <ChevronLeft size={20} className={`collapse-icon ${isCollapsed ? 'rotated' : ''}`} />
          {!isCollapsed && <span>Collapse Menu</span>}
        </button>
      </div>
    </aside>
  );
}
