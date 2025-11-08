import { useState } from 'react';
import { Shield, Wallet } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function AuthModals({ open, onClose, onAuthed }) {
  const [tab, setTab] = useState('signin');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const endpoint = tab === 'signup' ? '/auth/signup' : '/auth/signin';
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Request failed');
      onAuthed(data);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('signin')} className={`px-3 py-1.5 rounded-lg text-sm ${tab==='signin' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}>Sign in</button>
          <button onClick={() => setTab('signup')} className={`px-3 py-1.5 rounded-lg text-sm ${tab==='signup' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}>Create account</button>
        </div>

        <form onSubmit={submit} className="space-y-3">
          {tab === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Jane Doe"/>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input required type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="••••••••"/>
          </div>

          {error && <p className="text-sm text-rose-600">{error}</p>}

          <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2.5 hover:bg-slate-800 disabled:opacity-50">
            <Shield className="h-4 w-4" />
            {tab==='signup' ? (loading ? 'Creating...' : 'Create account') : (loading ? 'Signing in...' : 'Sign in')}
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-slate-500">By continuing you agree to our Terms & Privacy.</div>
      </div>
    </div>
  );
}
