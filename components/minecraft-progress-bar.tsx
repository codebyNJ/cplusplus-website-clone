"use client"

import { useState, useEffect } from "react"

interface MinecraftProgressBarProps {
  value?: number
  max?: number
  label?: string
  autoIncrement?: boolean
  color?: "green" | "blue" | "red" | "yellow"
}

export function MinecraftProgressBar({
  value = 0,
  max = 100,
  label = "Progress",
  autoIncrement = false,
  color = "green",
}: MinecraftProgressBarProps) {
  const [progress, setProgress] = useState(value)

  useEffect(() => {
    if (!autoIncrement) {
      setProgress(value)
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= max) {
          clearInterval(interval)
          return max
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [value, max, autoIncrement])

  const getColorClass = () => {
    switch (color) {
      case "green":
        return "bg-primary"
      case "blue":
        return "bg-blue-500"
      case "red":
        return "bg-red-500"
      case "yellow":
        return "bg-yellow-500"
      default:
        return "bg-primary"
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">{label}</div>
        <div className="text-sm text-muted-foreground">{Math.round(progress)}%</div>
      </div>
      <div className="relative h-4 w-full overflow-hidden rounded-sm bg-secondary">
        <div
          className={`h-full transition-all duration-300 ${getColorClass()}`}
          style={{
            width: `${(progress / max) * 100}%`,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
            backgroundSize: "16px 16px",
            animation: "progress-animation 1s linear infinite",
          }}
        />
        <div className="absolute inset-0 border-2 border-black/10 rounded-sm pointer-events-none" />
      </div>
    </div>
  )
}

