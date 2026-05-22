export default function AlertTicker({ alerts = [] }) {
  const tickerItems = alerts.length ? alerts : [];

  if (!tickerItems.length) return null;

  return (
    <div className="overflow-hidden border-y border-emerald-100 bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-950 py-3 text-white">
      <div className="ticker-track gap-10 whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((alert, index) => (
          <span key={`${alert.id}-${index}`} className="inline-flex items-center gap-3 text-sm font-semibold">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_20px_rgba(254,209,0,0.8)]" />
            <span>{alert.flag} {alert.region || alert.parish}</span>
            <span className="text-emerald-100">—</span>
            <span>{alert.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}