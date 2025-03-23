"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function FloatingTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    "#include <iostream>",
    "",
    "int main() {",
    '    std::cout << "Hello, World!" << std::endl;',
    "    return 0;",
    "}",
  ]

  useEffect(() => {
    setIsVisible(true)

    const typingInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < codeLines.length - 1) {
          return prev + 1
        }
        clearInterval(typingInterval)
        return prev
      })
    }, 500)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!terminalRef.current) return

      const rect = terminalRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const moveX = (e.clientX - centerX) / 50
      const moveY = (e.clientY - centerY) / 50

      terminalRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${-moveY}deg) rotateY(${moveX}deg)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={terminalRef}
      className={cn(
        "relative w-full max-w-[500px] mx-auto aspect-[4/3] bg-black/80 rounded-lg border border-border/40 shadow-2xl transition-all duration-700 transform perspective-1000",
        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/20 before:to-purple-500/20 before:opacity-50 before:blur-xl before:z-[-1]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/90 rounded-t-lg border-b border-border/40 flex items-center px-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono">main.cpp</div>
      </div>
      <div className="pt-8 p-4 h-full font-mono text-sm text-green-400 overflow-hidden">
        <div className="animate-pulse absolute top-10 right-4 text-xs text-muted-foreground">C++ 20</div>
        {codeLines.map((line, index) => (
          <div
            key={index}
            className={cn(
              "transition-all duration-300 flex",
              index <= currentLine ? "opacity-100" : "opacity-0",
              index === currentLine && "animate-typing-cursor",
            )}
          >
            <span className="w-6 text-muted-foreground">{index + 1}</span>
            <span className="flex-1">{line}</span>
          </div>
        ))}

        {currentLine === codeLines.length - 1 && (
          <div className="mt-4 border-t border-border/40 pt-4 text-white">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">$</span>
              <span className="animate-typing">g++ -std=c++20 main.cpp -o hello</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">$</span>
              <span className="animate-typing animation-delay-1000">./hello</span>
            </div>
            <div className="text-white mt-2 animate-fade-in animation-delay-2000">Hello, World!</div>
          </div>
        )}
      </div>

      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none" />
    </div>
  )
}

