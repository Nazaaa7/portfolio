import { Code2 } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="text-sky-500" size={32} />
        <span className="font-bold text-2xl text-slate-800 dark:text-white">
          Naza<span className="text-sky-500">Dev</span>
        </span>
      </div>
      <p className="text-slate-500 dark:text-slate-500 text-sm">
        © {new Date().getFullYear()} Nazarena Belén Garcia. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;