import { ProfileHeader } from './components/ProfileHeader.jsx';
import { AnimatedBackground } from './components/AnimatedBackground.jsx';
import { ActionButton, SocialIcon } from './components/Actions.jsx';
import { TiltCard } from './components/TiltCard.jsx';
import { Phone, MessageCircle, MapPin, Instagram, Facebook, Send, Glasses } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const userData = {
    name: "Nassar Store",
    owner: "Khalid Nassar",
    tagline: "Visionary Style • Premium Eyewear Curator",
    slogan: "See the World Through a Premium Lens",
    address: "15-abd alhagar -ezbet elnakhl",
    phone: "01112876674",
    whatsapp: "201112876674", // Standardized for API
    socials: [
      { icon: Instagram, href: "https://instagram.com/nassar.store" },
      { icon: Facebook, href: "https://facebook.com/nassar.store" },
    ]
  };

  return (
    <div className="relative min-h-screen text-zinc-100 selection:bg-white/20">
      <AnimatedBackground />

      <main className="max-w-md mx-auto px-6 py-20 space-y-12">
        {/* Profile Card with 3D Tilt */}
        <TiltCard>
          <div className="glass-card p-10 flex flex-col items-center text-center space-y-6 relative overflow-hidden group">
            {/* Decorative Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"
            />

            <ProfileHeader
              name={userData.name}
              title={userData.owner}
              imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=400&auto=format&fit=crop" // Premium glasses image
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2 text-cyan-400 font-medium tracking-widest uppercase text-xs"
            >
              <Glasses size={16} />
              <span>{userData.tagline}</span>
            </motion.div>
          </div>
        </TiltCard>

        {/* Slogan Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-2"
        >
          <h2 className="text-3xl font-bold tracking-tight gradient-text">
            {userData.slogan}
          </h2>
          <div className="h-0.5 w-12 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        {/* Action Buttons */}
        <section className="grid gap-4">
          <ActionButton
            icon={Phone}
            label="Voice Call"
            subtext={userData.phone}
            href={`tel:${userData.phone}`}
            colorClass="bg-white/5 border border-white/10"
            delay={0.7}
          />
          <ActionButton
            icon={MessageCircle}
            label="WhatsApp Chat"
            subtext="Personal Consultant"
            href={`https://wa.me/${userData.whatsapp}`}
            colorClass="bg-white/5 border border-white/10"
            delay={0.8}
          />
          <ActionButton
            icon={MapPin}
            label="Showroom"
            subtext={userData.address}
            href="https://maps.google.com" // Placeholder for actual maps
            colorClass="bg-white/5 border border-white/10"
            delay={0.9}
          />
        </section>

        {/* Social Icons */}
        <section className="flex justify-center items-center space-x-6">
          {userData.socials.map((social, index) => (
            <SocialIcon
              key={index}
              icon={social.icon}
              href={social.href}
              delay={1.0 + index * 0.1}
            />
          ))}
        </section>
      </main>

      {/* Floating Action Button - Modernized */}
      <motion.button
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-3xl bg-white text-black flex items-center justify-center shadow-[0_20px_40px_rgba(255,255,255,0.2)] z-50 transition-all hover:bg-zinc-200"
      >
        <Send size={28} />
      </motion.button>
    </div>
  );
}

export default App;
