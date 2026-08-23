import { Moon, Sun } from 'lucide-react';

interface SettingsPageProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

function SettingsPage({ theme, onToggleTheme }: SettingsPageProps) {
  return (
    <>
      <h2>Settings</h2>
      <p className="demo-note">Preferences are stored in your browser.</p>

      <div className="card" style={{ marginTop: 20 }}>
        <div style={{ width: '100%' }}>
          <p className="card-label" style={{ marginBottom: 12 }}>
            APPEARANCE
          </p>
          <div className="settings-row">
            <span>Theme</span>
            <button className="btn-outline" onClick={onToggleTheme}>
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div style={{ width: '100%' }}>
          <p className="card-label" style={{ marginBottom: 4 }}>
            DEMO DATA
          </p>
          <p className="card-sub" style={{ margin: 0 }}>
            ℹ️ Portfolio, transaction and performance figures shown throughout StockPilot are
            simulated and do not reflect real market quotes.
          </p>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
