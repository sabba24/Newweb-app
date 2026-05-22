const accountTypes = [
  {
    value: 'personal',
    icon: '👥',
    title: 'Personal Account',
    description: 'For families, citizens, and community members reporting missing persons or alerts.',
  },
  {
    value: 'business',
    icon: '🏪',
    title: 'Business Account',
    description: 'For businesses that want to sponsor alerts, advertise, or post community safety promotions.',
  },
  {
    value: 'agency',
    icon: '🚓',
    title: 'Police / Agency Account',
    description: 'For police departments, emergency agencies, and verified responders.',
  },
];

export default function AccountTypeSelector({ value, onChange }) {
  return (
    <div className="grid gap-3">
      {accountTypes.map((type) => {
        const selected = value === type.value;

        return (
          <button
            key={type.value}
            type="button"
            onClick={() => onChange(type.value)}
            className={`flex gap-3 rounded-2xl border p-4 text-left transition ${
              selected
                ? 'border-emerald-500 bg-emerald-50 shadow-[0_12px_28px_rgba(0,155,58,0.12)]'
                : 'border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-50/50'
            }`}
          >
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl ${selected ? 'bg-emerald-600 text-white' : 'bg-slate-100'}`}>
              {type.icon}
            </span>
            <span>
              <span className="flex items-center gap-2">
                <span className="font-black text-slate-950">{type.title}</span>
                {selected && <span className="rounded-full bg-emerald-600 px-2 py-1 text-[0.62rem] font-black uppercase tracking-wide text-white">Selected</span>}
              </span>
              <span className="mt-1 block text-sm font-semibold leading-6 text-slate-600">{type.description}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}