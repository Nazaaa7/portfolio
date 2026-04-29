import { Mail, MapPin, Phone, Code2, LayoutTemplate, FileText } from 'lucide-react';
import profilePic from '../assets/cv.jpg';
import cvPdf from '../assets/docs/cv (5).pdf';

const HeroSection = () => {
  return (
    <section id="sobre-mi" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-semibold text-sm mb-4">
            Disponibilidad Activa
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hola, soy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Nazarena Belén Garcia
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
            Desarrolladora de Software Junior
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Técnica Superior en Desarrollo de Software Multiplataforma y Técnica en Programación.
            Me destaco por ser responsable, organizada y con gran capacidad de aprendizaje, tanto
            de manera autónoma como en equipo, con interés en seguir creciendo dentro del área de
            desarrollo.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-sky-500/30"
            >
              <Mail size={20} /> Contáctame
            </a>
            <a
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 px-6 py-3 rounded-xl font-medium transition-all"
            >
              <FileText size={20} /> Descargar CV
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <MapPin size={18} className="text-sky-500" /> Formosa, Argentina
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Phone size={18} className="text-sky-500" /> 3704-627280
            </div>
          </div>
        </div>

        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse" />
          <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <img src={profilePic} alt="Nazarena Garcia" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-10 right-0 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-sky-500">
            <Code2 size={24} />
          </div>
          <div className="absolute bottom-10 left-0 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-blue-500">
            <LayoutTemplate size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;