// app/blog/BlogClient.js
'use client';

import { useState, useCallback, useMemo } from 'react';
import { format } from 'date-fns';

const SearchIcon = () => (
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    width="20"
    height="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 15.75L19.5 19.5M10.5 4.5a6 6 0 110 12 6 6 0 010-12z"
    />
  </svg>
);

export default function BlogClient({ initialPosts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredPosts = useMemo(() => {
    if (!initialPosts) return [];
    if (!searchQuery) return initialPosts;

    const query = searchQuery.toLowerCase();
    return initialPosts.filter((post) => {
      const title = post.node.title.toLowerCase();
      const body = post.node.body.toLowerCase();
      return title.includes(query) || body.includes(query);
    });
  }, [initialPosts, searchQuery]);

  return (
    <div className="mt-9 text-start p-4">
      <div className="pb-8">
        <h1 className="text-6xl font-bold">Blog</h1>
        <p className="mt-9 text-xl">
          Este es el lugar donde comparto mis escritos sobre programación, tutoriales y mis experiencias.
        </p>
      </div>

      <div className="border-b-2 border-[#2a2a2a] pb-8">
        <div className="mt-5 relative">
          <input
            className="rounded-md border-2 dark:bg-black border-[#2a2a2a] p-2 pl-10 w-full max-w-md"
            type="text"
            placeholder="Buscar artículos"
            onChange={handleSearch}
            value={searchQuery}
          />
          <SearchIcon />
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.node.id} className="border-b border-[#2a2a2a] pb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h2 className="text-2xl font-bold hover:text-blue-500 transition-colors">
                  <a href={post.node.url}>{post.node.title}</a>
                </h2>
                <time className="text-sm text-gray-500">
                  {format(new Date(post.node.createdAt), 'MMMM d, yyyy')}
                </time>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.node.body.slice(0, 200)}...
              </p>
              <a
                href={post.node.url}
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                Leer más →
              </a>
            </article>
          ))
        ) : (
          <p>No se encontraron artículos.</p>
        )}
      </div>
    </div>
  );
}