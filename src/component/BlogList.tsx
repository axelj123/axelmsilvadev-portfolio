'use client'

import { useState } from 'react'
import SearchInput from './SearchInput'
import CardsArticles from "./CardsArticles"

interface Blog {
  id: string
  title: string
  description: string

}

interface BlogListProps {
  initialBlogs: Blog[]
}

export default function BlogList({ initialBlogs }: BlogListProps) {
  const [filteredBlogs, setFilteredBlogs] = useState(initialBlogs)

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredBlogs(initialBlogs)
      return
    }

    const searchQuery = query.toLowerCase()
    const filtered = initialBlogs.filter(Blog => 
      Blog.title.toLowerCase().includes(searchQuery) ||
      Blog.description.toLowerCase().includes(searchQuery) 
    )
    
    setFilteredBlogs(filtered)
  }

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <div className="mt-8 space-y-8">
        {filteredBlogs.map((Blog) => (
          <CardsArticles
            key={Blog.id}
            blog={Blog}
          />
        ))}
      </div>
    </>
  )
}