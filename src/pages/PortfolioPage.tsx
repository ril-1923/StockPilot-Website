import { Plus } from 'lucide-react';

interface Holding {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  price: number;
  changePercent: number;
}

const holdings: Holding[] = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', shares: 40, avgCost: 92.1, price: 140.15, changePercent: 52.24 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', shares: 25, avgCost: 268.4, price: 231.5, changePercent: -13.72 },
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 60, avgCost: 178.2, price: 224.3, changePercent: 25.87 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', shares: 18, avgCost: 340.5, price: 415.2, changePercent: 21.94 },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', shares: 22, avgCost: 145.8, price: 178.9, changePercent: 22.7 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 15, avgCost: 132.1, price: 165.4, changePercent: 25.21 },
];

function PortfolioPage() {
  return (
    <>
      <h2>Portfolio Holdings</h2>
      <p className="demo-note">ℹ️ Demo Market Data — Prices are simulated</p>

      <div className="actions">
        <button className="btn-primary">
          <Plus size={16} /> Add Stock
        </button>
      </div>

      <div className="table-wrap">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Shares</th>
              <th>Avg Cost</th>
              <th>Price</th>
              <th>Value</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h) => {
              const value = h.shares * h.price;
              const positive = h.changePercent >= 0;
              return (
                <tr key={h.symbol}>
                  <td>
                    <div className="symbol-cell">
                      <strong>{h.symbol}</strong>
                      <span>{h.name}</span>
                    </div>
                  </td>
                  <td>{h.shares}</td>
                  <td>${h.avgCost.toFixed(2)}</td>
                  <td>${h.price.toFixed(2)}</td>
                  <td>${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                  <td className={positive ? 'text-green' : 'text-red'}>
                    {positive ? '+' : ''}
                    {h.changePercent}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PortfolioPage;
