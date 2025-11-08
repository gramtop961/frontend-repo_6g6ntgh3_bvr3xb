import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <CTASection />
      <footer className="border-t border-slate-200 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Web3Pay. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-800">Privacy</a>
            <a href="#terms" className="hover:text-slate-800">Terms</a>
            <a href="#contact" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
