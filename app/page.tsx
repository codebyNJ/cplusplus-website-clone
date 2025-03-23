"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { LatestArticles } from "@/components/latest-articles"
import { CommunitySection } from "@/components/community-section"
import { CodePlayground } from "@/components/code-playground"
import { XpLevelSystem } from "@/components/xp-level-system"
import { CustomCursor } from "@/components/custom-cursor"
import { useEffect } from "react"

export default function Home() {
  // Apply cursor-none class only to the home page
  useEffect(() => {
    document.body.classList.add("cursor-none")

    return () => {
      document.body.classList.remove("cursor-none")
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CodePlayground />
              </div>
              <div>
                <XpLevelSystem />
              </div>
            </div>
          </div>
        </section>
        <FeaturesSection />
        <LatestArticles />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}

