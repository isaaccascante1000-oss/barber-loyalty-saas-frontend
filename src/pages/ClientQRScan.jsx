import React, { useState } from 'react';
import { StampGrid, QRCard } from '../components';

export default function ClientQRScan() {
  const [clientData] = useState({
    name: 'Carlos Mendez',
    barbershopName: 'Classic Blade Barber Shop',
    stamps: 6,
    totalRequired: 10,
    qrToken: 'BL-9843-XY77',
    nextReward: 'Corte gratis + Bebida de cortesía'
  });

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white tracking-tight">Tu Tarjeta Digital</h1>
        <p className="text-sm text-zinc-400 mt-1">Muestra este código al barbero al pagar tu corte.</p>
      </div>

      {/* Tarjeta de Lealtad Virtual */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-semibold text-amber-400 tracking-wider uppercase">Programa VIP</p>
            <h2 className="text-lg font-bold text-white mt-0.5">{clientData.barbershopName}</h2>
          </div>
          <span className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full font-mono">
            {clientData.stamps}/{clientData.totalRequired}
          </span>
        </div>

        {/* Sellos Visuales Reutilizables */}
        <StampGrid
          total={clientData.totalRequired}
          current={clientData.stamps}
        />

        {/* QR Component */}
        <QRCard
          token={clientData.qrToken}
          clientName={clientData.name}
        />

        {/* Info Recompensa */}
        <div className="pt-2 border-t border-zinc-800/80 text-center">
          <p className="text-xs text-zinc-400">Próxima recompensa al completar {clientData.totalRequired} sellos:</p>
          <p className="text-xs font-semibold text-amber-300 mt-1">{clientData.nextReward}</p>
        </div>
      </div>
    </div>
  );
}
