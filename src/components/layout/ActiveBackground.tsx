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
                    className="w-full h-full bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/custom-bg.jpg')",
                        // 'cover' ensures it fills the screen, 'center top' focuses on the person's face/body usually in the upper half
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        filter: "brightness(0.9) saturate(1.2)" // Keeps it bright but slightly dimmed for text contrast
                    }}
                />
            </motion.div>

            {/* Digital Overlay - VERY transparent to let image show */}
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-black/30" />
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-50" />
        </>
    );
}
