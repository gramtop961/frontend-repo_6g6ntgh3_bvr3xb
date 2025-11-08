import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function KYCForm({ user }) {
  const [status, setStatus] = useState('loading');
  const [form, setForm] = useState({
    full_name: '',
    country: '',
    document_type: 'Passport',
    document_number: '',
    address: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const fetchStatus = async () => {
    if (!user?.id) return;
    try {
      const res = await fetch(`${API_BASE}/kyc/status?user_id=${user.id}`);
      const data = await res.json();
      setStatus(data.status || 'not_submitted');
    } catch (e) {
      setStatus('not_submitted');
    }
  };

  useEffect(() => { fetchStatus(); }, [user?.id]);

  const submit = async (e) => {
    e.preventDefault();
    if (!user?.id) return;
    setSubmitting(true);
    setMessage('');
    try {
      const payload = { ...form, user_id: user.id };
      const res = await fetch(`${API_BASE}/kyc/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to submit KYC');
      setMessage('KYC submitted successfully. Status: pending');
      setStatus('pending');
    } catch (err) {
      setMessage(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="rounded-xl border border-slate-200 p-6">
        <p className="text-slate-600">Please sign in to submit KYC.</p>
      </div>
    );
  }

  return (
    <section id="kyc" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-slate-900">KYC Verification</h3>
          </div>
          <p className="mt-1 text-sm text-slate-600">Complete your identity verification to enable transfers.</p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm">
            <span className="px-2 py-1 rounded-full ring-1 ring-slate-200 bg-slate-50">Status: {status}</span>
          </div>

          <form onSubmit={submit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input required value={form.full_name} onChange={(e)=>setForm({...form, full_name:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Legal name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Country</label>
              <input required value={form.country} onChange={(e)=>setForm({...form, country:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="India" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Document type</label>
              <select value={form.document_type} onChange={(e)=>setForm({...form, document_type:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
                <option>Passport</option>
                <option>National ID</option>
                <option>Driver License</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Document number</label>
              <input required value={form.document_number} onChange={(e)=>setForm({...form, document_number:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="XXXXXXXX" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Address</label>
              <input required value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Street, City" />
            </div>
            <div className="sm:col-span-2">
              <button disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-2.5 hover:bg-slate-800 disabled:opacity-50">
                <ShieldCheck className="h-4 w-4" />
                {submitting ? 'Submitting...' : 'Submit KYC'}
              </button>
            </div>
            {message && <div className="sm:col-span-2 text-sm text-slate-700">{message}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
