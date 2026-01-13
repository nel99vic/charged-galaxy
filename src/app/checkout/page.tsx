"use client";

import { useCart } from "@/context/CartContext";
import { CheckCircle, CreditCard, Lock, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CheckoutPage() {
    // Mock Cart Data for Visualization if empty (since context might be empty on direct load)
    const mockCart = [
        { id: 1, name: "Qualatex Chrome Gold", price: 18.50, image: "/images/gold-chrome.jpg", quantity: 2 },
        { id: 2, name: "Masterclass: Arcos Orgánicos", price: 49.99, image: "/images/course_thumb_organic_arch.png", quantity: 1 }
    ];

    const cart = mockCart; // In real app, use useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="glass-panel p-12 rounded-3xl text-center max-w-lg border border-neon-lime/30 shadow-[0_0_50px_var(--neon-lime)]"
                >
                    <div className="w-24 h-24 bg-neon-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={48} className="text-neon-lime" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">¡Pago Exitoso!</h2>
                    <p className="text-gray-400 mb-8">Tu orden #88923 ha sido confirmada. Hemos enviado el acceso de tus cursos a tu email.</p>
                    <Link href="/" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-neon-lime transition-colors">
                        Volver al Inicio
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Column: Form */}
                <div>
                    <h1 className="text-3xl font-bold text-white mb-8">Finalizar Compra</h1>

                    <form onSubmit={handlePayment} className="space-y-8">
                        {/* Steps Visuals */}
                        <div className="flex space-x-4 mb-8">
                            <div className="flex-1 h-1 bg-neon-pink rounded-full shadow-[0_0_10px_var(--neon-pink)]" />
                            <div className="flex-1 h-1 bg-neon-pink rounded-full shadow-[0_0_10px_var(--neon-pink)]" />
                            <div className="flex-1 h-1 bg-gray-800 rounded-full" />
                        </div>

                        {/* Shipping Info */}
                        <div className="glass-panel p-6 rounded-xl space-y-4">
                            <h3 className="text-white font-bold flex items-center"><Truck className="mr-2 text-neon-cyan" /> Información de Envío</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Nombre" className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan outline-none" required />
                                <input type="text" placeholder="Apellido" className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan outline-none" required />
                            </div>
                            <input type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan outline-none" required />
                            <input type="text" placeholder="Dirección Completa" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan outline-none" required />
                        </div>

                        {/* Payment Info */}
                        <div className="glass-panel p-6 rounded-xl space-y-4">
                            <h3 className="text-white font-bold flex items-center"><CreditCard className="mr-2 text-neon-purple" /> Método de Pago</h3>
                            <div className="p-4 border border-neon-purple/50 bg-neon-purple/10 rounded-lg flex items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <span className="w-4 h-4 rounded-full bg-neon-purple mr-3 shadow-[0_0_5px_var(--neon-purple)]" />
                                    <span className="text-white font-medium">Tarjeta de Crédito / Débito</span>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-8 h-5 bg-white rounded" />
                                    <div className="w-8 h-5 bg-white rounded" />
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <input type="text" placeholder="Número de Tarjeta" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple outline-none" required />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="MM/YY" className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple outline-none" required />
                                    <input type="text" placeholder="CVC" className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple outline-none" required />
                                </div>
                            </div>
                        </div>

                        <button disabled={isProcessing} type="submit" className="w-full py-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-xl text-lg hover:shadow-[0_0_20px_var(--neon-pink)] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed">
                            {isProcessing ? "Procesando..." : `Pagar $${total.toFixed(2)}`}
                        </button>
                        <p className="text-center text-xs text-gray-500 flex items-center justify-center">
                            <ShieldCheck size={14} className="mr-1" /> Pagos procesados seguramente con Stripe SSL.
                        </p>
                    </form>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:pl-12">
                    <div className="sticky top-32 glass-panel p-8 rounded-2xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Resumen de Orden</h2>
                        <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-2">
                            {cart.map(item => (
                                <div key={item.id} className="flex items-center">
                                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="ml-4 flex-grow">
                                        <h4 className="text-white text-sm font-medium line-clamp-1">{item.name}</h4>
                                        <p className="text-gray-500 text-xs">Cant: {item.quantity}</p>
                                    </div>
                                    <div className="text-neon-lime font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-4 space-y-2 text-sm">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Impuestos (Est)</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-white font-bold text-lg pt-4 border-t border-white/10">
                                <span>Total</span>
                                <span className="text-neon-cyan">${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
