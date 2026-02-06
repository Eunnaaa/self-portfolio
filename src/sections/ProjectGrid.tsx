import { ProjectCard } from '../components/ProjectCard';
import { type Project } from '../types/project';
import p1 from '../assets/project1.png'
import p2 from'../assets/project2.png'
import p6 from '../assets/project6.png'
import p5 from '../assets/project5.png'

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Minimalist E-Commerce",
    description: "Toko online Fashion dan Jewelery.",
    tags: ["Vue", "Springboot", "MySQL"],
    image: p2,
    link: "#"
  },
  {
    id: 2,
    title: "Upload Achievement Student",
    description: "Upload Karya Siswa dan Mahasiswa",
    tags: ["React", "Express", "PostgreSQL"],
    image: p1,
    link: "https://pikmi-unm.vercel.app"
  },
  {
    id: 3,
    title: "Dessert Page Chocokaya",
    description: "Bisnis UMKM Dessert dingin Chocokaya",
    tags: ["React", "TypeScript"],
    image: p5,
    link: "https://chocokaya.vercel.app"
  },
  {
    id: 4,
    title: "EventKu Management",
    description: "Aplikasi Management Event Akademik",
    tags: ["Flutter", "Firebase"],
    image: p6,
    link: "#"
  }


];

export const ProjectGrid = () => (
  <section id="work" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
    <div className="flex justify-between items-end mb-16">
      <h2 className="text-4xl font-bold tracking-tight">Selected Works</h2>
      <p className="text-gray-400 text-sm italic">2022 — Now</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
      {PROJECTS.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);