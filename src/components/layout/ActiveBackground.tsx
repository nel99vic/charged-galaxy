"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function ActiveBackground() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    // Motion values for mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the background movement
    const springConfig = { damping: 25, stiffness: 50 };
    const x = useSpring(useTransform(mouseX, [0, windowSize.width], [20, -20]), springConfig);
    const y = useSpring(useTransform(mouseY, [0, windowSize.height], [20, -20]), springConfig);

    useEffect(() => {
        // Set initial window size
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                style={{ x, y }}
                className="fixed inset-[-50px] z-[-2] pointer-events-none"
            >
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/custom-bg.jpg')",
                        filter: "saturate(1.5) contrast(1.2) brightness(0.8)" // More visible as requested ("impacte")
                    }}
                />
            </motion.div>

            {/* Digital Overlay - Thinner/Lighter layer to let image show through more */}
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-black/60 mix-blend-multiply" />
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
        </>
    );
}
