import { motion } from "framer-motion";

const actions = [
  {
    date: "Coming Soon",
    title: "Action Title",
    description: "Description of the action or event will go here.",
    tag: "Event",
  },
];

export default function Actions() {
  return (
    <main className="min-h-screen bg-background">
      <header className="relative py-24 sm:py-32 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] bg-primary/10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto px-6"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent-foreground/80">
            Our Journey
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-foreground mt-4 tracking-tight">
            ACTIONS &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-brand">EVENTS</span>
          </h1>
          <div className="w-16 h-1 mt-6 rounded-full mx-auto bg-gradient-brand" />
          <p className="text-muted-foreground text-lg mt-8 leading-relaxed">
            Everything we've done — competitions, workshops, milestones, and moments that define AeroForce Racing.
          </p>
        </motion.div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-border" />

          <div className="space-y-16">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 bg-background border-primary" />

                <div className={`ml-12 sm:ml-0 sm:w-[45%] ${i % 2 !== 0 ? "sm:text-right" : ""}`}>
                  <div className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] bg-surface-elevated/60 border border-border">
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary">
                      {action.tag}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">{action.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed text-sm">{action.description}</p>
                    <p className="text-xs mt-4 text-muted-foreground/60">{action.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center gap-8"
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-dashed z-10 bg-background border-border" />
              <div className="ml-12 sm:ml-0 sm:w-[45%]">
                <div className="rounded-2xl p-6 border-2 border-dashed border-border">
                  <p className="text-sm text-muted-foreground/50">Next chapter coming soon...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
