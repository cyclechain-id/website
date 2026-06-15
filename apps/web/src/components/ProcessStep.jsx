import React from "react";
import { motion } from "framer-motion";

export default function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Icon className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
            <span className="text-sm font-bold text-accent-foreground">
              {number}
            </span>
          </div>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-foreground">{title}</h4>
        <p className="text-muted-foreground leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
