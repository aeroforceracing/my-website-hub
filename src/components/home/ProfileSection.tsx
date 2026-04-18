import { motion } from "framer-motion";
import { Instagram, Flame, Cpu, Wind } from "lucide-react";

const pillars = [
  {
    icon: Wind,
    title: "Aerodynamics",
    text: "Every curve is optimized. We use CFD simulations to minimize drag and maximize downforce on our miniature F1 car.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "From 3D printing to CNC machining, we leverage modern manufacturing to achieve precision down to fractions of a millimeter.",
  },
  {
    icon: Flame,
    title: "Passion",
    text: "We live and breathe racing. Our team puts in hours of research, testing, and iteration to be the fastest on the track.",
  },
];

export default function ProfileSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] bg-accent/30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary">Our Profile</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 leading-tight tracking-tight">
            Built for Speed
          </h2>
          <div className="w-16 h-1 mt-6 rounded-full mx-auto bg-gradient-brand" />
          <p className="text-muted-foreground text-lg mt-8 leading-relaxed">
            AeroForce Racing isn't just a team — it's a mindset. We approach every challenge with the precision of real
            F1 engineers and the creativity of world-class designers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-2xl p-8 transition-all duration-500 group bg-surface-elevated/60 border border-border"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/30" />
              <div className="relative">
                <pillar.icon className="w-8 h-8 mb-5 text-secondary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/aeroforceracing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-gradient-brand-plum shadow-brand"
          >
            <Instagram className="w-5 h-5" />
            Follow @aeroforceracing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
