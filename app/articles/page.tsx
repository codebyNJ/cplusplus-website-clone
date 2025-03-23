"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticlesList } from "@/components/articles-list"
import { ArticlesFilter } from "@/components/articles-filter"
import { useEffect } from "react"

export default function Articles() {
  // Ensure normal cursor on this page
  useEffect(() => {
    document.body.classList.remove("cursor-none")
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">C++ Articles</h1>
        <ArticlesFilter />
        <ArticlesList />
      </main>
      <Footer />
    </div>
  )
}

