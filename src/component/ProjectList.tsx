'use client'

import { useState } from 'react'
import SearchInput from './SearchInput'
import CardsProjects from "./CardsProject"

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
}

interface ProjectListProps {
  initialProjects: Project[]
}

export default function ProjectList({ initialProjects }: ProjectListProps) {
  const [filteredProjects, setFilteredProjects] = useState(initialProjects)

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredProjects(initialProjects)
      return
    }

    const searchQuery = query.toLowerCase()
    const filtered = initialProjects.filter(project => 
      project.title.toLowerCase().includes(searchQuery) ||
      project.description.toLowerCase().includes(searchQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery))
    )
    
    setFilteredProjects(filtered)
  }

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 gap-8 mt-10">
        {filteredProjects.map((project) => (
          <CardsProjects
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </>
  )
}