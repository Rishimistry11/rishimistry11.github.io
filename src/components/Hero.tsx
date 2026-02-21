import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/40 glow-border">
            <img src={profilePhoto} alt="Rishikumar Mistry" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-primary text-sm md:text-base mb-4 tracking-wider"
        >
          &lt; Electronics Engineer /&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Rishikumar{" "}
          <span className="text-gradient">Mistry</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Expertise in Arduino, ESP32, Raspberry Pi & DMX/Art-Net protocols.
          Delivering innovative technical solutions in Dubai, UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <a href="mailto:rishimistry115@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> rishimistry115@gmail.com
          </a>
          <span className="hidden md:inline text-border">|</span>
          <a href="tel:+971564864240" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} /> +971 564864240
          </a>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Dubai, UAE
          </span>
          <span className="hidden md:inline text-border">|</span>
          <a href="https://www.linkedin.com/in/rishi-mistry-22073b263" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-8"
        >
          <a href="/resume.pdf" download>
            <Button variant="outline" size="lg" className="gap-2 border-primary/40 hover:bg-primary/10">
              <Download size={18} />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
