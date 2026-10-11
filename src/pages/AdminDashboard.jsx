import React, { useState } from 'react';
import { StatCard } from '../components';

export default function AdminDashboard() {
  const [stats] = useState({
    activeClients: 142,
    stampsIssuedThisMonth: 580,
    rewardsRedeemed: 34,
    retentionRate: '78%'
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-zinc-800">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Panel Administrativo</h1>
          <p className="text-sm text-zinc-400 mt-1">
            Configuración global del programa de fidelización y métricas generales.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold rounded-lg text-sm transition">
            + Nuevo Barbero
          </button>
        </div>
      </div>

      {/* KPI Cards usando StatCard reutilizable */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Clientes Registrados"
          value={stats.activeClients}
          change="↑ +12% este mes"
          icon="👥"
        />
        <StatCard
          title="Sellos Entregados"
          value={stats.stampsIssuedThisMonth}
          subtitle="Promedio 19 / día"
          icon="✂"
        />
        <StatCard
          title="Premios Canjeados"
          value={stats.rewardsRedeemed}
          subtitle="Cortes y productos"
          icon="🎁"
        />
        <StatCard
          title="Tasa de Retención"
          value={stats.retentionRate}
          change="Clientes recurrentes"
          icon="📈"
        />
      </div>

      {/* Reglas de Fidelización */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Reglas del Programa de Lealtad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase text-zinc-400 font-semibold mb-2">Sellos requeridos para premio</label>
            <input
              type="number"
              defaultValue={10}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-zinc-400 font-semibold mb-2">Descripción del premio</label>
            <input
              type="text"
              defaultValue="1 Corte de cabello gratis + Arreglo de barba"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
