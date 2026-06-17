import { Settings as SettingsIcon, Bell, Lock, Palette, Database, Save, Check } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1 className="page-title">Platform Settings</h1>
          <p className="page-subtitle">Configure global preferences and defaults</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Save size={16} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div className="card" style={{ width: '250px', padding: '1rem', flexShrink: 0 }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary)', color: 'white', fontWeight: 500 }}>
              <SettingsIcon size={18} />
              General
            </a>
            <a href="#" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
              <Lock size={18} />
              Security
            </a>
            <a href="#" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
              <Bell size={18} />
              Notifications
            </a>
            <a href="#" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
              <Palette size={18} />
              Appearance
            </a>
            <a href="#" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
              <Database size={18} />
              Integrations
            </a>
          </nav>
        </div>

        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>General Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="font-medium text-sm">Platform Name</label>
                <input type="text" defaultValue="LabelSaaS Admin" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="font-medium text-sm">Support Email</label>
                <input type="email" defaultValue="support@labelsaas.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                <label className="font-medium text-sm">Timezone Default</label>
                <select style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>EST (Eastern Standard Time)</option>
                  <option>PST (Pacific Standard Time)</option>
                </select>
              </div>
            </div>
          </div>
          
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)' }} />
          
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>User Registration</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                <span>Allow new organizations to sign up automatically</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                <span>Require email verification for new accounts</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
