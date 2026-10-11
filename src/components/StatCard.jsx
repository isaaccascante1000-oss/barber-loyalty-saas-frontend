import React from 'react';

export default function StatCard({ title, value, change, subtitle, icon }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm hover:border-zinc-700 transition">
      <div className="flex justify-between items-start">
        <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">{title}</p>
        {icon && <span className="text-zinc-500 text-sm">{icon}</span>}
      </div>
      <h3 className="text-3xl font-extrabold text-white mt-2">{value}</h3>
      {change && (
        <span className="text-xs text-emerald-400 mt-1 inline-block font-medium">{change}</span>
      )}
      {subtitle && (
        <span className="text-xs text-zinc-400 mt-1 inline-block">{subtitle}</span>
      )}
    </div>
  );
}
