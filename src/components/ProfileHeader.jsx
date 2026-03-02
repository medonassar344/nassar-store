import { motion } from 'framer-motion';

export const ProfileHeader = ({ name, title, imageUrl }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-4 pt-12 pb-8">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative group"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 bg-slate-900">
                    <img
                        src={imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop"}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-1"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
                    {name}
                </h1>
                <p className="text-lg md:text-xl text-slate-400 font-medium tracking-wide">
                    {title}
                </p>
            </motion.div>
        </div>
    );
};
