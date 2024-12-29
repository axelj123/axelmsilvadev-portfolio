"use client";

import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";
import CardsArticles from "@/component/CardsArticles";
import useSWR from "swr";
import { fetchBlogs } from "@/utils/getBlogsData";

// `fetcher` utiliza la función ya definida en `fetchBlogs`
const fetcher = fetchBlogs;

export default function Articles() {
  // Utilizamos SWR para gestionar el estado de los datos
  const { data: blogs, error } = useSWR('blogs', fetcher);


  return (
    <section className="p-4">
      <div className="mt-12 sm:mt-24 lg:mt-28">
        <div className="text-start row justify-between flex items-center">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link href="/blog" className="text-green-500 font-extrabold">
            Explore more →
          </Link>
        </div>
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
            {blogs?.slice(0, 3).map((blog) => (
              <CardsArticles key={blog.id} blog={blog} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
