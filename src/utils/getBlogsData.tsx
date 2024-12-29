import matter from "gray-matter";

const API_URL = 'https://api.github.com';
const GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_BASE_URL;

interface BlogData {
    id: number;
    title: string;
    issue_number: number;
    description: string;
    content: string;
    date: string;
    url: string;
    slug: string;
    author: {
        login: string;
        avatar_url: string;
    };
}

/**
 * Fetch all blogs from GitHub Issues.
 * @returns {Promise<BlogData[]>} - A list of blogs.
 */
export async function fetchBlogs(): Promise<BlogData[]> {
    try {
        const response = await fetch(
            `${API_URL}/repos/axelj123/portfolio-content/issues?state=all&labels=state:published,type:post`,
            {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': `Bearer ${GITHUB_AUTH_TOKEN}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                },
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch blogs');
        }

        const issues = await response.json();

        return issues.map((issue: any) => {
            const { data, content } = matter(issue.body);

            return {
                id: issue.id,
                title: issue.title,
                issue_number: issue.number,
                description: data.summary || issue.body?.split('\n')[0] || '',
                content: content,
                date: new Date(issue.created_at).toLocaleDateString(),
                url: issue.html_url,
                slug: data.slug || issue.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
                author: {
                    login: issue.user.login,
                    avatar_url: issue.user.avatar_url,
                }
            };
        });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}

/**
 * Fetch a single blog post by its issue number.
 * @param {string} slug - The slug of the blog post.
 * @returns {Promise<BlogData>} - The blog post data.
 */
export async function getBlog(slug: string): Promise<BlogData> {
    try {
        // Primero obtener todos los blogs
        const allBlogs = await fetchBlogs();

        // Buscar el blog que coincida con el slug
        const blog = allBlogs.find(blog => blog.slug === slug);

        if (!blog) {
            throw new Error(`No se encontró el blog con slug: ${slug}`);
        }

        const response = await fetch(
            `${API_URL}/repos/axelj123/portfolio-content/issues/${blog.issue_number}`,
            {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': `Bearer ${GITHUB_AUTH_TOKEN}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                },
                next: {
                    revalidate: 3600
                }
            }
        );

        if (!response.ok) {
            throw new Error('No se pudo cargar el blog');
        }

        const issue = await response.json();
        const { data, content } = matter(issue.body);

        return {
            id: issue.id,
            title: issue.title,
            issue_number: issue.number,
            description: data.summary || issue.body?.split('\n')[0] || '',
            content: content,
            date: new Date(issue.created_at).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            url: issue.html_url,
            slug: data.slug || issue.title.toLowerCase().replace(/ /g, '-'),
            author: {
                login: issue.user.login,
                avatar_url: issue.user.avatar_url,
            }
        };
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
}
