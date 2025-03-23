"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleMouseEnter = () => setHidden(false)
    const handleMouseLeave = () => setHidden(true)

    const handleLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setLinkHovered(true)
      } else {
        setLinkHovered(false)
      }
    }

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleLinkHoverStart)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleLinkHoverStart)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference transition-transform duration-150",
        clicked && "scale-75",
        linkHovered && "scale-150",
        hidden && "opacity-0",
        !hidden && "opacity-100",
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${clicked ? "scale(0.75)" : linkHovered ? "scale(1.5)" : "scale(1)"}`,
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-white"></div>
        {linkHovered && <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse"></div>}
      </div>
    </div>
  )
}

