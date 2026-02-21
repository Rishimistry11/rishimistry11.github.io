import { motion } from "framer-motion";

const skills = [
  { category: "Microcontrollers", items: ["Arduino Uno R3 & R4", "ESP32", "Raspberry Pi"] },
  { category: "Protocols", items: ["DMX", "Art-Net Protocol"] },
  { category: "Hardware", items: ["Electrical Wiring & Cable Management", "Power Calculation", "PCB Design (EasyEDA, Altium, Proteus)", "Soldering & Circuit Testing"] },
  { category: "Software", items: ["C/C++", "Python", "TouchDesigner", "n8n Automation", "Web Interfaces"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm mb-2 tracking-wider"
        >
          02. Skills
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Technical Toolkit
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:glow-border transition-shadow duration-300"
            >
              <h4 className="font-mono text-primary text-sm mb-4 tracking-wider">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
