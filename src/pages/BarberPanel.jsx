import React, { useState } from 'react';
import { StampGrid } from '../components';

export default function BarberPanel() {
  const [phoneSearch, setPhoneSearch] = useState('');
  const [selectedClient, setSelectedClient] = useState({
    id: 1,
    name: 'Mateo Rossi',
    phone: '+34 612 345 678',
    currentStamps: 7,
    maxStamps: 10,
    historyCount: 14,
  });
  const [stampedSuccess, setStampedSuccess] = useState(false);

  const handleAddStamp = () => {
    setSelectedClient((prev) => ({
      ...prev,
      currentStamps: Math.min(prev.currentStamps + 1, prev.maxStamps),
    }));
    setStampedSuccess(true);
    setTimeout(() => setStampedSuccess(false), 2500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="pb-4 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-white tracking-tight">Panel del Barbero</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Busca al cliente por teléfono o token QR para registrar visitas y sellar su tarjeta.
        </p>
      </div>

      {/* Buscador Rápido */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-3">
        <input
          type="text"
          placeholder="Ingresa teléfono o token del cliente..."
          value={phoneSearch}
          onChange={(e) => setPhoneSearch(e.target.value)}
          className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
        />
        <button className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg text-sm transition">
          Buscar
        </button>
      </div>

      {/* Tarjeta del Cliente Activo */}
      {selectedClient && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Cliente Habitual
              </span>
              <h2 className="text-xl font-bold text-white mt-2">{selectedClient.name}</h2>
              <p className="text-xs text-zinc-400">{selectedClient.phone}</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-amber-400">{selectedClient.currentStamps}</span>
              <span className="text-zinc-500 text-lg">/{selectedClient.maxStamps}</span>
              <p className="text-[11px] text-zinc-400">sellos actuales</p>
            </div>
          </div>

          {/* Cuadrícula de Sellos Reutilizable */}
          <StampGrid
            total={selectedClient.maxStamps}
            current={selectedClient.currentStamps}
          />

          {stampedSuccess && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-xs font-medium rounded-lg">
              ✨ ¡Sello agregado con éxito a la tarjeta de fidelidad!
            </div>
          )}

          {/* Acción Principal */}
          <div className="flex gap-3">
            <button
              onClick={handleAddStamp}
              className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-sm transition transform active:scale-[0.99] shadow-lg shadow-amber-500/10"
            >
              + Otorgar Sello de Visita
            </button>
            <button className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium rounded-xl text-sm transition">
              Canjear Premio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
