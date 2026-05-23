import {
  Github, ExternalLink, Calendar, User, Zap,
  MessageSquare, ClipboardList, CalendarCheck, Settings2,
  Map, Truck, BarChart2,
  Package, RefreshCw, AlertTriangle, HardDrive,
  DollarSign, Target, Star, TrendingUp,
  Sparkles, Search, Smartphone,
  CheckSquare, Flame, LineChart,
  Wrench,
} from 'lucide-react';
import { projectsData } from '../Data/dataProjects';
import type { Project } from '../Data/dataProjects';

const statusColors: Record<string, string> = {
  'En producción': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Completado':    'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  'En desarrollo': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
};

/* Map string keys → Lucide components */
const iconMap: Record<string, React.ElementType> = {
  MessageSquare, ClipboardList, CalendarCheck, Settings2,
  Map, Truck, BarChart2,
  Package, RefreshCw, AlertTriangle, HardDrive,
  DollarSign, Target, Star, TrendingUp,
  Sparkles, Search, Smartphone,
  CheckSquare, Flame, LineChart,
  Wrench,
};

const FeatureIcon = ({ name, label }: { name: string; label: string }) => {
  const Icon = iconMap[name] ?? Wrench;
  return (
    <span
      title={label}
      className="flex items-center justify-center p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-default select-none text-slate-500 dark:text-slate-400"
    >
      <Icon size={14} />
    </span>
  );
};

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Proyectos Destacados
        </h2>
        <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project: Project) => (
          <div
            key={project.id}
            className="flex flex-col border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h4>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>

            <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-3">
              {project.subtitle}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-3 mb-3 text-xs text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {project.year}
              </span>
              <span className="flex items-center gap-1">
                <User size={12} />
                {project.role}
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="mb-4 space-y-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Zap size={12} className="text-sky-500 shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Feature icons */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.features.map((f) => (
                <FeatureIcon key={f.title} name={f.icon} label={f.title} />
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold rounded-full text-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              >
                <Github size={16} />
                Código
              </a>

              {project.deploy ? (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  Ver sitio
                </a>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  Ver repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;