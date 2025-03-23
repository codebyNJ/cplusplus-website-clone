import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FloatingTerminal } from "@/components/floating-terminal"
import { ArrowRight, BookOpen, Code, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="container relative px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              C++ The G.O.A.T
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Focused on OOP's with
              <span className="text-primary block">Best Memory Management</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
              The power of performance, the beauty of abstraction. Learn, Create and Master.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/reference">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>Comprehensive Reference</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span>Interactive Examples</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Active Community</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <FloatingTerminal />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </section>
  )
}

