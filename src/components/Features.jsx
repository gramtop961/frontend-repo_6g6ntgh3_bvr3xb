import { ShieldCheck, Wallet, Send, LineChart } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "KYC & Compliance",
    desc: "Secure identity verification with industry leaders like Sumsub and Veriff.",
  },
  {
    icon: Wallet,
    title: "Wallet Integration",
    desc: "Connect MetaMask or WalletConnect and view live USDC balances.",
  },
  {
    icon: Send,
    title: "Instant Remittance",
    desc: "Send USDC globally with transparent fees and real-time confirmations.",
  },
  {
    icon: LineChart,
    title: "On/Off Ramp",
    desc: "Buy USDC with local currency and optionally cash out to INR.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center">
          Built for global payments
        </h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          A hybrid Web2 + Web3 experience that feels familiar yet powerful.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
