"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { roles } from "@/content";

export function RoleRotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-4 flex h-10 items-center overflow-hidden md:h-12">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl font-medium tracking-tight text-muted md:text-4xl"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
