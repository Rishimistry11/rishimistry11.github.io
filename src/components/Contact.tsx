import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm mb-2 tracking-wider"
        >
          05. Contact
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Get In Touch
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-10 leading-relaxed"
        >
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:rishimistry115@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} /> Say Hello
          </a>
          <a
            href="https://www.linkedin.com/in/rishi-mistry-22073b263"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2"><Phone size={14} /> +971 564864240</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Dubai, UAE</span>
        </motion.div>
      </div>

      <div className="mt-20 text-center text-muted-foreground text-xs font-mono">
        <p>Built by Rishikumar Mistry</p>
      </div>
    </section>
  );
};

export default Contact;
