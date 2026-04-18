import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const steps = [
  'Press the "Become a Sponsor" button above.',
  "Fill in your card information.",
  "Decide the amount you'd like to donate.",
  "Add our team name in the comments field.",
  'Go to "Support for STEAM Student Groups" and fill in the required field.',
  "Click the payment button — you're done!",
];

export default function SponsorsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] bg-secondary/[0.08]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary">Our Partners</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 leading-tight tracking-tight">
            Sponsors
          </h2>
          <div className="w-16 h-1 mt-6 rounded-full mx-auto bg-gradient-brand" />
          <p className="text-muted-foreground text-lg mt-8 leading-relaxed">
            We're grateful to the partners who believe in the next generation of engineers and racers. Interested in
            supporting AeroForce Racing?
          </p>

          <motion.a
            href="https://donate.anatolia.edu.gr"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-gradient-brand-diag shadow-brand"
          >
            <Mail className="w-5 h-5" />
            Become a Sponsor
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 max-w-xl mx-auto text-left rounded-2xl p-6 bg-surface-elevated/60 border border-border"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-secondary">How to sponsor us</p>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground bg-gradient-brand-diag">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
