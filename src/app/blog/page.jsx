import BlogList from '@/component/BlogList';
import { fetchBlogs } from '@/utils/getBlogsData'; // Importa la función fetchBlogs

export default async function Blog() {
  try {
    const blogs = await fetchBlogs(); // Usa la función fetchBlogs para obtener los blogs
 
    return (
      <div className="mt-9 text-start p-4 pt-14">
        <div className="pb-8">
          <h1 className="text-4xl md:text-6xl  font-bold">Blog</h1>
          <p className="mt-9 text-sm md:text-base">
            This is where I share my writings on programming, tutorials, and my experiences.
          </p>
        </div>
      <BlogList initialBlogs={blogs}/>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return <div>Error loading blogs.</div>; // Maneja el error
  }
}
