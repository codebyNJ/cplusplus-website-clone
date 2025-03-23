"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Code, Terminal } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="font-mono text-xl font-bold tracking-tight">C++</span>
        </Link>
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="text-foreground/70 transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/reference" className="text-foreground/70 transition-colors hover:text-foreground">
            Reference
          </Link>
          <Link href="/articles" className="text-foreground/70 transition-colors hover:text-foreground">
            Articles
          </Link>
          <Link href="/forum" className="text-foreground/70 transition-colors hover:text-foreground">
            Forum
          </Link>
        </nav>
        <div className="flex items-center ml-auto gap-4">
          
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 px-4 border-t border-border/40">
          <nav className="flex flex-col gap-4 font-medium">
            <Link href="/" className="text-foreground/70 transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="/reference" className="text-foreground/70 transition-colors hover:text-foreground">
              Reference
            </Link>
            <Link href="/articles" className="text-foreground/70 transition-colors hover:text-foreground">
              Articles
            </Link>
            <Link href="/forum" className="text-foreground/70 transition-colors hover:text-foreground">
              Forum
            </Link>
          </nav>
          <form className="mt-4 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8 bg-background border-border/40" />
          </form>
          <Button variant="default" size="sm" className="mt-4 w-full">
            <Code className="mr-2 h-4 w-4" />
            Try Online
          </Button>
        </div>
      )}
    </header>
  )
}

