"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Heart, Share2, Music2, Play } from "lucide-react";

const articles = [
    {
        id: 1,
        title: "Tendencia Boho Chic: El Regreso a lo Natural",
        category: "Bodas",
        image: "/images/decor_boho_chic.png",
        excerpt: "Los tonos terracota y la incorporación de pampas grass están redefiniendo las bodas al aire libre. Descubre cómo lograr esta paleta mate.",
        date: "12 Ene 2025"
    },
    {
        id: 2,
        title: "Neon Glow: Fiestas que Brillan en la Oscuridad",
        category: "Eventos",
        image: "/images/decor_neon_party.png",
        excerpt: "La luz UV y los globos fluorescentes crean experiencias inmersivas. Guía completa de materiales reactivos a la luz negra.",
        date: "10 Ene 2025"
    },
    {
        id: 3,
        title: "Lujo Absoluto: Chrome Gold & White",
        category: "Corporativo",
        image: "/images/decor_elegant_wedding.png",
        excerpt: "La combinación clásica que nunca falla. Cómo estructurar backdrops gigantes para eventos de alto impacto.",
        date: "05 Ene 2025"
    },
    {
        id: 4,
        title: "Pastel Dreams: Tendencias Infantiles",
        category: "Cumpleaños",
        image: "/images/decor_kids_pastel.png",
        excerpt: "Los colores macaron siguen dominando. Diseños de nubes y arcoíris orgánicos para los más pequeños.",
        date: "02 Ene 2025"
    }
];

export default function InspirationPage() {
    return (
        <div className="min-h-screen bg-[#050505] pb-20">

            {/* Header */}
            <div className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-neon-pink/10 rounded-full blur-[80px] -z-10" />
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] -z-10" />

                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                    INSPIRATIÓN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-orange-500 text-glow">TRENDS</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Las últimas tendencias globales en decoración con globos. <br />
                    Galería de estilos, paletas de colores y montajes profesionales.
                </p>
            </div>

            {/* Featured Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-panel rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                <div className="absolute top-4 left-4 bg-neon-purple/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/20">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-8 relative">
                                <div className="flex justify-between items-center mb-4 text-gray-500 text-sm">
                                    <span>{article.date}</span>
                                    <div className="flex space-x-4">
                                        <button className="hover:text-neon-pink transition-colors"><Heart size={18} /></button>
                                        <button className="hover:text-neon-cyan transition-colors"><Share2 size={18} /></button>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-pink transition-colors">
                                    {article.title}
                                </h2>

                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {article.excerpt}
                                </p>

                                <button className="flex items-center text-neon-cyan font-bold hover:text-white transition-colors group/btn">
                                    Leer Artículo Completo <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Podcast Section */}
            <div className="max-w-4xl mx-auto mt-20 px-4">
                <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-[0_0_30px_var(--neon-purple)] flex-shrink-0">
                        <Music2 size={48} className="text-white" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Nuevo Podcast: "Business Overview"</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Escucha nuestra discusión generada con IA sobre el futuro de la industria de la decoración.
                            Analizamos tendencias, precios y estrategias de crecimiento.
                        </p>
                        <div className="space-y-2">
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <div className="w-1/3 h-full bg-neon-cyan" />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>12:45</span>
                                <span>35:20</span>
                            </div>
                        </div>
                    </div>
                    <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0">
                        <Play className="ml-1" fill="black" />
                    </button>
                </div>
            </div>

            {/* Newsletter / CTA */}
            <div className="max-w-4xl mx-auto mt-32 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 blur-[60px] rounded-full" />
                <div className="relative glass-panel p-12 rounded-3xl text-center border border-white/20">
                    <h2 className="text-3xl font-bold text-white mb-4">¿Quieres aprender a hacer esto?</h2>
                    <p className="text-gray-300 mb-8">
                        Domina estas técnicas en nuestra Academy Pro. Desde arcos orgánicos hasta estructuras 3D.
                    </p>
                    <a href="/courses" className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-neon-cyan hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Ir a los Cursos
                    </a>
                </div>
            </div>

        </div>
    );
}
