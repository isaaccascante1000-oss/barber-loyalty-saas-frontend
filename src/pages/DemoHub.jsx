import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import BarberPanel from './BarberPanel';
import ClientQRScan from './ClientQRScan';

export default function DemoHub() {
  const [activeTab, setActiveTab] = useState('barber');

  return (
    <div className="space-y-8">
      {/* Demo Header */}
      <div className="bg-zinc-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2">
            <span>🎮 Entorno de Demostración Interactiva</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Explora las 3 caras de BarberLoyalty
          </h1>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Interactúa con los tres roles clave del sistema como si estuvieras en una jornada real en tu barbería.
          </p>
        </div>

        {/* Switcher Tabs */}
        <div className="flex bg-zinc-950 p-1.5 rounded-xl border border-zinc-800 gap-1 w-full md:w-auto">
          <button
            onClick={() => setActiveTab('barber')}
            className={`flex-1 md:flex-none px-4 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'barber'
                ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <span>✂</span>
            <span>1. Barbero (Cobro)</span>
          </button>

          <button
            onClick={() => setActiveTab('client')}
            className={`flex-1 md:flex-none px-4 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'client'
                ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <span>📱</span>
            <span>2. Cliente (Pase QR)</span>
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`flex-1 md:flex-none px-4 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'admin'
                ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <span>📊</span>
            <span>3. Dueño (Admin)</span>
          </button>
        </div>
      </div>

      {/* Dynamic Sandbox View */}
      <div className="bg-zinc-950/60 border border-zinc-800 rounded-3xl p-4 sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
              Modo Demo Activo: {activeTab === 'barber' ? 'Terminal de Sello Rápido' : activeTab === 'client' ? 'Vista en Smartphone del Cliente' : 'Panel de Control del Negocio'}
            </span>
          </div>

          <Link
            to={activeTab === 'barber' ? '/barber' : activeTab === 'client' ? '/scan' : '/admin'}
            className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
          >
            Abrir en pantalla completa →
          </Link>
        </div>

        {activeTab === 'barber' && <BarberPanel />}
        {activeTab === 'client' && <ClientQRScan />}
        {activeTab === 'admin' && <AdminDashboard />}
      </div>
    </div>
  );
}
