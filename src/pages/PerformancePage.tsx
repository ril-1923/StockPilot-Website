const returns = [
  { symbol: 'NVDA', changePercent: 52.24 },
  { symbol: 'AAPL', changePercent: 25.87 },
  { symbol: 'GOOGL', changePercent: 25.21 },
  { symbol: 'AMZN', changePercent: 22.7 },
  { symbol: 'MSFT', changePercent: 21.94 },
  { symbol: 'TSLA', changePercent: -13.72 },
];

function PerformancePage() {
  const maxAbs = Math.max(...returns.map((r) => Math.abs(r.changePercent)));

  return (
    <>
      <h2>Performance</h2>
      <p className="demo-note">ℹ️ Demo Market Data — Prices are simulated</p>

      <div className="grid grid-2">
        <div className="card stat-card">
          <p className="card-label">INVESTED</p>
          <p className="card-value">$32,394.60</p>
        </div>
        <div className="card stat-card">
          <p className="card-label">CURRENT VALUE</p>
          <p className="card-value">$38,742.30</p>
        </div>
        <div className="card stat-card">
          <p className="card-label">PROFITABLE HOLDINGS</p>
          <p className="card-value text-green">5</p>
        </div>
        <div className="card stat-card">
          <p className="card-label">LOSING HOLDINGS</p>
          <p className="card-value text-red">1</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div style={{ width: '100%' }}>
          <p className="card-label" style={{ marginBottom: 16 }}>
            RETURN BY HOLDING
          </p>
          <div className="return-bars">
            {returns.map((r) => {
              const positive = r.changePercent >= 0;
              const width = (Math.abs(r.changePercent) / maxAbs) * 100;
              return (
                <div className="return-row" key={r.symbol}>
                  <span className="return-symbol">{r.symbol}</span>
                  <div className="return-track">
                    <div
                      className={`return-fill ${positive ? 'green' : 'red'}`}
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <span className={`return-value ${positive ? 'text-green' : 'text-red'}`}>
                    {positive ? '+' : ''}
                    {r.changePercent}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PerformancePage;
