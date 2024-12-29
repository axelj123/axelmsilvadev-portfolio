// components/SearchInput.tsx
'use client'

import { useState } from 'react'

interface SearchInputProps {
  onSearch: (query: string) => void
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="border-b dark:border-[#2a2a2a] border-[#ccc8c8] pb-8">
      <div className="mt-5 relative">
        <input
          className="text-sm rounded-md text-[#8c8c8c] border bg-white dark:bg-black dark:border-[#2a2a2a] border-[#ccc8c8] p-2 pl-10 w-auto"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search "
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8c8c8c]"
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
      </div>
    </div>
  )
}