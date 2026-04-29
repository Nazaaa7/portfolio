import { useState } from 'react';
import { Github, ExternalLink, X, Zap, Calendar, User } from 'lucide-react';
import { projectsData } from '../Data/dataProjects';
import {
  TramitARView,
  OSDEView,
  StockView,
  DashboardView,
  LogisticaView,
  FinTrackView,
} from './DemoViews';

const renderMockUI = (id: string) => {
  switch (id) {
    case 'tramitar':   return <TramitARView />;
    case 'osde':       return <OSDEView />;
    case 'stock':      return <StockView />;
    case 'ventas':     return <DashboardView />;
    case 'logistica':  return <LogisticaView />;
    case 'finanzas':   return <FinTrackView />;
    default:           return null;
  }
};

const statusColors: Record<string, string> = {
  'En producción': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Completado':    'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  'En desarrollo': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
};

const ProjectsSection = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const activeProject = projectsData.find(p => p.id === activeDemo);

  return (
    <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Proyectos Destacados</h2>
        <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h4>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>

            <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-3">{project.subtitle}</p>

            {/* Meta: year + role */}
            <div className="flex flex-wrap gap-3 mb-3 text-xs text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={12} />{project.year}</span>
              <span className="flex items-center gap-1"><User size={12} />{project.role}</span>
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

            {/* Feature icons strip */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.features.map((f) => (
                <span
                  key={f.title}
                  title={f.title}
                  className="text-base px-1.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-default select-none"
                >
                  {f.icon}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
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
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              >
                <Github size={16} /> Código
              </a>
              <button
                onClick={() => setActiveDemo(project.id)}
                className="flex items-center gap-2 text-sm cursor-pointer font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
              >
                <ExternalLink size={16} /> Ver Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Modal ── */}
      {activeDemo && activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setActiveDemo(null)}
          />
          <div className="relative bg-slate-100 dark:bg-slate-950 w-full max-w-5xl h-[90vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-300 dark:border-slate-700">

            {/* Modal header */}
            <div className="bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between shrink-0 gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-xs font-bold text-sky-600 uppercase tracking-wider">Demo Interactiva</p>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${statusColors[activeProject.status]}`}>
                    {activeProject.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white text-lg leading-tight mt-0.5">
                  {activeProject.title}
                  <span className="text-sm font-medium text-slate-400 ml-2">{activeProject.subtitle}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {activeProject.year} · {activeProject.role}
                </p>
              </div>
              <button
                onClick={() => setActiveDemo(null)}
                className="p-2 bg-slate-100 hover:bg-red-100 hover:text-red-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-red-900/50 dark:hover:text-red-400 rounded-full transition-colors shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Demo area */}
            <div className="flex-1 overflow-hidden p-4 md:p-6 bg-slate-200/50 dark:bg-slate-950/50 flex flex-col">
              {renderMockUI(activeDemo)}
            </div>

            {/* Feature footer */}
            <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 shrink-0">
              <div className="flex gap-4 overflow-x-auto pb-1">
                {activeProject.features.map((f) => (
                  <div key={f.title} className="flex items-center gap-2 shrink-0 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-base">{f.icon}</span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;