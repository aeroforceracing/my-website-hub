import { motion } from "framer-motion";
import { Rocket, Ruler, Presentation, Globe } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Design & Engineer",
    description:
      "Teams of 3–6 students (ages 11–19) use CAD software and aerodynamic principles to design a miniature F1 car from a block of balsa wood or 3D-printed materials.",
  },
  {
    icon: Rocket,
    title: "Manufacture & Test",
    description:
      "Cars are manufactured using CNC routers or 3D printers, then tested in wind tunnels and on the track. Every millisecond counts — cars race at over 80 km/h on a 20-meter track, powered by CO₂ cartridges.",
  },
  {
    icon: Presentation,
    title: "Present & Brand",
    description:
      "It's not just engineering. Teams create a full brand identity, develop sponsorship portfolios, build marketing campaigns, and present their work to industry-expert judges.",
  },
  {
    icon: Globe,
    title: "Compete Globally",
    description:
      "Starting from school-level competitions, teams advance through regional and national finals for a shot at the World Finals — held at iconic F1 circuits around the globe.",
  },
];

export default function F1InSchoolsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] bg-primary/[0.06]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary">What is F1 in Schools?</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 leading-tight tracking-tight">
            The World's Largest STEM Competition
          </h2>
          <div className="w-16 h-1 mt-6 rounded-full mx-auto bg-gradient-brand" />
          <p className="text-muted-foreground text-lg mt-8 leading-relaxed">
            F1 in Schools (now STEM Racing) challenges students worldwide to design, build, and race the fastest
            miniature F1 car using real engineering principles — all while building a brand and pitching to judges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl p-8 transition-all duration-500 bg-surface-elevated/60 border border-border hover:border-primary/40"
            >
              <f.icon className="w-8 h-8 mb-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
