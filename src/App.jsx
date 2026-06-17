import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Organizations from './pages/Organizations';
import Users from './pages/Users';
import Labels from './pages/Labels';
import Subscriptions from './pages/Subscriptions';
import Billing from './pages/Billing';
import Reports from './pages/Reports';
import SupportTickets from './pages/SupportTickets';
import SystemHealth from './pages/SystemHealth';
import AuditLogs from './pages/AuditLogs';
import Settings from './pages/Settings';
import RolesPermissions from './pages/RolesPermissions';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/users" element={<Users />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/support" element={<SupportTickets />} />
        <Route path="/health" element={<SystemHealth />} />
        <Route path="/audit" element={<AuditLogs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/roles" element={<RolesPermissions />} />
        <Route path="*" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
