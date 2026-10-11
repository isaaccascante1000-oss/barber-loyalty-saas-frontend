import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-xs font-medium transition ${
      isActive
        ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
    }`;

  return (
    <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-base group-hover:scale-105 transition-transform">
            ✂
          </span>
          <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-zinc-200 to-amber-400 bg-clip-text text-transparent">
            BarberLoyalty
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-2">
          <nav className="hidden sm:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-xl border border-zinc-800">
            <NavLink to="/" end className={linkClass}>Inicio</NavLink>
            <NavLink to="/admin" className={linkClass}>Admin</NavLink>
            <NavLink to="/barber" className={linkClass}>Barbero</NavLink>
            <NavLink to="/scan" className={linkClass}>Cliente QR</NavLink>
          </nav>

          {/* CTA Demo Button */}
          <NavLink
            to="/demo"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                isActive
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20'
                  : 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-sm'
              }`
            }
          >
            <span>🎮</span>
            <span>Ver Demo</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
