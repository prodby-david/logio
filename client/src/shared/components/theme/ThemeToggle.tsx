import { Sun, Moon } from "lucide-react";
import useTheme from "../../../shared/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2.5 rounded-xl bg-background-input border border-border-input hover:bg-background-card/50 text-text-muted hover:text-text-primary transition-all duration-200 cursor-pointer flex items-center justify-center"
    >
      {theme === "light" ? (
        <Moon size={20} strokeWidth={1.5} />
      ) : (
        <Sun size={20} strokeWidth={1.5} />
      )}
    </button>
  );
}
