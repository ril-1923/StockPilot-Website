import { Plus } from 'lucide-react';

interface Transaction {
  symbol: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  date: string;
}

const transactions: Transaction[] = [
  { symbol: 'NVDA', type: 'BUY', quantity: 10, price: 118.2, date: '2026-08-12' },
  { symbol: 'AAPL', type: 'BUY', quantity: 20, price: 210.5, date: '2026-08-05' },
  { symbol: 'TSLA', type: 'SELL', quantity: 5, price: 245.1, date: '2026-07-28' },
  { symbol: 'MSFT', type: 'BUY', quantity: 8, price: 398.75, date: '2026-07-15' },
  { symbol: 'AMZN', type: 'BUY', quantity: 12, price: 172.3, date: '2026-06-30' },
];

function TransactionsPage() {
  return (
    <>
      <h2>Transaction History</h2>
      <p className="demo-note">ℹ️ Demo Market Data — Prices are simulated</p>

      <div className="actions">
        <button className="btn-primary">
          <Plus size={16} /> Add Transaction
        </button>
      </div>

      <div className="table-wrap">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i}>
                <td>
                  <strong>{t.symbol}</strong>
                </td>
                <td>
                  <span className={`type-badge ${t.type === 'BUY' ? 'buy' : 'sell'}`}>
                    {t.type}
                  </span>
                </td>
                <td>{t.quantity}</td>
                <td>${t.price.toFixed(2)}</td>
                <td>${(t.quantity * t.price).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                <td>{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransactionsPage;
