import { type Project } from '../types/project';

export const ProjectCard = ({ title, description, tags, image }: Project) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
    </div>
    <div className="mt-6">
      <div className="flex gap-2 mb-3">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 border border-gray-200 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="text-gray-500 mt-2 line-clamp-2">{description}</p>
    </div>
  </div>
);