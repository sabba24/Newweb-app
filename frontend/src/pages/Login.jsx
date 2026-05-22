import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthLayout from '../components/AuthLayout';
import { api, setAuthToken } from '../lib/api';

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
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AuthLayout title="Welcome back" subtitle="Sign in to continue monitoring trusted safety alerts.">
        {error && <div className="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-black text-gray-800">Email</label>
            <input type="email" className="input-premium" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-black text-gray-800">Password</label>
            <input type="password" className="input-premium" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" />
          </div>
          <button disabled={loading} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
        <p className="mt-6 text-center text-sm font-semibold text-gray-600">
          No account? <Link className="font-black text-emerald-700 hover:underline" to="/register">Create one</Link>
        </p>
      </AuthLayout>
      <Footer />
    </div>
  );
}