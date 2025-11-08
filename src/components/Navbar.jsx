import { Wallet, Shield } from "lucide-react";

export default function Navbar({ onSignIn, onConnect }) {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 shadow-md" />
          <span className="text-slate-900 font-semibold text-lg tracking-tight">Web3Pay</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#kyc" className="hover:text-slate-900 transition-colors">KYC</a>
          <a href="#wallet" className="hover:text-slate-900 transition-colors">Wallet</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onSignIn} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
          <button onClick={onConnect} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Connect</span>
          </button>
        </div>
      </div>
    </header>
  );
}
