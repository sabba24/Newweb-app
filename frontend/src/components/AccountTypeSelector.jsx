const accountTypes = [
  {
    value: 'personal_free',
    icon: '👥',
    title: 'Personal Free',
    description: 'For families, citizens, and community members. Includes 1 free alert per month.',
    badge: 'Free',
  },
  {
    value: 'personal_pro',
    icon: '⭐',
    title: 'Personal Pro',
    description: 'Paid personal plan for users who need to post more alerts and access expanded tools.',
    badge: 'Paid',
  },
  {
    value: 'business',
    icon: '🏪',
    title: 'Business',
    description: 'Paid account for businesses that will later sponsor alerts, ads, and promotions.',
    badge: 'Paid',
  },
  {
    value: 'agency',
    icon: '🚓',
    title: 'Police / Agency',
    description: 'Licensed monthly or annual account for verified police departments and agencies.',
    badge: 'License',
  },
];

export default function AccountTypeSelector({ value, onChange }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {accountTypes.map((type) => {
        const selected = value === type.value;

        return (
          <button
            key={type.value}
            type="button"
            onClick={() => onChange(type.value)}
            className={`flex h-full gap-3 rounded-2xl border p-4 text-left transition ${
              selected
                ? 'border-emerald-500 bg-emerald-50 shadow-[0_12px_28px_rgba(0,155,58,0.12)]'
                : 'border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-50/50'
            }`}
          >
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-xl ${selected ? 'bg-emerald-600 text-white' : 'bg-slate-100'}`}>
              {type.icon}
            </span>
            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-black text-slate-950">{type.title}</span>
                <span className={`rounded-full px-2 py-1 text-[0.62rem] font-black uppercase tracking-wide ${selected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {type.badge}
                </span>
              </span>
              <span className="mt-1 block text-sm font-semibold leading-6 text-slate-600">{type.description}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}