import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-medium shadow">
            <Rocket className="h-3.5 w-3.5" />
            Instant, Borderless, Low-Cost Payments
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Web3Pay – Decentralized Cross-Border Remittance
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Move money globally in seconds using USDC on Polygon testnet. Seamless KYC, on-ramp, and live confirmations — all in one modern dashboard.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
              Get Started
            </a>
            <a href="#learn-more" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
