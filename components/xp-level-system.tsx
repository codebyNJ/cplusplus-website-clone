"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MinecraftProgressBar } from "@/components/minecraft-progress-bar"
import { Trophy, Award, Star, Zap } from "lucide-react"

export function XpLevelSystem() {
  const [level, setLevel] = useState(1)
  const [xp, setXp] = useState(0)
  const [totalXp, setTotalXp] = useState(0)
  const [showLevelUp, setShowLevelUp] = useState(false)

  // Calculate XP needed for next level (increases with each level)
  const xpForNextLevel = Math.floor(100 * Math.pow(1.2, level - 1))

  // Add XP when completing tasks
  const addXp = (amount: number) => {
    const newXp = xp + amount
    const newTotalXp = totalXp + amount
    setTotalXp(newTotalXp)

    if (newXp >= xpForNextLevel) {
      // Level up
      setLevel((prev) => prev + 1)
      setXp(newXp - xpForNextLevel)
      setShowLevelUp(true)

      // Hide level up animation after 3 seconds
      setTimeout(() => {
        setShowLevelUp(false)
      }, 3000)
    } else {
      setXp(newXp)
    }
  }

  // Achievements based on level
  const achievements = [
    { level: 1, name: "C++ Beginner", icon: <Trophy className="h-4 w-4" />, unlocked: level >= 1 },
    { level: 3, name: "Code Explorer", icon: <Award className="h-4 w-4" />, unlocked: level >= 3 },
    { level: 5, name: "Syntax Master", icon: <Star className="h-4 w-4" />, unlocked: level >= 5 },
    { level: 10, name: "C++ Wizard", icon: <Zap className="h-4 w-4" />, unlocked: level >= 10 },
  ]

  return (
    <div className="relative border border-border/40 rounded-lg overflow-hidden bg-background/95 backdrop-blur p-4">
      {showLevelUp && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary animate-bounce">Level Up!</div>
            <div className="text-2xl mt-2">You are now level {level}</div>
            <div className="mt-4 text-muted-foreground">New achievements unlocked</div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">C++ Mastery Level</h3>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {level}
          </div>
        </div>
      </div>

      <MinecraftProgressBar
        value={(xp / xpForNextLevel) * 100}
        label={`XP Progress: ${xp}/${xpForNextLevel}`}
        color="green"
      />

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => addXp(10)}
          className="border-primary/30 hover:border-primary/60"
        >
          Complete Quiz (+10 XP)
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => addXp(25)}
          className="border-primary/30 hover:border-primary/60"
        >
          Solve Challenge (+25 XP)
        </Button>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">Achievements</h4>
        <div className="grid grid-cols-2 gap-2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-2 rounded-md border ${
                achievement.unlocked ? "border-primary/30 bg-primary/5" : "border-border/40 bg-muted/30 opacity-50"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  achievement.unlocked ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                }`}
              >
                {achievement.icon}
              </div>
              <div>
                <div className="text-xs font-medium">{achievement.name}</div>
                <div className="text-xs text-muted-foreground">Level {achievement.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-center text-muted-foreground">
        Total XP: {totalXp} • Keep learning to level up!
      </div>
    </div>
  )
}

