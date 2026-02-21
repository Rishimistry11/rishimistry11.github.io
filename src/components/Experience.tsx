import { motion } from "framer-motion";

const experiences = [
  {
    period: "Aug 2023 — Present",
    title: "Electronics Engineer / Operation Engineer",
    company: "Briteminds By Qubit Electronics LLC",
    location: "Dubai, UAE",
    points: [
      "Testing and validation of electronic components with preventive maintenance and calibration",
      "Applied DMX and Art-Net protocols for effective lighting control systems",
      "Hands-on experience with Arduino Uno, ESP32, and Raspberry Pi microcontrollers",
      "Workflow automation using n8n; electrical tasks including cable management and wiring diagrams",
    ],
  },
  {
    period: "Apr 2023 — Jul 2023",
    title: "Electrical & Electronics Engineer, Internship",
    company: "Magnitudo Technologies Pvt. Ltd",
    location: "Chennai, India",
    points: [
      "Contributed to a Hydroponics herb farming system project",
      "Designed and tested electronic circuits for industrial applications",
    ],
  },
  {
    period: "May 2021 — Jan 2022",
    title: "Electronics Engineer",
    company: "DZP Technologies Ltd",
    location: "Cambridge, UK",
    points: [
      "Designed wireless communication system with 20% greater accuracy than expectations",
      "Cross-department collaboration for seamless integration",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm mb-2 tracking-wider"
        >
          03. Experience
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Where I've Worked
        </motion.h3>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -translate-x-[7px]" />
              <p className="font-mono text-primary text-xs mb-1">{exp.period}</p>
              <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
              <p className="text-muted-foreground text-sm mb-3">{exp.company} — {exp.location}</p>
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-secondary-foreground text-sm flex gap-2">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
