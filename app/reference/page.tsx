"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ReferenceContent } from "@/components/reference-content"
import { ReferenceSearch } from "@/components/reference-search"
import { ReferenceCategories } from "@/components/reference-categories"
import { useEffect } from "react"

export default function Reference() {
  // Ensure normal cursor on this page
  useEffect(() => {
    document.body.classList.remove("cursor-none")
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">C++ Reference</h1>
        <ReferenceSearch />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <ReferenceCategories />
          <div className="lg:col-span-3">
            <ReferenceContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

