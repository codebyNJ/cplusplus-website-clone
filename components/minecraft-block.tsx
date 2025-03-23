import { cn } from "@/lib/utils"

type BlockType = "grass" | "stone" | "wood" | "dirt"

interface MinecraftBlockProps {
  type: BlockType
  size?: number
  className?: string
}

export function MinecraftBlock({ type, size = 64, className }: MinecraftBlockProps) {
  const blockColors = {
    grass: {
      top: "#7bba4d",
      side: "#8a6e45",
      bottom: "#8a6e45",
      sideTop: "#5d9c32",
    },
    stone: {
      top: "#9c9c9c",
      side: "#9c9c9c",
      bottom: "#9c9c9c",
    },
    wood: {
      top: "#a0814f",
      side: "#8f7748",
      bottom: "#a0814f",
    },
    dirt: {
      top: "#8a6e45",
      side: "#8a6e45",
      bottom: "#8a6e45",
    },
  }

  const colors = blockColors[type]
  const pixelSize = size / 16

  return (
    <div
      className={cn("relative transform-style-preserve-3d", className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transformStyle: "preserve-3d",
        transform: "rotateX(-30deg) rotateY(45deg)",
      }}
    >
      {/* Top face */}
      <div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: colors.top,
          transform: `translateZ(${size / 2}px)`,
          backgroundImage:
            type === "grass"
              ? `
            linear-gradient(45deg, ${colors.top} 25%, transparent 25%),
            linear-gradient(-45deg, ${colors.top} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${colors.top} 75%),
            linear-gradient(-45deg, transparent 75%, ${colors.top} 75%)
          `
              : `
            repeating-conic-gradient(${colors.top} 0%, ${colors.top}90 15%, ${colors.top} 30%)
          `,
          backgroundSize: `${pixelSize * 8}px ${pixelSize * 8}px`,
          backgroundPosition: `0 0, 0 ${pixelSize * 4}px, ${pixelSize * 4}px ${pixelSize * 4}px, ${pixelSize * 4}px 0px`,
          imageRendering: "pixelated",
        }}
      />

      {/* Bottom face */}
      <div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: colors.bottom,
          transform: `translateZ(-${size / 2}px) rotateX(180deg)`,
          backgroundImage: `
            repeating-conic-gradient(${colors.bottom} 0%, ${colors.bottom}90 15%, ${colors.bottom} 30%)
          `,
          backgroundSize: `${pixelSize * 8}px ${pixelSize * 8}px`,
          imageRendering: "pixelated",
        }}
      />

      {/* Front face */}
      <div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: colors.side,
          transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          backgroundImage:
            type === "grass"
              ? `
            linear-gradient(to top, ${colors.side} 70%, ${colors.sideTop} 70%)
          `
              : `
            repeating-conic-gradient(${colors.side} 0%, ${colors.side}90 15%, ${colors.side} 30%)
          `,
          backgroundSize: `${pixelSize * 8}px ${pixelSize * 8}px`,
          imageRendering: "pixelated",
        }}
      />

      {/* Back face */}
      <div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: colors.side,
          transform: `rotateX(90deg) translateZ(-${size / 2}px) rotateX(180deg)`,
          backgroundImage:
            type === "grass"
              ? `
            linear-gradient(to top, ${colors.side} 70%, ${colors.sideTop} 70%)
          `
              : `
            repeating-conic-gradient(${colors.side} 0%, ${colors.side}90 15%, ${colors.side} 30%)
          `,
          backgroundSize: `${pixelSize * 8}px ${pixelSize * 8}px`,
          imageRendering: "pixelated",
        }}
      />

      {/* Left face */}
      <div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: colors.side,
          transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          backgroundImage:
            type === "grass"
              ? `
            linear-gradient(to top, ${colors.side} 70%, ${colors.sideTop} 70%)
          `
              : `
            repeating-conic-gradient(${colors.side} 0%, ${colors.side}90 15%, ${colors.side} 30%)
          `,
          backgroundSize: `${pixelSize * 8}px ${pixelSize * 8}px`,
          imageRendering: "pixelated",
        }}
      />

      {/* Right face */}
      <div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: colors.side,
          transform: `rotateY(90deg) translateZ(-${size / 2}px) rotateY(180deg)`,
          backgroundImage:
            type === "grass"
              ? `
            linear-gradient(to top, ${colors.side} 70%, ${colors.sideTop} 70%)
          `
              : `
            repeating-conic-gradient(${colors.side} 0%, ${colors.side}90 15%, ${colors.side} 30%)
          `,
          backgroundSize: `${pixelSize * 8}px ${pixelSize * 8}px`,
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

