import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, FileText, TrendingUp, Mail, Users, DollarSign } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/chat', label: 'AI Chat', icon: MessageSquare },
  { path: '/cma', label: 'CMA Tool', icon: FileText },
  { path: '/market', label: 'Market Insights', icon: TrendingUp },
  { path: '/marketing', label: 'Marketing', icon: Mail },
  { path: '/retention', label: 'Client Retention', icon: Users },
  { path: '/roi', label: 'ROI Summary', icon: DollarSign }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
      <nav className="p-4 space-y-2">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blueprint-blue text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

