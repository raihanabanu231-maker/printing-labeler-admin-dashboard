import { Calendar, Download, Building2, Users, Tags, DollarSign, Activity, Server, Database, HardDrive, Cpu, Mail, FileText, Trash2, Edit } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import { DonutChartWidget, LineChartWidget } from '../components/dashboard/ChartsWidget';
import ListWidget from '../components/dashboard/ListWidget';
import TableWidget from '../components/dashboard/TableWidget';
import QuickActionsWidget from '../components/dashboard/QuickActionsWidget';
import './Dashboard.css';

export default function Dashboard() {
  const donutData = [
    { name: 'Published Labels', value: 28350, percent: 62.1 },
    { name: 'Draft Labels', value: 12450, percent: 27.2 },
    { name: 'Deleted Labels', value: 4878, percent: 10.7 }
  ];

  const lineData = [
    { name: "Dec '23", "Total Created": 23000, "Published": 14000, "Draft": 8000, "Deleted": 3000 },
    { name: "Jan '24", "Total Created": 29000, "Published": 16000, "Draft": 9000, "Deleted": 4000 },
    { name: "Feb '24", "Total Created": 33000, "Published": 18000, "Draft": 10000, "Deleted": 4500 },
    { name: "Mar '24", "Total Created": 38000, "Published": 20000, "Draft": 10500, "Deleted": 4000 },
    { name: "Apr '24", "Total Created": 41000, "Published": 22000, "Draft": 11000, "Deleted": 5000 },
    { name: "May '24", "Total Created": 45678, "Published": 24000, "Draft": 11500, "Deleted": 5100 },
  ];

  const systemHealthData = [
    { title: 'API Services', icon: Server, iconColor: '#10B981', status: 'Healthy' },
    { title: 'Database', icon: Database, iconColor: '#10B981', status: 'Healthy' },
    { title: 'Storage', icon: HardDrive, iconColor: '#10B981', status: 'Healthy' },
    { title: 'Background Jobs', icon: Cpu, iconColor: '#10B981', status: 'Healthy' },
    { title: 'Email Service', icon: Mail, iconColor: '#10B981', status: 'Healthy' },
  ];

  const topOrgsData = [
    { organization: 'Acme Corporation', total: 5678, published: 3456, draft: 1784, deleted: 438 },
    { organization: 'Globex Industries', total: 4890, published: 3120, draft: 1350, deleted: 420 },
    { organization: 'Initech', total: 3456, published: 2150, draft: 950, deleted: 356 },
    { organization: 'Umbrella Corp', total: 2987, published: 1890, draft: 780, deleted: 317 },
    { organization: 'Stark Industries', total: 2345, published: 1456, draft: 680, deleted: 209 },
  ];

  const recentActivityData = [
    { title: 'Label "Product Warning" published', subtitle: 'by Acme Corporation', icon: FileText, iconColor: '#10B981', time: '5 min ago' },
    { title: 'Label "Shipping Label" updated', subtitle: 'by Globex Industries', icon: Edit, iconColor: '#F59E0B', time: '15 min ago' },
    { title: 'New label "Ingredient Label" created', subtitle: 'by Initech', icon: FileText, iconColor: '#5A52FF', time: '30 min ago' },
    { title: 'Label "Old Label Template" deleted', subtitle: 'by Umbrella Corp', icon: Trash2, iconColor: '#EF4444', time: '1 hour ago' },
    { title: 'Label "Nutrition Facts" published', subtitle: 'by Stark Industries', icon: FileText, iconColor: '#10B981', time: '2 hours ago' },
  ];

  const systemAlertsData = [
    { title: 'All systems operational', icon: Activity, iconColor: '#10B981', time: '2 minutes ago' },
    { title: 'High memory usage on server 3', icon: Activity, iconColor: '#F59E0B', time: '15 minutes ago' },
    { title: 'Database backup completed', icon: Activity, iconColor: '#10B981', time: '1 hour ago' },
  ];

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Super Admin Dashboard</h1>
          <p className="page-subtitle">Overview of platform activity and key metrics</p>
        </div>
        <div className="header-actions">
          <div className="date-picker-btn">
            <Calendar size={16} />
            <span>May 01, 2024 - May 31, 2024</span>
            <Calendar size={16} />
          </div>
          <button className="btn-primary">
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard title="Total Organizations" value="256" trend="+12.5%" isPositive={true} icon={Building2} iconColor="#5A52FF" iconBg="#EEF2FF" />
        <StatCard title="Active Users" value="12,589" trend="+18.3%" isPositive={true} icon={Users} iconColor="#10B981" iconBg="#ECFDF5" />
        <StatCard title="Total Labels Created" value="45,678" trend="+22.8%" isPositive={true} icon={Tags} iconColor="#8B5CF6" iconBg="#F3E8FF" />
        <StatCard title="Monthly Revenue" value="$25,430" trend="+16.7%" isPositive={true} icon={DollarSign} iconColor="#F59E0B" iconBg="#FFFBEB" />
        <StatCard title="System Uptime" value="99.99%" trend={null} isPositive={true} icon={Activity} iconColor="#3B82F6" iconBg="#EFF6FF" />
      </div>

      <div className="dashboard-grid row-1">
        <div className="col-span-4">
          <DonutChartWidget data={donutData} />
        </div>
        <div className="col-span-5">
          <LineChartWidget data={lineData} />
        </div>
        <div className="col-span-3">
          <ListWidget title="System Health" items={systemHealthData} />
        </div>
      </div>

      <div className="dashboard-grid row-2">
        <div className="col-span-5">
          <TableWidget title="Top Organizations by Labels Created" actionText="View All" data={topOrgsData} />
        </div>
        <div className="col-span-4">
          <ListWidget title="Recent Label Activity" actionText="View All" items={recentActivityData} />
        </div>
        <div className="col-span-3 flex-col-gap">
          <ListWidget title="Recent System Alerts" items={systemAlertsData} />
          <QuickActionsWidget />
        </div>
      </div>
    </DashboardLayout>
  );
}
