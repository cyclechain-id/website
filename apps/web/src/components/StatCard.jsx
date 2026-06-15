import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ number, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 tracking-tight">
        {number}
      </div>
      <div className="text-sm md:text-base text-primary-foreground/90 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
