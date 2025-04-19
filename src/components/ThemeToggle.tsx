
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full glass-card w-12 h-12"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <motion.div
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-5 w-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-5 w-5 text-purple-700" />
          </motion.div>
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
