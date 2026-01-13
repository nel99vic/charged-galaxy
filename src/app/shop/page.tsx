import { ProductGrid } from "@/components/shop/ProductGrid";
import { products } from "@/lib/data";

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-[#050505] pb-20">

            {/* Header */}
            <div className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-neon-pink/10 rounded-full blur-[50px]" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-[60px]" />

                <h1 className="text-5xl md:text-6xl font-black text-white mb-4 relative z-10">
                    CATÁLOGO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple text-glow">PRO</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto relative z-10">
                    Materiales seleccionados para artistas del globo. Qualatex, Sempertex y más.
                </p>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProductGrid products={products} />
            </div>

        </div>
    );
}
