import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

            {/* Dynamic Mesh Gradients */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-cyan-500/10 blur-[150px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, -50, -100, 0],
                    scale: [1, 1.1, 1.3, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[10%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[150px]"
            />

            {/* Subtle Scanlines effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />
        </div>
    );
};
