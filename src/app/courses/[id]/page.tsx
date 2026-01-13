"use client";

import { courses } from "@/lib/data";
import { Play, CheckCircle, Lock, Download, FileText, Share2 } from "lucide-react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CourseViewerPage() {
    const params = useParams();
    const id = Number(params.id);
    const course = courses.find(c => c.id === id);
    const [activeTab, setActiveTab] = useState("content");

    if (!course) {
        // In a real app we'd handle this better or use getStaticProps, 
        // but for this client component simulation finding by ID is okay.
        // If not found, return a simple sync not found message or redirect.
        return <div className="text-white text-center py-20">Curso no encontrado</div>;
    }

    return (
        <div className="min-h-screen bg-[#050505] pb-20">
            {/* Video Player Area */}
            <div className="w-full bg-black border-b border-white/10 relative group">
                <div className="max-w-7xl mx-auto aspect-video relative bg-[#0a0a0a] flex items-center justify-center overflow-hidden">

                    {/* Main Video Placeholder (Poster) */}
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />

                    {/* Play Button Overlay */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="z-20 w-24 h-24 rounded-full bg-neon-pink/90 flex items-center justify-center shadow-[0_0_40px_var(--neon-pink)] backdrop-blur-sm border-2 border-white/50"
                    >
                        <Play size={40} className="text-white fill-white ml-2" />
                    </motion.button>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
                        <div className="h-full w-1/3 bg-neon-cyan shadow-[0_0_10px_var(--neon-cyan)] relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content (Player) */}
                    <div className="lg:col-span-2 space-y-6">

                        <div className="relative aspect-video bg-black/50 rounded-2xl overflow-hidden border border-neon-cyan/30 shadow-[0_0_40px_rgba(0,255,255,0.1)] group">
                            <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
                            <p className="text-gray-400">{course.description}</p>
                        </div>

                        {/* Tools/Tabs */}
                        <div className="flex border-b border-white/10 space-x-6">
                            <button
                                onClick={() => setActiveTab("content")}
                                className={`pb-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'content' ? 'border-neon-pink text-neon-pink' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                            >
                                Contenido del Curso
                            </button>
                            <button
                                onClick={() => setActiveTab("materials")}
                                className={`pb-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-colors ${activeTab === 'materials' ? 'border-neon-cyan text-neon-cyan' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                            >
                                Materiales y Recursos
                            </button>
                        </div>

                        {activeTab === "content" ? (
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((lesson) => (
                                    <div key={lesson} className="flex items-center p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
                                        <div className="mr-4 text-gray-500 group-hover:text-neon-cyan">
                                            {lesson === 1 ? <Play size={20} /> : <Lock size={20} />}
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-white font-medium group-hover:text-neon-cyan transition-colors">Lección {lesson}: Fundamentos de la Técnica</h4>
                                            <span className="text-xs text-gray-500">15:30 min</span>
                                        </div>
                                        {lesson === 1 && <div className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan text-[10px] rounded uppercase font-bold">Reproduciendo</div>}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-4">
                                    <div className="p-3 bg-neon-purple/20 rounded-lg text-neon-purple"><FileText size={24} /></div>
                                    <div>
                                        <h4 className="text-white font-bold">Lista de Materiales.pdf</h4>
                                        <p className="text-xs text-gray-400">2.5 MB</p>
                                    </div>
                                    <button className="ml-auto text-gray-400 hover:text-white"><Download size={20} /></button>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-4">
                                    <div className="p-3 bg-neon-lime/20 rounded-lg text-neon-lime"><FileText size={24} /></div>
                                    <div>
                                        <h4 className="text-white font-bold">Guía de Precios.xlsx</h4>
                                        <p className="text-xs text-gray-400">1.2 MB</p>
                                    </div>
                                    <button className="ml-auto text-gray-400 hover:text-white"><Download size={20} /></button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="glass-panel p-6 rounded-xl">
                            <h3 className="text-white font-bold mb-4">Tu Progreso</h3>
                            <div className="w-full bg-gray-800 h-2 rounded-full mb-2">
                                <div className="bg-neon-lime h-full w-[15%] rounded-full shadow-[0_0_10px_var(--neon-lime)]" />
                            </div>
                            <p className="text-xs text-gray-400 flex justify-between">
                                <span>15% Completado</span>
                                <span>2/12 Lecciones</span>
                            </p>
                        </div>

                        <div className="glass-panel p-6 rounded-xl space-y-4">
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg flex items-center justify-center space-x-2 border border-white/10">
                                <Share2 size={18} />
                                <span>Compartir Curso</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            );
}
