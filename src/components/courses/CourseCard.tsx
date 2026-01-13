"use client";

import { Play, Clock, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Course {
    id: number;
    title: string;
    level: string;
    price: number;
    duration: string;
    lessons: number;
    image: string;
    description: string;
    tags: string[];
}

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel flex flex-col md:flex-row overflow-hidden rounded-2xl hover-3d group border border-white/10 hover:border-neon-purple/50 bg-[#0a0a0a]"
        >
            {/* Thumbnail / Video Preview Placeholder */}
            <div className="w-full md:w-1/3 h-56 md:h-auto relative bg-[#151515] flex items-center justify-center overflow-hidden group">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Glow behind play button */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play fill="white" className="text-white ml-1" />
                </div>

                <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-xs font-mono text-neon-cyan border border-neon-cyan/20">
                    {course.level}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:w-2/3 flex flex-col relative">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">{course.title}</h3>
                    <div className="text-xl font-bold text-neon-lime">${course.price.toFixed(2)}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-grow">{course.description}</p>

                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center"><Clock size={16} className="mr-2 text-neon-purple" /> {course.duration}</div>
                    <div className="flex items-center"><BookOpen size={16} className="mr-2 text-neon-purple" /> {course.lessons} Lecciones</div>
                    <div className="flex items-center"><Star size={16} className="mr-2 text-yellow-500" /> 4.9 (120)</div>
                </div>

                <a href={`/courses/${course.id}`} className="mt-auto w-full py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold rounded-lg hover:shadow-[0_0_20px_var(--neon-purple)] transition-shadow text-center block">
                    Ver Contenido del Curso
                </a>
            </div>
        </motion.div>
    );
}
