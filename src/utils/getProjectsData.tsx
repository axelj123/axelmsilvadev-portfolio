import matter from "gray-matter";

const API_URL = 'https://api.github.com';
const GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_BASE_URL;

interface ProjectData {
    id: number;
    title: string;
    issue_number: number;
    description: string;
    content: string;
    date: string;
    url: string;
    slug: string;
    image: string;
    tags: string[];
    category: string;
    deployLink: string;
    author?: {
        login: string;
        avatar_url: string;
    };
}

/**
 * Fetch all projects from GitHub Issues.
 * @returns {Promise<ProjectData[]>} - A list of projects.
 */
export async function fetchProjects(): Promise<ProjectData[]> {
    try {
        const response = await fetch(
            `${API_URL}/repos/axelj123/portfolio-content/issues?state=all&labels=state:published,type:project`,
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
        console.log("CODIGO" + process.env.NEXT_PUBLIC_BASE_URL);

        if (!response.ok) {
            console.log("CODIGO " + process.env.NEXT_PUBLIC_BASE_URL);
            throw new Error('Failed to fetch projects');
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
                // YAML
                slug: data.slug || issue.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''), // Si no hay slug en el YAML, usar el título como último recurso
                image: data.image || '/placeholder-image.jpg',
                tags: data.techStack?.split(',').map((tech: string) => tech.trim()) || [],
                category: data.category || 'Project',
                deployLink: data.deployLink || '',
                author: {
                    login: issue.user.login,
                    avatar_url: issue.user.avatar_url,
                }
            };
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}


/**
 * Fetch a single project by its issue number.
 * @param {number} issueNumber - The issue number.
 * @returns {Promise<ProjectData>} - The project data.
 */
export async function getProjects(slug: string): Promise<ProjectData> {
    try {
        const allProjects = await fetchProjects();
        
        const project = allProjects.find(project => project.slug === slug);
        
        if (!project) {
            throw new Error(`No se encontró el proyecto con slug: ${slug}`);
        }

        const response = await fetch(
            `${API_URL}/repos/axelj123/portfolio-content/issues/${project.issue_number}`,
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
            throw new Error('No se pudo cargar el proyecto');
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
            image: data.image || '/placeholder-image.jpg',
            tags: data.techStack?.split(',').map((tech: string) => tech.trim()) || [],
            category: data.category || 'Project',
            deployLink: data.deployLink || '',
            author: {
                login: issue.user.login,
                avatar_url: issue.user.avatar_url,
            }
        };
    } catch (error) {
        console.error('Error fetching project:', error);
        throw error;
    }
}