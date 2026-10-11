import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import Landing from './pages/Landing';
import DemoHub from './pages/DemoHub';
import AdminDashboard from './pages/AdminDashboard';
import BarberPanel from './pages/BarberPanel';
import ClientQRScan from './pages/ClientQRScan';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0e0e10] text-zinc-100 flex flex-col font-sans">
        {/* Barra de Navegación Reutilizable */}
        <Navbar />

        {/* Enrutamiento Principal */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/demo" element={<DemoHub />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/barber" element={<BarberPanel />} />
            <Route path="/scan" element={<ClientQRScan />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="border-t border-zinc-800/60 py-6 text-center text-xs text-zinc-500 space-y-2">
          <p className="font-medium text-zinc-400">
            BarberLoyalty SaaS © 2026 • Plataforma de Lealtad y Fidelización para Barberías
          </p>
          <p className="text-[11px] text-zinc-600">
            Arquitectura Desacoplada FastAPI & React + Vite + Tailwind CSS
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
