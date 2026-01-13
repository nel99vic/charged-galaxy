"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
    id: number;
    name: string;
    brand: string;
    category: string;
    price: number;
    image: string;
    colors: string[];
    description: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-xl overflow-hidden hover-3d group relative flex flex-col h-full bg-[#111]"
        >
            {/* Image Placeholder (since we don't have real images yet, use a gradient box) */}
            <div className="h-64 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                {/* Simulating Product Image */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 shadow-xl group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-2 right-2 z-20 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-neon-cyan border border-neon-cyan/30">
                    {product.brand}
                </div>
            </div>

            <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white line-clamp-1">{product.name}</h3>
                    <span className="text-neon-lime font-mono font-bold">${product.price.toFixed(2)}</span>
                </div>

                <p className="text-gray-400 text-xs mb-4 line-clamp-2 flex-grow">{product.description}</p>

                <button className="w-full mt-auto py-2 bg-white/5 hover:bg-neon-pink text-white rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 group-hover:shadow-[0_0_15px_var(--neon-pink)]">
                    <ShoppingCart size={16} />
                    <span className="text-sm font-bold">Agregar</span>
                </button>
            </div>
        </motion.div>
    );
}
