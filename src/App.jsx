import { ProfileHeader } from './components/ProfileHeader';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ActionButton, SocialIcon } from './components/Actions';
import { Phone, MessageCircle, MapPin, Twitter, Instagram, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const userData = {
    name: "Nassar Store",
    owner: "Medo Nassar",
    tagline: "Premium Tech & Modern Lifestyle Solutions",
    address: "New Cairo, District 5, Cairo, Egypt",
    phone: "+201234567890",
    whatsapp: "+201234567890",
    maps: "https://goo.gl/maps/example",
    socials: [
      { icon: Twitter, href: "https://twitter.com" },
      { icon: Instagram, href: "https://instagram.com" },
      { icon: Linkedin, href: "https://linkedin.com" },
      { icon: Github, href: "https://github.com" },
    ]
  };

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <AnimatedBackground />

      <main className="max-w-md mx-auto px-6 pb-24 space-y-8">
        <ProfileHeader
          name={userData.name}
          title={userData.owner}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-slate-300 italic">"{userData.tagline}"</p>
        </motion.div>

        <section className="space-y-4">
          <ActionButton
            icon={Phone}
            label="Call Me"
            subtext={userData.phone}
            href={`tel:${userData.phone}`}
            colorClass="bg-gradient-to-br from-green-500 to-emerald-600"
            delay={0.4}
          />
          <ActionButton
            icon={MessageCircle}
            label="WhatsApp"
            subtext="Available 24/7"
            href={`https://wa.me/${userData.whatsapp}`}
            colorClass="bg-gradient-to-br from-teal-400 to-green-500"
            delay={0.5}
          />
          <ActionButton
            icon={MapPin}
            label="Location"
            subtext={userData.address}
            href={userData.maps}
            colorClass="bg-gradient-to-br from-blue-500 to-indigo-600"
            delay={0.6}
          />
        </section>

        <section className="flex justify-center space-x-4">
          {userData.socials.map((social, index) => (
            <SocialIcon
              key={index}
              icon={social.icon}
              href={social.href}
              delay={0.7 + index * 0.1}
            />
          ))}
        </section>
      </main>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl text-white z-50 hover:shadow-cyan-500/25 transition-all"
      >
        <Send size={24} />
      </motion.button>
    </div>
  );
}

export default App;
