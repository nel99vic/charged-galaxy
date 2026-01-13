import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, Music2, Pin, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-lime">
                            BALLOON ART
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Tu destino premium para decoración con globos, cursos profesionales y suministros de alta gama.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider">Explorar</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/shop" className="hover:text-neon-pink transition-colors">Tienda</Link></li>
                            <li><Link href="/courses" className="hover:text-neon-pink transition-colors">Cursos</Link></li>
                            <li><Link href="/blog" className="hover:text-neon-pink transition-colors">Tendencias 2025</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider">Soporte</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/faq" className="hover:text-neon-cyan transition-colors">Preguntas Frecuentes</Link></li>
                            <li><Link href="/distributors" className="hover:text-neon-cyan transition-colors">Ser Distribuidor</Link></li>
                            <li><Link href="/contact" className="hover:text-neon-cyan transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider">Únete al Club</h4>
                        <p className="text-xs text-gray-500">Recibe descuentos exclusivos y tutoriales gratuitos.</p>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-md focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                            />
                            <button className="bg-neon-purple text-white px-4 py-2 rounded-md font-bold hover:bg-neon-pink hover:shadow-[0_0_15px_var(--neon-pink)] transition-all duration-300">
                                Suscribirse
                            </button>
                        </div>

                        {/* Socials */}
                        <div className="flex justify-center md:justify-start space-x-4 pt-4">
                            <div className="flex space-x-4 mt-6">
                                <a href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-pink hover:text-white transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://tiktok.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all duration-300">
                                    <Music2 size={20} /> {/* Using Music2 as TikTok generic replacement if icon missing, or just ensure Lucide has it or use generic */}
                                </a>
                                <a href="https://youtube.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                                    <Youtube size={20} />
                                </a>
                                <a href="https://pinterest.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                                    <Pin size={20} />
                                </a>
                                <a href="https://whatsapp.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300">
                                    <MessageCircle size={20} />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                        <p>&copy; {new Date().getFullYear()} Balloon Art Business. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
