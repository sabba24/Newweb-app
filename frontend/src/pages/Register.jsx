import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { api, setAuthToken } from '../lib/api';
import logo from '../assets/logo.svg';

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white to-emerald-50/60">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 ring-1 ring-black/5">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="876Alert" className="h-8" />
            </div>
            <h1 className="text-2xl font-bold mb-6 text-center">Create your account</h1>
            {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input type="password" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" required value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} />
              </div>
              <button disabled={loading} className="btn btn-primary w-full">{loading ? 'Creating account...' : 'Create account'}</button>
            </form>
            <p className="mt-6 text-sm text-gray-600 text-center">Already have an account? <Link className="text-emerald-700" to="/login">Sign in</Link></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
