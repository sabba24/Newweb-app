import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AuthShowcase from '../components/AuthShowcase';
import logo from '../assets/logo.svg';
import { api, setAuthToken } from '../lib/api';
import { saveAccountTypeFromAuthPayload } from '../lib/accountTypes';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/login', form);
      setAuthToken(data.token);
      saveAccountTypeFromAuthPayload(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fafc_0%,#ecfdf5_55%,#fff8d7_100%)]">
      <Navbar />

      <main className="py-8 sm:py-12 lg:py-16">
        <div className="container-premium">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <AuthShowcase mode="login" />

            <section className="order-1 flex rounded-[2rem] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.13)] ring-1 ring-slate-100 sm:p-7 lg:order-2 lg:p-8">
              <div className="mx-auto flex w-full max-w-lg flex-col justify-center">
                <div className="mb-7">
                  <img src={logo} alt="876Alert" className="h-[44px] w-[184px] object-contain" />
                  <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Secure login</p>
                  <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Welcome back.</h1>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Sign in to continue monitoring trusted missing-person reports, emergency alerts, and sponsored safety updates.
                  </p>
                </div>

                {error && <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-800">Email</label>
                    <input type="email" className="input-premium" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-800">Password</label>
                    <input type="password" className="input-premium" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" />
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                    <p className="text-sm font-black text-emerald-900">Account access reminder</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-emerald-800">
                      Use official emergency numbers first for active danger. 876Alert helps organize community safety information after that.
                    </p>
                  </div>

                  <button disabled={loading} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                    {loading ? 'Signing in...' : 'Sign in'}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm font-semibold text-slate-600">
                  No account? <Link className="font-black text-emerald-700 hover:underline" to="/register">Create one</Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}