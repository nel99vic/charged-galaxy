"use client";

import { ArrowRight, Box, CheckCircle, Gem, Globe, Play, ShoppingBag, Star, Video, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 3D HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#050505]">

        {/* Floating Background "Balloons" (CSS Shapes) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse delay-1000" />

          {/* 3D Floating Orbs */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-neon-pink to-purple-600 opacity-80 shadow-[0_0_50px_var(--neon-pink)] border border-white/20"
          />
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-neon-cyan to-blue-600 opacity-80 shadow-[0_0_40px_var(--neon-cyan)] border border-white/20"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/3 left-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-neon-lime to-green-600 opacity-60 shadow-[0_0_30px_var(--neon-lime)] blur-sm"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6"
          >
            ARTE EN <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan text-glow">
              GLOBOS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
          >
            Transforma eventos ordinarios en experiencias extraordinarias. Cursos exclusivos, materiales premium y diseños que desafían la gravedad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/shop"
              className="group relative px-8 py-4 bg-neon-pink text-white font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 box-glow-pink"
            >
              <span className="relative z-10 flex items-center">
                Ver Catálogo <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
            </Link>

            <Link
              href="/courses"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm"
            >
              Explorar Cursos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Brand Section */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-purple/5 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tighter">
            EL ARTE HA <span className="text-neon-cyan">EVOLUCIONADO</span>
          </h2>
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(189,0,255,0.2)] group cursor-pointer">
            <div className="absolute inset-0 bg-[url('/images/decor_neon_party.png')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500 transform group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play size={40} className="text-white ml-2 fill-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 text-left bg-gradient-to-t from-black via-black/50 to-transparent">
              <h3 className="text-2xl font-bold text-white">Mira nuestra historia</h3>
              <p className="text-gray-300">Descubre cómo creamos experiencias imposibles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID (Glassmorphism) */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple mb-4">
              ¿Por qué Charged Galaxy?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg backdrop-blur-sm bg-black/30 p-2 rounded-lg">
              No solo enseñamos a inflar globos. Enseñamos a crear imperios creativos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="glass-panel p-8 rounded-2xl hover-3d group">
              <div className="w-14 h-14 bg-neon-pink/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-pink/20 transition-colors">
                <ShoppingBag className="text-neon-pink h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tienda Premium</h3>
              <p className="text-gray-400">
                Distribuidores oficiales de Qualatex y Sempertex. Encuentra los colores más exclusivos y kits profesionales.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-8 rounded-2xl hover-3d group">
              <div className="w-14 h-14 bg-neon-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 transition-colors">
                <Video className="text-neon-cyan h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academy Online</h3>
              <p className="text-gray-400">
                Aprende desde cero o perfecciona tu técnica con nuestros masterclass en video 4K. Certifícate hoy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-8 rounded-2xl hover-3d group">
              <div className="w-14 h-14 bg-neon-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-lime/20 transition-colors">
                <Star className="text-neon-lime h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tendencias 2025</h3>
              <p className="text-gray-400">
                Inspiración diaria con estilos Boho-Chic, Orgánicos y las paletas de colores más virales del momento.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent skew-y-3 transform origin-bottom-left" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Lo que dicen nuestros artistas</h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full box-glow-pink" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl relative group hover:border-neon-purple/50 transition-colors">
                <div className="flex text-neon-lime mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "Increíble calidad en los materiales y los cursos son súper detallados. Mi negocio de decoración creció un 200% gracias a sus consejos."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-600 rounded-full mr-3 text-sm flex items-center justify-center font-bold text-white">AM</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Ana María</h4>
                    <p className="text-xs text-gray-500">Decoradora Profesional</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
