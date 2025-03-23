import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BookOpen, Users, Zap, Server, Shield } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need to master C++</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Comprehensive resources for learning and mastering C++ programming, from beginner to
            advanced levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Comprehensive Reference"
            description="Detailed documentation of C++ language features, standard library, and best practices."
          />
          <FeatureCard
            icon={<Code className="h-6 w-6" />}
            title="Interactive Examples"
            description="Try C++ code directly in your browser with our interactive code editor."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Active Community"
            description="Join discussions, ask questions, and share knowledge with other C++ developers."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Performance Tips"
            description="Learn optimization techniques to make your C++ code faster and more efficient."
          />
          <FeatureCard
            icon={<Server className="h-6 w-6" />}
            title="Modern C++ Features"
            description="Stay up-to-date with the latest C++ standards and features (C++11, C++14, C++17, C++20)."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Security Guidelines"
            description="Learn best practices for writing secure and robust C++ code."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-background/50 border-border/40 hover:border-primary/50 transition-colors group">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

