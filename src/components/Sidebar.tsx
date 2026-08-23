import {
  LayoutDashboard,
  Briefcase,
  ArrowLeftRight,
  LineChart,
  Settings,
} from 'lucide-react';
import type { Page } from '../App';

interface SidebarProps {
  open: boolean;
  activePage: Page;
  onNavigate: (page: Page) => void;
  onClose: () => void;
}

const NAV_ITEMS: { id: Page; label: string; icon: React.ReactNode }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'portfolio', label: 'Portfolio', icon: <Briefcase size={18} /> },
  { id: 'transactions', label: 'Transactions', icon: <ArrowLeftRight size={18} /> },
  { id: 'performance', label: 'Performance', icon: <LineChart size={18} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
];

function Sidebar({ open, activePage, onNavigate, onClose }: SidebarProps) {
  return (
    <>
      <aside className={`sidebar ${open ? 'open' : 'closed'}`} aria-hidden={!open}>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`sidebar-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              tabIndex={open ? 0 : -1}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              <span className="sidebar-link-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      {open && <div className="sidebar-scrim" onClick={onClose} aria-hidden="true" />}
    </>
  );
}

export default Sidebar;
