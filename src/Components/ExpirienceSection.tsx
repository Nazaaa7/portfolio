const experiences = [
  {
    year: '2025',
    title: 'Desarrolladora - Proyecto Final',
    place: 'Subsecretaría de Recursos Humanos',
    description: 'Desarrollo de TramitAR, una plataforma inteligente de gestión ciudadana 24/7. Frontend con React, consumo de APIs y trabajo con metodologías ágiles.',
  },
  {
    year: '2024 – 2025',
    title: 'Participante de Hackathon',
    place: 'Hackathon IPF – Ediciones 2023 y 2024',
    description: 'Trabajo en equipos multidisciplinarios. Prototipado rápido y resolución de problemas bajo metodologías ágiles.',
  },
  {
    year: '2023',
    title: 'Desarrolladora - Prácticas Profesionalizantes',
    place: 'OSDE / EPET N°7',
    description: 'Desarrollo de software para la gestión de pacientes. Implementación de funcionalidades y manejo de base de datos en entorno práctico.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Experiencia y Eventos</h2>
        <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-2">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 sm:before:ml-[7.5rem] before:h-full before:px-px before:bg-slate-200 dark:before:bg-slate-700 sm:before:translate-x-[-0.5rem] before:top-8">
              <div className="absolute left-0 sm:left-[7.5rem] w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-50 dark:border-slate-950 mt-1.5 sm:translate-x-[-0.71rem]" />
              <div className="sm:absolute sm:left-0 sm:w-28 text-sm font-bold text-sky-500 uppercase tracking-wider mt-1 mb-2 sm:mb-0">
                {exp.year}
              </div>
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm w-full">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                <div className="text-slate-600 dark:text-slate-400 font-medium mb-3">{exp.place}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;