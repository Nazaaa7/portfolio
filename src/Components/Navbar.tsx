import { Moon, Sun, Code2 } from 'lucide-react';
import { useTheme } from '../Contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/80 border-b border-sky-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Code2 className="text-sky-500" size={28} />
            <span className="font-bold text-xl text-slate-800 dark:text-white">
              Naza<span className="text-sky-500">Dev</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8 cursor-pointer">
            {[
              { href: '#sobre-mi', label: 'Sobre mí' },
              { href: '#proyectos', label: 'Proyectos' },
              { href: '#habilidades', label: 'Habilidades' },
              { href: '#experiencia', label: 'Experiencia' },
              { href: '#educacion', label: 'Educación y Cursos' },
              { href: '#contacto', label: 'Contacto' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;