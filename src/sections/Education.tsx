interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  grade?: string;
}

const educationList: Education[] = [
  {
    degree: 'S1 Informatika',
    institution: 'Universitas Nusa Mandiri',
    period: '2024 — 2028',
    description: 'Fokus pada pengembangan web dengan integrasi AI.',
    grade: 'IPK 3.7',
  },
  {
    degree: 'Sekolah Menengah Kejuruan',
    institution: 'SMKS Bhinneka Nusantara',
    period: '2021 — 2024',
    description: 'Fokus pada jaringan dan perangkat lunak',
    grade: 'Nilai Akhir 90',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-10 px-3 bg-white text-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Education
          </h2>
        </div>

        <div className="space-y-0">
          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className="group border-t border-gray-200 py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-2 transition-all duration-300"
            >
              <div className="md:w-2/3">
                <h3 className="text-xl md:text-2xl font-bold tracking-tighter group-hover:translate-x-1 transition-transform duration-300">
                  {edu.degree}
                </h3>
                <p className="text-gray-500 text-sm mt-3 tracking-tight">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed max-w-md">
                    {edu.description}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-start md:items-end shrink-0">
                <span className="text-sm font-mono text-gray-400 tracking-tight">
                  {edu.period}
                </span>
                {edu.grade && (
                  <span className="text-sm text-gray-500 tracking-tight mt-5">
                    {edu.grade}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};