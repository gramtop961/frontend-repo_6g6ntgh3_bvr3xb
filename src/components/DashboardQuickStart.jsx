import { useMemo } from 'react';
import { Rocket, ShieldCheck, Wallet, Send } from 'lucide-react';

export default function DashboardQuickStart({ user }) {
  const steps = useMemo(() => [
    { icon: Rocket, title: 'Get Started', desc: 'Create your account to begin.' , anchor: '#get-started'},
    { icon: ShieldCheck, title: 'Complete KYC', desc: 'Verify your identity.', anchor: '#kyc' },
    { icon: Wallet, title: 'Connect Wallet', desc: 'Link MetaMask or WalletConnect.', anchor: '#wallet' },
    { icon: Send, title: 'Send Money', desc: 'Transfer USDC globally.', anchor: '#send' },
  ], []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ icon: Icon, title, desc, anchor }) => (
            <a href={anchor} key={title} className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow">
              <Icon className="h-5 w-5 text-indigo-600" />
              <h4 className="mt-2 font-semibold text-slate-900">{title}</h4>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <div className="mt-3 text-xs text-indigo-600 group-hover:underline">Open</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
