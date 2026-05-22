export default function PaymentPlaceholder({ plan }) {
  if (!plan || plan.id === 'personal_free') return null;

  return (
    <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-100">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black text-slate-950">Payment integration coming next</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
            {plan.title} is selected. Stripe/PayPal buttons are prepared as placeholders and registration will continue without payment.
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-500 ring-1 ring-slate-200">
            Stripe soon
          </button>
          <button type="button" className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-500 ring-1 ring-slate-200">
            PayPal soon
          </button>
        </div>
      </div>
    </div>
  );
}