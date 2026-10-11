import React, { useState } from 'react';

export default function QRCard({ token, barbershopName, clientName }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center space-y-4 shadow-xl">
      {barbershopName && (
        <p className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
          {barbershopName}
        </p>
      )}
      {clientName && (
        <h3 className="text-lg font-bold text-white">{clientName}</h3>
      )}

      {/* QR visual placeholder / render */}
      <div className="bg-white rounded-2xl p-5 w-48 h-48 mx-auto flex flex-col items-center justify-center shadow-inner">
        <div className="w-full h-full border-4 border-dashed border-zinc-900 rounded-xl flex flex-col items-center justify-center p-2 text-zinc-950 font-mono text-center">
          <span className="text-3xl">📱</span>
          <p className="text-[10px] uppercase font-bold tracking-widest mt-1 text-zinc-700">QR BarberLoyalty</p>
          <p className="text-xs font-bold font-mono text-zinc-900 mt-0.5 truncate max-w-[140px]">{token}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <span className="font-mono text-xs text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
          {token}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition"
        >
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
    </div>
  );
}
