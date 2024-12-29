import React from 'react';
import Link from 'next/link';

const CardsArticles = ({ blog }) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="block  p-6 roun  ded-lg shadow hover:shadow-lg transition-shadow"
    >
      <div className="text-start group flex flex-col space-y-2">
        {/* Fecha y lectura */}
        <p className="text-gray-400 text-sm mb-2">
          {blog.date} {blog.readTime && <span className="ml-2">{blog.readTime} read</span>}
        </p>
        {/* Título */}
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white ">
          {blog.title}
        </h1>
        {/* Descripción */}
        <p className="text-[#8c8c8c] text-sm md:text-base">
          {blog.description}
        </p>
        {/* Enlace de "Learn more" */}
        <span className="text-green-600 font-semibold mt-3 ">
          Learn more →
        </span>
      </div>
    </Link>
  );
};

export default CardsArticles;
