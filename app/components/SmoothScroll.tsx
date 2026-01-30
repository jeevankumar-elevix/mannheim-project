"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {

    useLayoutEffect(() => {
        // Register ScrollTrigger only on the client side
        gsap.registerPlugin(ScrollTrigger);

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 2.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            wheelMultiplier: 0.8,
            touchMultiplier: 2,
        });

        // Synchronize functionality with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Use GSAP's ticker to handle the animation frame
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable lag smoothing in GSAP to ensure sync with Lenis
        gsap.ticker.lagSmoothing(0);

        // Cleanup function
        return () => {
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
