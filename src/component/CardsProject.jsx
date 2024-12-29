// components/CardsProject.tsx
import PropTypes from 'prop-types';
import Link from "next/link";
import Image from 'next/image';
import { getTagStyles } from './techConfig';

function CardsProjects({ project }) {
  return (
    <Link 
      href={`/projects/${project.slug}`}  
      className="group transform transition-transform hover:scale-105 hover:shadow-lg p-4 rounded-lg  h-auto flex flex-col  border dark:border-[#2a2a2a] border-[#e4e4e4fd]"
    >
      <div className="h-48 overflow-hidden">
        <Image
          className="rounded-t-lg w-full h-full object-cover group-hover:opacity-90"
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          quality={75}
          priority
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{project.title}</h5>
        <p className="mb-3 text-sm md:text-base font-normal text-[#8c8c8c]  flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => {
            const { color, background, Icon } = getTagStyles(tag);
            return (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded flex items-center gap-1"
                style={{ backgroundColor: background, color }}
              >
                {Icon && <Icon size={12} />}
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

 


export default CardsProjects;