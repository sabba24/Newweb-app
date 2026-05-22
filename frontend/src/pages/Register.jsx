import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthLayout from '../components/AuthLayout';
import { api, setAuthToken } from '../lib/api';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/register', form);
      setAuthToken(data.token);
      navigate('/');
    } catch (err) {
      const msg = err?.response?.data?.message || (err?.response?.data?.errors && Object.values(err.response.data.errors)[0][0]);
      setError(msg || 'Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AuthLayout title="Create your account" subtitle="Join the network helping communities respond faster.">
        {error && <div className="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-black text-gray-800">Name</label>
            <input type="text" className="input-premium" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-black text-gray-800">Email</label>
            <input type="email" className="input-premium" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-black text-gray-800">Password</label>
            <input type="password" className="input-premium" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Use a strong password" />
          </div>
          <button disabled={loading} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">{loading ? 'Creating account...' : 'Create account'}</button>
        </form>
        <p className="mt-6 text-center text-sm font-semibold text-gray-600">
          Already have an account? <Link className="font-black text-emerald-700 hover:underline" to="/login">Sign in</Link>
        </p>
      </AuthLayout>
      <Footer />
    </div>
  );
}