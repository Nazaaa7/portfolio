import { GraduationCap, Award, FileText } from 'lucide-react';

interface CardProps {
  title: string;
  institution: string;
  period: string;
  pdfUrl?: string;
}

const educationData = [
  {
    title: 'Técnica Superior en Desarrollo de Software Multiplataforma',
    institution: 'Instituto Politécnico Formosa (IPF)',
    period: '2024 – 2025',
    pdfUrl: 'src/assets/docs/IPF.pdf',
  },
  {
    title: 'Técnica en Programación',
    institution: 'Escuela Provincial de Educación Técnica N°7 "Vicente Arcadio Salemi"',
    period: '2017 – 2023',
    pdfUrl: 'src/assets/docs/Analitico.pdf',
  },
];

const coursesData = [
  {
    title: 'Inteligencia Artificial Aplicada',
    institution: 'Big School - Escuela de marketing digital, inteligencia artificial (IA), SEO y negocios',
    period: '2025',
    pdfUrl: 'src/assets/docs/IA.pdf',
  },
  {
    title: 'Certificación en Diseño Gráfico',
    institution: 'IAC – Instituto Argentino de Computación',
    period: '2024',
    pdfUrl: 'src/assets/docs/certDi.pdf',
  },
];

const eventsData = [
  {
    title: 'Hackathon IPF',
    institution: 'Instituto Politécnico Formosa',
    period: '2023 - 2024',
    pdfUrl: 'src/assets/docs/hack.pdf',
  },
];

const Card = ({ title, institution, period, pdfUrl }: CardProps) => (
  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl shadow-sm hover:border-sky-500 dark:hover:border-sky-500 transition-colors flex flex-col sm:flex-row justify-between gap-4">
    <div>
      <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1">{title}</h4>
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{institution}</p>
      <span className="inline-block mt-2 px-2.5 py-1 bg-sky-50 dark:bg-slate-700 text-sky-600 dark:text-sky-400 text-xs font-bold rounded-md">
        {period}
      </span>
    </div>
    {pdfUrl && (
      <a
        href={pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 flex items-center justify-center gap-2 h-10 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 hover:bg-sky-50 dark:hover:bg-sky-900/50 hover:text-sky-600 dark:hover:text-sky-400 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors"
      >
        <FileText size={16} /> Ver PDF
      </a>
    )}
  </div>
);

const EducationSection = () => (
  <section id="educacion" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-100/50 dark:bg-slate-900/20 rounded-3xl mt-12 mb-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Educación y Certificaciones</h2>
      <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  
      <div>
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-sky-500" size={28} />
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Formación Académica</h3>
        </div>
        <div className="space-y-4">
          {educationData.map((item, idx) => <Card key={`edu-${idx}`} {...item} />)}
        </div>
      </div>

   
      <div className="space-y-12">
       
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-sky-500" size={28} />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Cursos Adicionales</h3>
          </div>
          <div className="space-y-4">
            {coursesData.map((item, idx) => <Card key={`course-${idx}`} {...item} />)}
          </div>
        </div>

       
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-sky-500" size={28} />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Eventos relacionados</h3>
          </div>
          <div className="space-y-4">
            {eventsData.map((item, idx) => <Card key={`event-${idx}`} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;