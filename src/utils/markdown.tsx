import matter from 'gray-matter';

export type BlogFrontmatter = {
  title: string;
  description: string;
};

export async function getMarkdownContent(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown content: ${response.status}`);
  }
  const text = await response.text();
  
  // Procesar el frontmatter
  const { data, content } = matter(text);
  
  return {
    title: data.title as string,
    description: data.description as string,
    content
  };
}