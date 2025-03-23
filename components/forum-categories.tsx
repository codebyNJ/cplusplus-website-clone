import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MessageSquare, Code, BookOpen, Shield, Zap, HelpCircle } from "lucide-react"

export function ForumCategories() {
  const categories = [
    {
      title: "General Discussion",
      description: "General C++ topics and discussions",
      icon: <MessageSquare className="h-5 w-5" />,
      topics: 1245,
      posts: 5678,
    },
    {
      title: "C++ Help",
      description: "Get help with your C++ code",
      icon: <HelpCircle className="h-5 w-5" />,
      topics: 987,
      posts: 4321,
    },
    {
      title: "Best Practices",
      description: "Discussions about C++ best practices",
      icon: <Shield className="h-5 w-5" />,
      topics: 456,
      posts: 2345,
    },
    {
      title: "Performance",
      description: "Optimizing C++ code for performance",
      icon: <Zap className="h-5 w-5" />,
      topics: 321,
      posts: 1432,
    },
    {
      title: "Code Review",
      description: "Get feedback on your C++ code",
      icon: <Code className="h-5 w-5" />,
      topics: 234,
      posts: 987,
    },
    {
      title: "Learning Resources",
      description: "Share and discuss C++ learning resources",
      icon: <BookOpen className="h-5 w-5" />,
      topics: 123,
      posts: 654,
    },
  ]

  return (
    <div className="space-y-4">
      <Card className="border-border/40">
        <CardHeader className="pb-2">
          <CardTitle>Categories</CardTitle>
          <CardDescription>Browse forum categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{category.title}</div>
                  <div className="text-xs text-muted-foreground">{category.description}</div>
                </div>
                <div className="text-xs text-muted-foreground text-right">
                  <div>{category.topics} topics</div>
                  <div>{category.posts} posts</div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

