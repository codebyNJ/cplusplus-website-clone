"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ForumCategories } from "@/components/forum-categories"
import { ForumTopics } from "@/components/forum-topics"
import { ForumSearch } from "@/components/forum-search"
import { useEffect } from "react"

export default function Forum() {
  // Ensure normal cursor on this page
  useEffect(() => {
    document.body.classList.remove("cursor-none")
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">C++ Forum</h1>
        <ForumSearch />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <ForumCategories />
          <div className="lg:col-span-3">
            <ForumTopics />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

