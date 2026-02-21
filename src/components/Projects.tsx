import { motion } from "framer-motion";

const projects = [
  {
    title: "DU — GITEX 2024",
    subtitle: "Rotating Towers Installation",
    description: "Large-scale project involving 37 rotating hanging towers. Handled all electrical work, cable management, motor testing with C/C++, motor driver protocols, server rack setup, and microcontroller testing.",
  },
  {
    title: "ADNOC AP-5G Office",
    subtitle: "LED Systems & Installations",
    description: "End-to-end operations management for LED screen installations. Software configuration, server management, cable management, and power routing.",
  },
  {
    title: "Saudi Arabia Airlines — ATM 2025",
    subtitle: "LED Screen Installation",
    description: "High-profile project featuring 1600 RGB LEDs using Art-Net and DMX protocols with MADRIX software. Complete electrical and signal cabling, LED strip mapping, and controller configuration.",
  },
  {
    title: "Lift & Learn Technology",
    subtitle: "Interactive Retail Experience",
    description: "Developed sensor-triggered video playback system using microwave sensors for retail. Contributed to sensor integration, wiring, and deployment readiness.",
  },
  {
    title: "DIEZ — AI Event Expo 2020",
    subtitle: "Interactive Installations",
    description: "Multiple event and interactive installations from concept to completion, including interactive TVs, kiosks, and software configuration for seamless user experiences.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm mb-2 tracking-wider"
        >
          04. Projects
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Notable Work
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:glow-border hover:border-primary/40 transition-all duration-300 group"
            >
              <p className="font-mono text-primary text-xs mb-2">{project.subtitle}</p>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
