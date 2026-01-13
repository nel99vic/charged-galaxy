import { courses } from "@/lib/data";
import { CourseCard } from "@/components/courses/CourseCard";
import { Sparkles } from "lucide-react";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-[#050505] pb-20">

            {/* Header */}
            <div className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px] -z-10" />

                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm mb-6 animate-pulse">
                    <Sparkles size={16} className="mr-2" />
                    <span>Aprende de los Mejores</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                    ACADEMY <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-neon-cyan text-glow">PRO</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Cursos online diseñados para convertir tu pasión en un negocio rentable.
                    Certifícate con técnicas avanzadas y estrategias de venta.
                </p>
            </div>

            {/* Courses List */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-gray-500">¿Buscas capacitación para tu equipo? <span className="text-neon-pink cursor-pointer hover:underline">Contáctanos para planes corporativos.</span></p>
            </div>

        </div>
    );
}
