import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AuthShowcase from '../components/AuthShowcase';
import AccountTypeSelector from '../components/AccountTypeSelector';
import PlanCard from '../components/PlanCard';
import PaymentPlaceholder from '../components/PaymentPlaceholder';
import logo from '../assets/logo.svg';
import { api, setAuthToken } from '../lib/api';
import { saveAccountTypeFromAuthPayload, setStoredAccountType } from '../lib/accountTypes';
import { getDefaultPlanForAccountType, getPlanById, getPlansForAccountType } from '../lib/planData';

export default function Register() {
  const navigate = useNavigate();
  const defaultPlan = getDefaultPlanForAccountType('personal_free');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    account_type: 'personal_free',
    selected_plan: defaultPlan.id,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const availablePlans = useMemo(() => getPlansForAccountType(form.account_type), [form.account_type]);
  const selectedPlan = getPlanById(form.selected_plan);

  function selectAccountType(accountType) {
    const nextPlan = getDefaultPlanForAccountType(accountType);

    setForm({
      ...form,
      account_type: accountType,
      selected_plan: nextPlan.id,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        account_type: form.account_type,
        selected_plan: form.selected_plan,
        phone: form.phone,
        location: form.location,
      };

      const { data } = await api.post('/register', payload);
      setAuthToken(data.token);
      setStoredAccountType(form.account_type);
      localStorage.setItem('selected_plan', form.selected_plan);
      saveAccountTypeFromAuthPayload(data);
      navigate('/dashboard');
    } catch (err) {
      const msg = err?.response?.data?.message || (err?.response?.data?.errors && Object.values(err.response.data.errors)[0][0]);
      setError(msg || 'Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fafc_0%,#ecfdf5_55%,#fff8d7_100%)]">
      <Navbar />

      <main className="py-8 sm:py-12 lg:py-16">
        <div className="container-premium">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
            <AuthShowcase mode="register" />

            <section className="order-1 rounded-[2rem] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.13)] ring-1 ring-slate-100 sm:p-7 lg:order-2 lg:p-8">
              <div className="mx-auto max-w-5xl">
                <div className="mb-7">
                  <img src={logo} alt="876Alert" className="h-[44px] w-[184px] object-contain" />
                  <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Create account</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Choose your account and plan.</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Personal Free requires no payment. Paid personal, business, and agency plans show payment placeholders while registration remains active.
                  </p>
                </div>

                {error && <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}

                <form onSubmit={onSubmit} className="space-y-7">
                  <div>
                    <label className="mb-3 block text-sm font-black text-slate-900">Account type</label>
                    <AccountTypeSelector
                      value={form.account_type}
                      onChange={selectAccountType}
                    />
                    <input type="hidden" name="account_type" value={form.account_type} />
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <label className="block text-sm font-black text-slate-900">Plan selection</label>
                      <Link to="/plans" className="text-sm font-black text-emerald-700 hover:underline">Compare all plans</Link>
                    </div>
                    <div className="grid gap-4 xl:grid-cols-2">
                      {availablePlans.map((plan) => (
                        <PlanCard
                          key={plan.id}
                          plan={plan}
                          selected={form.selected_plan === plan.id}
                          onSelect={(selected) => setForm({ ...form, selected_plan: selected.id })}
                        />
                      ))}
                    </div>
                  </div>

                  <PaymentPlaceholder plan={selectedPlan} />

                  <div className="rounded-3xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">Selected plan summary</p>
                    <h3 className="mt-2 text-xl font-black text-slate-950">{selectedPlan.title}</h3>
                    <p className="mt-1 text-sm font-semibold leading-6 text-emerald-900">
                      {selectedPlan.price}{selectedPlan.cadence !== 'Free' ? ` ${selectedPlan.cadence}` : ''} · {selectedPlan.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-black text-slate-800">Full name</label>
                      <input type="text" className="input-premium" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-800">Email</label>
                      <input type="email" className="input-premium" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-800">Password</label>
                      <input type="password" className="input-premium" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Use a strong password" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-800">Phone number <span className="font-semibold text-slate-400">(optional)</span></label>
                      <input type="tel" className="input-premium" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="876-000-0000" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-800">Parish / location <span className="font-semibold text-slate-400">(optional)</span></label>
                      <input type="text" className="input-premium" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Kingston, St. Catherine..." />
                    </div>
                  </div>

                  <button disabled={loading} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                    {loading ? 'Creating account...' : 'Create account'}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm font-semibold text-slate-600">
                  Already have an account? <Link className="font-black text-emerald-700 hover:underline" to="/login">Sign in</Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}