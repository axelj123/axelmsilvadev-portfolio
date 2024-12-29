// pages/projects.tsx
import { fetchProjects } from '@/utils/getProjectsData';
import ProjectList from '@/component/ProjectList';

async function Project() {
  const projects = await fetchProjects();

  return (
    <div className="mt-9 text-start p-4 pt-14">
      {/* Contenedor del contenido */}
      <div className="pb-8">
        <h1 className="text-4xl md:text-6xl  font-bold">Projects</h1>
        <p className="mt-9 text-sm md:text-base">
          I love building projects and practice my engineering skills, here's an archive of things that I've worked on.
        </p>
      </div>

      <ProjectList initialProjects={projects} />

    </div>
  );
}
export const metadata = {
  title: "Projects | My Portfolio", 
  titleTemplate: "%s | Portfolio of Axel Muñoz", 
  description: "Explore a curated collection of projects built by Axel Muñoz. Discover innovative solutions in web development, Next.js, React, and beyond.", 
  description_es: "Explora una colección seleccionada de proyectos realizados por Axel Muñoz. Descubre soluciones innovadoras en desarrollo web, Next.js, React, y más.", 
  keywords: "Axel Muñoz, Portfolio, Projects, Next.js, React, Web Development, JavaScript, Programming, Software Engineering", 
  keywords_es: "Axel Muñoz, Portafolio, Proyectos, Next.js, React, Desarrollo Web, JavaScript, Programación, Ingeniería de Software", 
  openGraph: {
    title: "Axel Muñoz - Projects and Portfolio", 
    description: "Dive into projects that showcase expertise in Next.js, React, and modern web development practices.", 
    description_es: "Explora proyectos que destacan la experiencia en Next.js, React y prácticas modernas de desarrollo web.", 
    type: "website", 
    site_name: "Axel Muñoz Portfolio",
    url: "https://yourwebsite.com/projects",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg", 
        width: 1200, 
        height: 630, 
        alt: "Axel Muñoz Portfolio Projects", 
      },
    ],
  },
  blog: {
    author: "Axel Muñoz", 
    publishedDate: "2024-12-20", 
    modifiedDate: "2024-12-28", 
    tags: ["Portfolio", "Projects", "Next.js", "React", "Web Development"], 
    category: "Portfolio", 
    readingTime: "3 min read", 
  },
  locale: "en_US", 
  locale_es: "es_ES", 
  robots: "index, follow", 
  author: "Axel Muñoz", 
};

export default Project;