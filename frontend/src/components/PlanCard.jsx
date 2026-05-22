export default function PlanCard({ plan, selected = false, onSelect, actionLabel = 'Select Plan' }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        selected ? 'border-emerald-500 ring-4 ring-emerald-100' : 'border-slate-100'
      }`}
    >
      {plan.recommended && (
        <span className="absolute right-5 top-5 rounded-full bg-yellow-300 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-950">
          Recommended
        </span>
      )}

      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-3xl ring-1 ring-emerald-100">
        {plan.icon}
      </div>

      <div className="mt-5">
        <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{plan.badge}</span>
        <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{plan.title}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{plan.description}</p>
      </div>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-4xl font-black tracking-tight text-slate-950">{plan.price}</span>
        <span className="pb-1 text-sm font-bold text-slate-500">{plan.cadence}</span>
      </div>

      <ul className="mt-6 grid gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm font-bold leading-6 text-slate-700">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-600 text-[0.65rem] text-white">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {onSelect && (
        <button
          type="button"
          onClick={() => onSelect(plan)}
          className={`btn mt-auto pt-6 ${selected ? 'btn-primary' : 'btn-outline'}`}
        >
          {selected ? 'Selected' : actionLabel}
        </button>
      )}
    </article>
  );
}