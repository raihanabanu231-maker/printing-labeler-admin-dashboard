import { Search, Bell, Shield } from 'lucide-react';
import './Topbar.css';

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="role-indicator">
          <Shield size={16} className="role-icon" />
          <span className="role-text">Super Admin</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search anything..." />
          <div className="search-shortcut">/</div>
        </div>

        <div className="actions">
          <button className="icon-btn notification-btn">
            <Bell size={20} />
            <span className="badge-dot"></span>
          </button>

          <div className="user-profile">
            <div className="avatar">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
            </div>
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <span className="user-role">Super Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
