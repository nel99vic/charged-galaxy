"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Filter, X } from "lucide-react";

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

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    const [filterBrand, setFilterBrand] = useState<string | null>(null);
    const [filterCategory, setFilterCategory] = useState<string | null>(null);

    const brands = Array.from(new Set(products.map(p => p.brand)));
    const categories = Array.from(new Set(products.map(p => p.category)));

    const filteredProducts = products.filter(product => {
        if (filterBrand && product.brand !== filterBrand) return false;
        if (filterCategory && product.category !== filterCategory) return false;
        return true;
    });

    const clearFilters = () => {
        setFilterBrand(null);
        setFilterCategory(null);
    };

    return (
        <div>
            {/* Filters Bar */}
            <div className="mb-8 p-4 glass-panel rounded-xl flex flex-wrap gap-4 items-center">
                <div className="flex items-center text-neon-cyan font-bold mr-4">
                    <Filter size={20} className="mr-2" /> Filtros:
                </div>

                {/* Brand Filter */}
                <select
                    className="bg-black/50 text-white border border-white/20 rounded-md px-3 py-1 focus:border-neon-pink focus:outline-none"
                    onChange={(e) => setFilterBrand(e.target.value || null)}
                    value={filterBrand || ""}
                >
                    <option value="">Todas las Marcas</option>
                    {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>

                {/* Category Filter */}
                <select
                    className="bg-black/50 text-white border border-white/20 rounded-md px-3 py-1 focus:border-neon-pink focus:outline-none"
                    onChange={(e) => setFilterCategory(e.target.value || null)}
                    value={filterCategory || ""}
                >
                    <option value="">Todas las Categorías</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                {/* Clear Button */}
                {(filterBrand || filterCategory) && (
                    <button
                        onClick={clearFilters}
                        className="flex items-center text-sm text-red-400 hover:text-red-300 ml-auto"
                    >
                        <X size={16} className="mr-1" /> Limpiar
                    </button>
                )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No se encontraron productos con estos filtros.
                </div>
            )}
        </div>
    );
}
