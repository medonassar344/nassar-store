import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Globe, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const ActionButton = ({ icon: Icon, label, subtext, href, colorClass, delay = 0 }) => {
    return (
        <motion.a
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay, duration: 0.4 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card group flex items-center p-4 rounded-3xl transition-all duration-300 hover:bg-white/10"
        >
            <div className={`p-3 rounded-2xl ${colorClass} text-white mr-4 group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
            <div className="flex-1 text-left">
                <h3 className="font-semibold text-slate-100">{label}</h3>
                <p className="text-sm text-slate-400">{subtext}</p>
            </div>
        </motion.a>
    );
};

export const SocialIcon = ({ icon: Icon, href, delay = 0 }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay, duration: 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card rounded-full hover:bg-white/15 transition-colors text-slate-300 hover:text-white"
        >
            <Icon size={20} />
        </motion.a>
    );
};
