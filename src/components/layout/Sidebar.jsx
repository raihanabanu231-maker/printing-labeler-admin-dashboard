import { useState } from 'react';
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
  ChevronLeft,
  ChevronDown,
  Folder
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { 
    name: 'Administration', 
    icon: Building2,
    subItems: [
      { name: 'Organizations', path: '/organizations', icon: Building2 },
      { name: 'Users', path: '/users', icon: Users },
      { name: 'Roles & Permissions', path: '/roles', icon: ShieldCheck },
      { name: 'Labels', path: '/labels', icon: Tags },
    ]
  },
  {
    name: 'Finance',
    icon: CreditCard,
    subItems: [
      { name: 'Subscriptions', path: '/subscriptions', icon: CreditCard },
      { name: 'Billing & Invoices', path: '/billing', icon: Receipt },
    ]
  },
  {
    name: 'System',
    icon: Settings,
    subItems: [
      { name: 'Reports', path: '/reports', icon: BarChart3 },
      { name: 'Support Tickets', path: '/support', icon: LifeBuoy },
      { name: 'System Health', path: '/health', icon: Activity },
      { name: 'Audit Logs', path: '/audit', icon: History },
      { name: 'Settings', path: '/settings', icon: Settings },
    ]
  }
];

export default function Sidebar({ isCollapsed, toggleCollapse }) {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubMenu = (name) => {
    if (isCollapsed) return; // Prevent expanding when sidebar is collapsed
    setExpandedMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

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
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isExpanded = expandedMenus[item.name];
            
            // Check if any subitem is active
            const isSubItemActive = hasSubItems && item.subItems.some(sub => location.pathname === sub.path);
            const isActive = location.pathname === item.path || isSubItemActive;

            return (
              <div key={item.name} className="nav-item-container">
                {hasSubItems ? (
                  <button 
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => toggleSubMenu(item.name)}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon size={20} className="nav-icon" />
                    {!isCollapsed && (
                      <>
                        <span className="nav-text">{item.name}</span>
                        <ChevronDown size={16} className={`submenu-arrow ${isExpanded ? 'rotated' : ''}`} />
                      </>
                    )}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon size={20} className="nav-icon" />
                    {!isCollapsed && <span className="nav-text">{item.name}</span>}
                  </Link>
                )}

                {/* Sub-items */}
                {hasSubItems && !isCollapsed && isExpanded && (
                  <div className="submenu-container">
                    {item.subItems.map(subItem => {
                      const SubIcon = subItem.icon;
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`submenu-item ${isSubActive ? 'active' : ''}`}
                        >
                          <SubIcon size={16} className="nav-icon" />
                          <span className="nav-text">{subItem.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
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
