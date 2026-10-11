import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="space-y-24 py-6">
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 text-center">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/15 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <span>✨</span>
            <span>El Software SaaS Nº 1 de Fidelización para Barberías</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Multiplica las visitas de tu barbería y{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200 bg-clip-text text-transparent">
              fideliza clientes de por vida
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Reemplaza las tarjetas de cartón que tus clientes siempre pierden. Implementa un sistema 
            de sellos digital mediante código QR, rápido para tus barberos y sin apps que instalar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold rounded-xl text-base shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>🚀 Probar Demostración Pública</span>
              <span>→</span>
            </Link>

            <Link
              to="/scan"
              className="w-full sm:w-auto px-7 py-4 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-semibold rounded-xl text-base transition-all hover:border-zinc-600 flex items-center justify-center gap-2"
            >
              <span>Ver Experiencia del Cliente</span>
            </Link>
          </div>

          {/* Micro Proof Metrics */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Sin descargas en App Store/Google Play</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Sello en menos de 3 segundos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Aumenta recurrencia un +35%</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            HERO VISUAL PREVIEW MOCKUP
            ========================================== */}
        <div className="mt-14 max-w-5xl mx-auto px-4">
          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-zinc-700/40 via-zinc-800/20 to-zinc-950/60 border border-zinc-800 shadow-2xl backdrop-blur-xl">
            <div className="bg-zinc-950 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              {/* Mini Card 1: Vista Barbero */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-amber-400">Panel del Barbero</span>
                  <span>⚡ En Vivo</span>
                </div>
                <h3 className="text-base font-bold text-white">Sello instantáneo</h3>
                <p className="text-xs text-zinc-400">
                  Un solo toque en la pantalla de la barbería para validar el corte y sumar un sello.
                </p>
                <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-300 font-mono">+1 Sello añadido</span>
                  <span className="text-emerald-400 font-bold text-xs">✓ Exitoso</span>
                </div>
              </div>

              {/* Mini Card 2: Vista Cliente */}
              <div className="bg-zinc-900/90 border border-amber-500/40 rounded-xl p-5 space-y-3 relative shadow-lg shadow-amber-500/5">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-amber-400">Tarjeta Virtual</span>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">7/10</span>
                </div>
                <h3 className="text-base font-bold text-white">Tarjeta en el móvil</h3>
                <p className="text-xs text-zinc-400">
                  El cliente guarda su pase en su navegador o Wallet. Nunca más la perderá ni la olvidará en casa.
                </p>
                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <div key={n} className="h-6 bg-amber-500/30 border border-amber-500/60 rounded text-[10px] text-amber-300 flex items-center justify-center font-bold">✂</div>
                  ))}
                  {[8, 9].map((n) => (
                    <div key={n} className="h-6 bg-zinc-800 border border-zinc-700 rounded text-[10px] text-zinc-500 flex items-center justify-center">{n}</div>
                  ))}
                  <div className="h-6 bg-amber-500/10 border border-dashed border-amber-500/40 rounded text-[10px] text-amber-400 flex items-center justify-center">🎁</div>
                </div>
              </div>

              {/* Mini Card 3: Métricas Dueño */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-amber-400">Analítica para Dueños</span>
                  <span>📊 ROI</span>
                </div>
                <h3 className="text-base font-bold text-white">Retención medible</h3>
                <p className="text-xs text-zinc-400">
                  Descubre quiénes son tus clientes más fieles, cada cuánto regresan y qué barbero fideliza más.
                </p>
                <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Retención de clientes:</span>
                  <span className="text-emerald-400 font-bold">+78% activa</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PROBLEM VS SOLUTION
          ========================================== */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-amber-400 font-bold">El Gran Problema</h2>
          <p className="text-3xl font-extrabold text-white">¿Por qué las tarjetas de papel te están costando dinero?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta Tradicional */}
          <div className="bg-red-950/20 border border-red-900/40 rounded-2xl p-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">❌</span>
              <h3 className="text-xl font-bold text-red-200">Tarjetas de Papel Tradicionales</h3>
            </div>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span><strong>El 80% de los clientes las pierde</strong> o las olvida en otra chaqueta o cartera.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span><strong>Cero datos de contacto:</strong> No tienes ni el teléfono ni el nombre del cliente para invitarlo a volver.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span><strong>Gasto continuo de imprenta</strong> en papeles y sellos de tinta que se borran.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span>Fáciles de falsificar o marcar sin control real de visitas.</span>
              </li>
            </ul>
          </div>

          {/* Solución BarberLoyalty */}
          <div className="bg-amber-950/20 border border-amber-500/40 rounded-2xl p-7 space-y-4 shadow-xl shadow-amber-500/5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <h3 className="text-xl font-bold text-amber-300">Con BarberLoyalty SaaS</h3>
            </div>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold mt-0.5">•</span>
                <span><strong>Siempre en su teléfono:</strong> Disponible al instante mediante un enlace web o escaneo de código QR.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold mt-0.5">•</span>
                <span><strong>Base de datos automatizada:</strong> Capturas número de teléfono y visitas reales de cada cliente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold mt-0.5">•</span>
                <span><strong>Incentivo irresistible:</strong> El cliente regresa antes para no perder su progreso hacia el premio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold mt-0.5">•</span>
                <span>Control total de qué barbero atiende y otorga cada sello en el sistema.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================
          BENEFICIOS PRINCIPALES
          ========================================== */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-amber-400 font-bold">Beneficios Comerciales</h2>
          <p className="text-3xl font-extrabold text-white">Diseñado para llenar la agenda de tu barbería</p>
          <p className="text-sm text-zinc-400">Cada funcionalidad está orientada a generar más facturación por sillón.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl">
              🔄
            </div>
            <h3 className="text-lg font-bold text-white">Acorta el ciclo de visita</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Los clientes que antes venían cada 4 o 5 semanas ahora regresan cada 2 o 3 semanas para acumular sellos y reclamar su recompensa.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white">Cero fricción en caja</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sin pedir descargas pesadas ni registros lentos. El cliente muestra su QR o da su teléfono y el barbero sella en 2 clicks antes de cobrar.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl">
              👑
            </div>
            <h3 className="text-lg font-bold text-white">Marca profesional y moderna</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Posiciona tu barbería por encima de la competencia con un club VIP digitalizado que transmite exclusividad y estilo.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          CÓMO FUNCIONA (3 PASOS SENCILLOS)
          ========================================== */}
      <section className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs uppercase tracking-widest text-amber-400 font-bold">Flujo Sencillo</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">Cómo opera en tu barbería día a día</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-3 text-center md:text-left">
            <span className="w-10 h-10 rounded-full bg-amber-500 text-zinc-950 font-black text-sm flex items-center justify-center mx-auto md:mx-0 shadow-md shadow-amber-500/30">
              1
            </span>
            <h3 className="text-base font-bold text-white">El cliente se atiende</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Al finalizar el corte o barba, el cliente muestra su QR personal desde su móvil o indica su número telefónico.
            </p>
          </div>

          <div className="space-y-3 text-center md:text-left">
            <span className="w-10 h-10 rounded-full bg-amber-500 text-zinc-950 font-black text-sm flex items-center justify-center mx-auto md:mx-0 shadow-md shadow-amber-500/30">
              2
            </span>
            <h3 className="text-base font-bold text-white">El barbero sella</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              En el panel del barbero, se valida la visita en 2 segundos. El saldo de sellos se actualiza al instante.
            </p>
          </div>

          <div className="space-y-3 text-center md:text-left">
            <span className="w-10 h-10 rounded-full bg-amber-500 text-zinc-950 font-black text-sm flex items-center justify-center mx-auto md:mx-0 shadow-md shadow-amber-500/30">
              3
            </span>
            <h3 className="text-base font-bold text-white">Canje y recompensa</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Al llegar a la meta (ej. 10 sellos), el sistema habilita el botón de canje para su corte gratis o producto exclusivo.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          CALL TO ACTION (DEMO PÚBLICA)
          ========================================== */}
      <section className="text-center max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div className="p-8 sm:p-12 bg-gradient-to-br from-amber-500/20 via-zinc-900 to-zinc-950 border border-amber-500/40 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Prueba cómo funciona en vivo ahora mismo
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto">
            Accede al entorno de demostración pública. Podrás experimentar la vista de administrador, 
            el panel táctil del barbero y la tarjeta digital del cliente sin necesidad de registro.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-base shadow-xl shadow-amber-500/30 transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>✨ Iniciar Demostración Pública</span>
              <span>→</span>
            </Link>

            <Link
              to="/admin"
              className="w-full sm:w-auto px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-semibold rounded-xl text-base transition"
            >
              Ver Panel de Dueño
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
