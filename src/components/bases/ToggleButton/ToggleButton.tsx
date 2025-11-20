"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FancyToggle = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={cn(
          "relative w-12 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none",
          checked ? "bg-green-500" : "bg-yellow-400",
        )}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md"
          animate={{ x: checked ? 24 : 0 }}
        />
      </button>
    </div>
  );
};

export default FancyToggle;
