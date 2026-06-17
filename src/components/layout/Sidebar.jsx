import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
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

  // Animation Variants
  const sidebarVariants = {
    expanded: {
      width: '280px',
      transition: {
        duration: 0.35,
        ease: 'easeInOut',
        when: 'beforeChildren', // Expand width first, then stagger labels
        staggerChildren: 0.03
      }
    },
    collapsed: {
      width: '80px',
      transition: {
        duration: 0.35,
        ease: 'easeInOut',
        when: 'afterChildren', // Labels disappear first, then shrink
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      display: 'block',
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    collapsed: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.2, ease: 'easeIn' },
      transitionEnd: { display: 'none' } // Hide completely after fading out
    }
  };

  const glowVariants = {
    expanded: {
      x: ['-100%', '200%'],
      opacity: [0, 1, 0],
      transition: { duration: 0.4, ease: 'linear' }
    },
    collapsed: {
      opacity: 0,
      transition: { duration: 0 }
    }
  };

  return (
    <motion.aside 
      className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}
      initial={false}
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
    >
      {/* Subtle Premium Glow Sweep on Expand */}
      {!isCollapsed && (
        <motion.div 
          className="glow-sweep"
          variants={glowVariants}
        />
      )}

      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">
            <span className="logo-dot"></span>
          </div>
          <motion.span 
            className="logo-text"
            variants={itemVariants}
          >
            LabelSaaS
          </motion.span>
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
                onClick={() => {
                  if (!isCollapsed) {
                    toggleCollapse();
                  }
                }}
              >
                <Icon size={20} className="nav-icon" />
                
                <motion.span 
                  className="nav-text"
                  variants={itemVariants}
                >
                  {item.name}
                </motion.span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="collapse-btn" onClick={toggleCollapse}>
          <div className="collapse-btn-icon">
            <ChevronLeft size={20} className={`collapse-icon ${isCollapsed ? 'rotated' : ''}`} />
          </div>
          <motion.span variants={itemVariants}>Collapse Menu</motion.span>
        </button>
      </div>
    </motion.aside>
  );
}
