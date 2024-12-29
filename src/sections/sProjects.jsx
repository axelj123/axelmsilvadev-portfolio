"use client";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";
import CardsProjects from "../component/CardsProject";
import { fetchProjects } from "@/utils/getProjectsData";
import useSWR from "swr";

export default function Projects() {
    const { data: projects, error } = useSWR('projects', fetchProjects);

    if (error) {
        return <div>Error al cargar los proyectos.</div>;
    }

    return (
        <section className="mt-12 sm:mt-24 lg:mt-28">
            <h2 className="text-3xl font-bold">All Creative Works.</h2>
            <p className="text-black dark:text-[#8F9094] mt-2 p-4 text-sm md:text-base">
                Here's some of my projects that I have worked on.{" "}
                <Link href="/projects" className="text-green-500 font-extrabold">
                    Explore more →
                </Link>
            </p>
            <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 gap-8 mt-10">
                    {projects?.slice(0, 3).map((project) => (
                        <CardsProjects key={project.id} project={project} />
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
