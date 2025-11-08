export default function CTASection() {
  return (
    <section id="get-started" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 via-purple-600/30 to-cyan-600/40" />
          <div className="relative p-8 sm:p-12 grid gap-6 sm:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Start sending money in minutes</h3>
              <p className="mt-2 text-white/80">
                Create an account, complete KYC, connect your wallet and you’re ready to go.
              </p>
            </div>
            <div className="flex gap-3 sm:justify-end">
              <a href="#kyc" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 hover:bg-slate-50 ring-1 ring-white/20">
                Create account
              </a>
              <a href="#learn-more" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-transparent text-white hover:bg-white/10 ring-1 ring-white/30">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
