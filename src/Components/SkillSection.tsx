const SkillsSection = () => {
  const skills = [
    'React', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS',
    'JavaScript (ES6+)', 'TypeScript', 'PHP', 'Python', 'Node.js',
    'PostgreSQL', 'MongoDB', 'MariaDB', 'SQL',
    'Git', 'GitHub', 'Docker',
    'Figma (UI/UX)', 'Adobe Photoshop', 'Jira', 'Trello',
    'Microsoft Office', 'Excel', 'Google Workspace'
  ];

  return (
    <section id="habilidades" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Habilidades Técnicas</h2>
      <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-10" />
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map(skill => (
          <div
            key={skill}
            className="px-5 py-3 cursor-pointer bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-sky-500 dark:hover:border-sky-500 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;