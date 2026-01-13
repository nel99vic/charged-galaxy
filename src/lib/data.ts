export const products = [
    // --- LATEX BALLOONS (Qualatex, Sempertex, Tuftex) ---
    {
        id: 1,
        name: "Qualatex Chrome Gold (11\" - 100u)",
        brand: "Qualatex",
        category: "Latex",
        price: 18.50,
        image: "/images/gold-chrome.jpg",
        colors: ["Gold", "Metallic"],
        description: "El estándar de oro en globos. Acabado espejo ultra brillante y opaco."
    },
    {
        id: 2,
        name: "Qualatex Chrome Silver (11\" - 100u)",
        brand: "Qualatex",
        category: "Latex",
        price: 18.50,
        image: "/images/silver-chrome.jpg",
        colors: ["Silver", "Metallic"],
        description: "Plata líquida. Perfecto para eventos corporativos y bodas elegantes."
    },
    {
        id: 3,
        name: "Sempertex Pastel Matte Set (Mixed - 50u)",
        brand: "Sempertex",
        category: "Latex",
        price: 12.50,
        image: "/images/pastel-set.jpg",
        colors: ["Pastel", "Matte"],
        description: "Tonos suaves y empolvados (Lilac, Mint, Peach) para decoraciones orgánicas."
    },
    {
        id: 4,
        name: "Sempertex Fashion Eucalyptus (12\" - 50u)",
        brand: "Sempertex",
        category: "Latex",
        price: 9.90,
        image: "/images/eucalipto.jpg",
        colors: ["Green", "Matte"],
        description: "El verde tendencia 2025. Ideal para combinar con dorado y blanco."
    },
    {
        id: 5,
        name: "Tuftex Neon Night Kit (Assorted - 50u)",
        brand: "Tuftex",
        category: "Latex",
        price: 22.00,
        image: "/images/neon-kit.jpg",
        colors: ["Neon", "Fluorescent"],
        description: "Brillan intensamente bajo luz negra (UV). Perfectos para fiestas Glow."
    },
    {
        id: 6,
        name: "Tuftex Burnt Orange (24\" - 5u)",
        brand: "Tuftex",
        category: "Latex",
        price: 14.50,
        image: "/images/burnt-orange.jpg",
        colors: ["Orange", "Matte"],
        description: "Globos gigantes en tono terracota, ideales para estilo Boho-Chic."
    },

    // --- FOIL BALLOONS (Betallic, Anagram) ---
    {
        id: 7,
        name: "Betallic 40\" Number Gold",
        brand: "Betallic",
        category: "Foil",
        price: 8.99,
        image: "/images/number-gold.jpg",
        colors: ["Gold", "Metallic"],
        description: "Números gigantes con brillo espejo. Válvula de seguridad."
    },
    {
        id: 8,
        name: "Betallic 40\" Number Rose Gold",
        brand: "Betallic",
        category: "Foil",
        price: 8.99,
        image: "/images/number-rosegold.jpg",
        colors: ["Rose Gold", "Metallic"],
        description: "El color favorito para cumpleaños y aniversarios."
    },
    {
        id: 9,
        name: "Anagram Orbz Sphere (Ombre Blue)",
        brand: "Anagram",
        category: "Foil",
        price: 11.50,
        image: "/images/orbz-blue.jpg",
        colors: ["Blue", "Gradient"],
        description: "Esferas perfectamente redondas con efecto degradado 3D."
    },

    // --- ACCESSORIES & KITS ---
    {
        id: 10,
        name: "Kit Arco Orgánico 'Boho Dream' (3m)",
        brand: "BalloonArt",
        category: "Kits",
        price: 55.00,
        image: "/images/kit-boho.jpg",
        colors: ["Brown", "Cream", "Gold"],
        description: "Kit completo con 200 globos, cinta perforada y puntos adhesivos."
    },
    {
        id: 11,
        name: "Hi-Float Ultra Gel (24oz)",
        brand: "Hi-Float",
        category: "Accesories",
        price: 35.00,
        image: "/images/hifloat.jpg",
        colors: [],
        description: "Tratamiento para que los globos de látex duren días con helio."
    },
    {
        id: 12,
        name: "Electric Inflator Dual Nozzle",
        brand: "Generic",
        category: "Accesories",
        price: 45.00,
        image: "/images/inflator.jpg",
        colors: ["Pink"],
        description: "Inflador eléctrico de doble boquilla. Ahorra tiempo en montajes grandes."
    }
];

export const courses = [
    {
        id: 1,
        title: "Masterclass: Arcos Orgánicos Profesionales",
        level: "Principiante",
        price: 49.99,
        duration: "4h 30m",
        lessons: 12,
        image: "/images/course_thumb_organic_arch.png",
        description: "Aprende la técnica exacta para crear arcos fluidos y elegantes sin estructuras visibles. Incluye PDF de cálculo de materiales.",
        tags: ["Tendencia 2025", "Bestseller"]
    },
    {
        id: 2,
        title: "Distorsión de Globos: Figuras Avanzadas",
        level: "Avanzado",
        price: 89.99,
        duration: "6h 15m",
        lessons: 18,
        image: "/images/course_thumb_distortion.png",
        description: "Técnicas de 'Distortion' para crear flores realistas, personajes y formas imposibles combinando tamaños.",
        tags: ["Técnica Avanzada"]
    },
    {
        id: 3,
        title: "Negocio de Decoración: De Hobby a Empresa",
        level: "Negocios",
        price: 120.00,
        duration: "8h 00m",
        lessons: 24,
        image: "/images/course_thumb_business.png",
        description: "Cómo cotizar, contratos legales, manejo de clientes y marketing para decoradores. Conviértete en un profesional rentable.",
        tags: ["Marketing", "Gestión"]
    },
    {
        id: 4,
        title: "Bouquets con Helio y Burbujas",
        level: "Intermedio",
        price: 35.00,
        duration: "2h 45m",
        lessons: 8,
        image: "/images/course_thumb_bouquets.png",
        description: "Domina el arte de los bouquets flotantes, uso correcto de Hi-Float y personalización de burbujas con vinilo.",
        tags: ["Helio", "Regalos"]
    }
];
