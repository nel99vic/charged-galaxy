"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ActiveBackground() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Parallax Effect: Background moves slower than content, creating depth
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    // Continuous Cinematic Scale Effect (Breathing)
    // We use standard CSS keyframes for the infinite loop as it's more performant for background
    return (
        <div ref={ref} className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none h-screen w-screen">
            <motion.div
                style={{ y }}
                className="relative w-full h-[120%] -top-[10%]" // Extra height for parallax movement
            >
                <div
                    className="w-full h-full bg-cover bg-center animate-cinematic-pan"
                    style={{
                        backgroundImage: "url('/images/custom-bg.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        filter: "brightness(0.85) saturate(1.3) contrast(1.1)", // High contrast for "Marketing Impact"
                    }}
                />
            </motion.div>

            {/* Cinematic Digital Overlays */}

            {/* 1. Vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-[-1]" />

            {/* 2. Cyber Grid (moving) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(189,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(189,0,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px] [transform:perspective(500px)_rotateX(60deg)] origin-top z-[-1] opacity-30" />

            {/* 3. Subtle noise/grain for realism */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
