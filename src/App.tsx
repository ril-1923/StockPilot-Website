import { useState, useEffect } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import PortfolioPage from './pages/PortfolioPage';
import TransactionsPage from './pages/TransactionsPage';
import PerformancePage from './pages/PerformancePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

export type Page = 'dashboard' | 'portfolio' | 'transactions' | 'performance' | 'settings';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
  };

  return (
    <div className="dashboard">
      <header className="topbar">
        <div className="brand">
          <button
            className="theme-toggle"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
            aria-expanded={sidebarOpen}
          >
            <Menu size={18} />
          </button>
          <div className="brand-icon">🚀</div>
          <div>
            <h1>StockPilot</h1>
            <p>Stock Portfolio Tracker</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </header>

      <div className="app-body">
        <Sidebar
          open={sidebarOpen}
          activePage={activePage}
          onNavigate={handleNavigate}
          onClose={() => setSidebarOpen(false)}
        />

        <main className={sidebarOpen ? 'with-sidebar' : ''}>
          {activePage === 'dashboard' && <DashboardPage onNavigate={handleNavigate} />}
          {activePage === 'portfolio' && <PortfolioPage />}
          {activePage === 'transactions' && <TransactionsPage />}
          {activePage === 'performance' && <PerformancePage />}
          {activePage === 'settings' && (
            <SettingsPage
              theme={theme}
              onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
