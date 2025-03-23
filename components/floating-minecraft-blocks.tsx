"use client"

import { useEffect, useRef, useState } from "react"
import { MinecraftBlock } from "@/components/minecraft-block"

interface Block {
  id: number
  type: "grass" | "stone" | "wood" | "dirt"
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  direction: number
}

export function FloatingMinecraftBlocks() {
  const [blocks, setBlocks] = useState<Block[]>([])
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    // Create initial blocks
    const initialBlocks: Block[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: ["grass", "stone", "wood", "dirt"][Math.floor(Math.random() * 4)] as any,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 20 + Math.random() * 30,
      rotation: Math.random() * 360,
      speed: 0.5 + Math.random() * 1.5,
      direction: Math.random() * Math.PI * 2,
    }))

    setBlocks(initialBlocks)

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const deltaTime = time - lastTimeRef.current
      lastTimeRef.current = time

      setBlocks((prevBlocks) =>
        prevBlocks.map((block) => {
          // Update position
          let newX = block.x + Math.cos(block.direction) * block.speed * (deltaTime / 16)
          let newY = block.y + Math.sin(block.direction) * block.speed * (deltaTime / 16)
          let newDirection = block.direction

          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) {
            newDirection = Math.PI - newDirection
            newX = Math.max(0, Math.min(newX, window.innerWidth))
          }

          if (newY < 0 || newY > window.innerHeight) {
            newDirection = -newDirection
            newY = Math.max(0, Math.min(newY, window.innerHeight))
          }

          // Randomly change direction occasionally
          if (Math.random() < 0.005) {
            newDirection = Math.random() * Math.PI * 2
          }

          return {
            ...block,
            x: newX,
            y: newY,
            rotation: (block.rotation + 0.2 * (deltaTime / 16)) % 360,
            direction: newDirection,
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      setBlocks((prevBlocks) =>
        prevBlocks.map((block) => ({
          ...block,
          x: Math.min(block.x, window.innerWidth),
          y: Math.min(block.y, window.innerHeight),
        })),
      )
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300"
          style={{
            left: `${block.x}px`,
            top: `${block.y}px`,
            transform: `rotate(${block.rotation}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <MinecraftBlock type={block.type} size={block.size} />
        </div>
      ))}
    </div>
  )
}

