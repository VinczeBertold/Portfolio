"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  transitionDuration?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  transitionDuration = 2,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: transitionDuration }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col min-h-60 items-center justify-center space-y-2 border rounded-xl p-4 md:p-8 hover:scale-105">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-base-100">
          {icon}
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold tracking-tighter">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
