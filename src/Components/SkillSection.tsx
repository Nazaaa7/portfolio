import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaPython,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNestjs,
  SiDjango,
  SiFlask,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiMariadb,
  SiN8N,
  SiJira,
  SiTrello,
  SiCanva,
} from "react-icons/si";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "NestJS", icon: <SiNestjs /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
      ],
    },
    {
      title: "Lenguajes",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
      ],
    },
    {
      title: "Base de Datos",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MariaDB", icon: <SiMariadb /> },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "n8n", icon: <SiN8N /> },
      ],
    },
    {
      title: "Diseño & Organización",
      skills: [
        { name: "Figma", icon: <FaFigma /> },
       { name: "Photoshop", icon: <FaFigma /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "Trello", icon: <SiTrello /> },
        { name: "Canva", icon: <SiCanva /> },
      ],
    },
  ];

  return (
<section
  id="habilidades"
  className="py-24 px-6 bg-white dark:bg-[#020817] transition-colors duration-300"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Header */}
    <div className="text-center mb-20 flex flex-col items-center">
      <span className="px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sky-500 text-sm font-medium border border-slate-200 dark:border-slate-700">
        Skills
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
        Tecnologías y herramientas
      </h2>

      <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-center">
        Stack tecnológico y herramientas con las que desarrollo aplicaciones
        modernas, escalables y mantenibles.
      </p>
    </div>

    {/* Categories */}
    <div className="space-y-16">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="flex flex-col items-center"
        >
          {/* Category Title */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-2 h-8 bg-sky-500 rounded-full" />

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {category.title}
            </h3>
          </div>

          {/* Skills Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="
                  group
                  w-full
                  max-w-[170px]
                  bg-white dark:bg-slate-900/70
                  border border-slate-200 dark:border-slate-800
                  rounded-2xl
                  p-5
                  flex flex-col items-center justify-center
                  gap-4
                  hover:border-sky-500/50
                  hover:-translate-y-1
                  hover:shadow-lg
                  dark:hover:shadow-sky-900/20
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="text-5xl text-slate-700 dark:text-slate-200 group-hover:text-sky-500 transition-colors duration-300">
                  {skill.icon}
                </div>

                {/* Name */}
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-500 dark:group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default SkillsSection;