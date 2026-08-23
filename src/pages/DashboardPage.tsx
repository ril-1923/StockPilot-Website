import {
  Briefcase,
  TrendingUp,
  Clock,
  Percent,
  Trophy,
  TrendingDown,
  Plus,
} from 'lucide-react';
import type { Page } from '../App';

interface Holding {
  symbol: string;
  name: string;
  changePercent: number;
}

const mockHoldings: Holding[] = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', changePercent: 52.24 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', changePercent: -13.72 },
];

interface DashboardPageProps {
  onNavigate: (page: Page) => void;
}

function DashboardPage({ onNavigate }: DashboardPageProps) {
  const portfolioValue = 38742.3;
  const totalInvested = 32394.6;
  const totalPL = 6347.7;
  const totalPLPercent = 19.59;
  const todayPL = 103.75;
  const holdingsCount = 6;

  const best = mockHoldings.reduce((a, b) => (a.changePercent > b.changePercent ? a : b));
  const worst = mockHoldings.reduce((a, b) => (a.changePercent < b.changePercent ? a : b));

  return (
    <>
      <h2>Dashboard</h2>
      <p className="demo-note">ℹ️ Demo Market Data — Prices are simulated</p>

      <div className="actions">
        <button className="btn-outline" onClick={() => onNavigate('portfolio')}>
          <Briefcase size={16} /> Portfolio
        </button>
        <button className="btn-primary">
          <Plus size={16} /> Add Stock
        </button>
      </div>

      <div className="grid">
        <Card
          icon={<Briefcase size={20} />}
          label="PORTFOLIO VALUE"
          value={`$${portfolioValue.toLocaleString()}`}
        />
        <Card
          icon={<TrendingUp size={20} />}
          label="TOTAL INVESTED"
          value={`$${totalInvested.toLocaleString()}`}
        />
        <Card
          icon={<TrendingUp size={20} />}
          label="TOTAL PROFIT / LOSS"
          value={`+$${totalPL.toLocaleString()}`}
          sub={`+${totalPLPercent}%`}
          positive
        />
        <Card
          icon={<Clock size={20} />}
          label="TODAY'S PROFIT / LOSS"
          value={`+$${todayPL}`}
          positive
        />
        <Card
          icon={<Percent size={20} />}
          label="OVERALL RETURN"
          value={`+${totalPLPercent}%`}
          positive
        />
        <Card icon={<Briefcase size={20} />} label="HOLDINGS" value={`${holdingsCount}`} />
        <Card
          icon={<Trophy size={20} />}
          label="BEST PERFORMER"
          value={`${best.symbol} +${best.changePercent}%`}
          sub={best.name}
          positive
        />
        <Card
          icon={<TrendingDown size={20} />}
          label="WORST PERFORMER"
          value={`${worst.symbol} ${worst.changePercent}%`}
          sub={worst.name}
          negative
        />
      </div>
    </>
  );
}

interface CardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  positive?: boolean;
  negative?: boolean;
}

export function Card({ icon, label, value, sub, positive, negative }: CardProps) {
  return (
    <div className="card">
      <div className={`icon-box ${positive ? 'green' : negative ? 'red' : ''}`}>{icon}</div>
      <div>
        <p className="card-label">{label}</p>
        <p className={`card-value ${positive ? 'text-green' : negative ? 'text-red' : ''}`}>
          {value}
        </p>
        {sub && <p className="card-sub">{sub}</p>}
      </div>
    </div>
  );
}

export default DashboardPage;
