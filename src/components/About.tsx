import { motion } from "framer-motion";

const education = [
  { year: "2023", degree: "Higher Diploma, Electrical & Electronics Engineering", school: "ASTI Academy — Dubai, UAE" },
  { year: "2018", degree: "Diploma, Electrical Engineering", school: "Parul University — Gujarat, India" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm mb-2 tracking-wider"
        >
          01. About
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Who I Am
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-secondary-foreground leading-relaxed text-lg mb-10"
        >
          I'm an Electronics & Operations Engineer based in Dubai with expertise in microcontrollers, 
          interactive installations, and LED systems. I specialize in bridging hardware and software — 
          from Arduino and ESP32 programming to DMX/Art-Net protocol integration and workflow automation. 
          I've delivered large-scale projects for events like GITEX, ATM, and permanent office installations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="font-mono text-primary text-sm mb-4 tracking-wider">Education</h4>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-mono text-muted-foreground text-sm shrink-0">{edu.year}</span>
                <div>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
