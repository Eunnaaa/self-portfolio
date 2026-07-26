interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Vue', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Laravel Blade'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Laravel', 'Firebase', 'Springboot', 'Python Flask', 'Supabase'],
  },
  {
    category: 'Tools',
    items: ['Git & GitHub', 'Figma', 'Vercel', 'Docker', 'Prisma', 'Postman', 'Vite'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-10 px-3 bg-white text-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold tracking-tight uppercase text-gray-400 mb-6">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg font-medium tracking-tight text-black transition-all duration-300 hover:-translate-y-0.5 hover:text-gray-500 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};