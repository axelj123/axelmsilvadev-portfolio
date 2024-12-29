import CodePre from '@/component/CodePre';
import Markdown from 'react-markdown';
import CustomTOC from '@/component/CustomTOC';
import { fromMarkdown } from 'react-markdown-toc';
import { CustomHeading } from '@/component/CustomHeading';
import Image from 'next/image';
import { getProjects } from '@/utils/getProjectsData';

const isVideoUrl = (url) => {
  return url.match(/\.(mp4|webm|ogg)$/) || url.includes('github.com/user-attachments/assets');
};

export default async function ProjectDetails({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return (
      <div className="mt-9 text-center text-red-500">
        <p>Error: Número de issue no proporcionado</p>
      </div>
    );
  }

  try {
    const article = await getProjects(slug);

    return (
  

        <div className="my-12 text-start p-4">
                  <Metadata title={`${article.title} - Axel Muñoz Silva`} description={article.description} />

          <h1 className="text-4xl md:text-6xl font-bold">{article.title}</h1>
          <p className='pt-3  text-sm md:text-base'> {article.description}</p>
          <Image
            src={article.image}
            alt={article.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full sm:w-auto sm:h-auto rounded-lg max-w-full mx-auto my-8 block"
          />
          <div className="border-b-2 border-[#2a2a2a]">
            <div className="flex items-center my-6 flex-wrap md:flex-nowrap">
              <Image
                src={article.author.avatar_url}
                alt={article.author.login}
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-sm ml-2">{article.author.login}</span>
                <p className="text-sm ml-2">Publicado el {article.date}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-6 space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-4/6 xl:w-3/4">
              <div className="prose dark:prose-invert prose-headings:dark:text-white max-w-none">
                <Markdown
                  className="text-[#161716] dark:text-white"
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const language = className?.replace('language-', '') || '';
                      return !inline ? (
                        <CodePre language={language} {...props}>{String(children).replace(/\n$/, '')}</CodePre>
                      ) : (
                        <code className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-zinc-800 font-mono text-sm">
                          {children}
                        </code>
                      );
                    },
                    pre({ children }) {
                      return <div className="not-prose mt-5">{children}</div>;
                    },
                    p({ children }) {
                      if (typeof children === 'string' && isVideoUrl(children)) {
                        return (
                          <div className="my-4 flex justify-center">
                            <video
                              controls
                              className="w-full h-auto rounded-lg"
                              playsInline
                            >
                              <source src={children} type="video/mp4" />
                              Tu navegador no soporta el elemento de video.
                            </video>
                          </div>
                        );
                      }
                      return <p>{children}</p>;
                    },
                    a({ href, children }) {
                      if (isVideoUrl(href)) {
                        return (
                          <div className="my-4">
                            <video
                              controls
                              className="w-full rounded-lg"
                              playsInline
                            >
                              <source src={href} type="video/mp4" />
                              Tu navegador no soporta el elemento de video.
                            </video>
                          </div>
                        );
                      }
                      return <a href={href} className="text-blue-500 hover:underline">{children}</a>;
                    },
                    h1: CustomHeading.h1,
                    h2: CustomHeading.h2,
                    h3: CustomHeading.h3,
                    h4: CustomHeading.h4,
                    h5: CustomHeading.h5,
                    h6: CustomHeading.h6,
                    img: CustomHeading.img,
                  }}
                >
                  {article.content}
                </Markdown>
              </div>
            </div>

            <div className="w-full lg:w-1/4 hidden lg:block">
              <CustomTOC toc={fromMarkdown(article.content)} />
            </div>
          </div>
        </div>

    );
  } catch (error) {
    return (
      <div className="mt-9 text-center text-red-500">
        <p>Error: No se pudo cargar el artículo</p>
      </div>
    );
  }
}

function Metadata({ title,description }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}