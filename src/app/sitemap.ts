// app/sitemap.ts
import { MetadataRoute } from 'next'
import matter from "gray-matter"
import { fetchProjects } from '@/utils/getProjectsData';

async function fetchBlogPosts() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/axelj123/portfolio-content/issues?state=all&labels=state:published,type:post`,
      {
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BASE_URL}`,
          'X-GitHub-Api-Version': '2022-11-28'
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const issues = await response.json();
    return issues.map((issue: any) => {
      const { data } = matter(issue.body);
      return {
        slug: data.slug || issue.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        date: new Date(issue.created_at).toISOString()
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://axelmsilvadev.vercel.app'


  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  try {

    const projects = await fetchProjects()
    const projectRoutes = projects.map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.date).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))


    const blogPosts = await fetchBlogPosts()
    const blogRoutes = blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [...mainRoutes, ...projectRoutes, ...blogRoutes]
  } catch (error) {
    console.error('Error generating sitemap:', error)

    return mainRoutes
  }
}