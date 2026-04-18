import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function PhotoPlaceholder() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface-elevated">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-muted-foreground text-sm font-semibold tracking-[0.2em] uppercase">Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 tracking-tight">Team Photo</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl border-2 border-dashed flex flex-col items-center justify-center overflow-hidden group transition-all duration-500 border-border bg-background/40"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-muted">
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground text-lg font-medium">Photo Coming Soon</p>
              <p className="text-muted-foreground/60 text-sm mt-1">This space is reserved for a team photo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
