import { useState } from 'react';
import { Wallet } from 'lucide-react';

export default function WalletConnectBar({ onConnected }) {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState('');

  const connect = async () => {
    setError('');
    try {
      if (!window.ethereum) { setError('MetaMask not found'); return; }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const acc = accounts[0];
      setAccount(acc);
      onConnected?.(acc);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
        <div className="text-sm text-slate-700">
          {account ? (
            <span>Connected: <span className="font-mono">{account}</span></span>
          ) : (
            <span>Connect your wallet to enable on-chain actions</span>
          )}
        </div>
        <button onClick={connect} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">
          <Wallet className="h-4 w-4" />
          {account ? 'Reconnect' : 'Connect Wallet'}
        </button>
      </div>
      {error && <div className="mt-2 text-sm text-rose-600">{error}</div>}
    </div>
  );
}
