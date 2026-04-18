import { motion } from "framer-motion";
import { Target, Zap, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Users, label: "Team Members", value: "6" },
  { icon: Target, label: "Mission", value: "Win" },
  { icon: Zap, label: "Focus", value: "Speed" },
  { icon: Trophy, label: "Spirit", value: "Champion" },
];

export default function AboutTeamSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 leading-tight tracking-tight">
              Meet
              <br />
              AeroForce Racing
            </h2>
            <div className="w-16 h-1 mt-6 rounded-full bg-gradient-brand" />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-foreground font-medium">AeroForce Racing</span> is a passionate team of young
              engineers and innovators competing in the prestigious{" "}
              <span className="font-medium text-secondary">F1 in Schools</span> (now STEM Racing) competition. We
              design, build, and race miniature Formula 1 cars powered by CO₂ cartridges — pushing the limits of
              aerodynamics, engineering, and teamwork.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team combines creativity with cutting-edge technology. From CAD design and CFD analysis to 3D printing
              and CNC manufacturing, we use real-world engineering processes to create the fastest possible car. But
              it's not just about speed — it's about collaboration, branding, sponsorship, and presenting our journey
              to a panel of expert judges.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Follow our journey on Instagram at{" "}
              <span className="font-medium text-primary">@aeroforceracing</span> to see behind-the-scenes content,
              race day highlights, and our progress toward the finals.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl p-6 text-center transition-all duration-500 bg-surface-elevated/60 border border-border"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 bg-gradient-to-b from-primary/10 to-transparent" />
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
