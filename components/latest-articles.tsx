import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LatestArticles() {
  const articles = [
    {
      title: "Understanding Move Semantics in Modern C++",
      description: "Learn how move semantics can significantly improve the performance of your C++ applications.",
      date: "Mar 15, 2023",
      category: "Performance",
      readTime: "8 min read",
      author: "Jane Smith",
    },
    {
      title: "C++20 Concepts: A Complete Guide",
      description: "Explore how concepts in C++20 can help you write more robust and maintainable template code.",
      date: "Feb 28, 2023",
      category: "C++20",
      readTime: "12 min read",
      author: "John Doe",
    },
    {
      title: "Memory Management Best Practices",
      description: "Avoid common pitfalls and learn best practices for memory management in C++.",
      date: "Jan 10, 2023",
      category: "Best Practices",
      readTime: "10 min read",
      author: "Alex Johnson",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Latest Articles</h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              Stay up-to-date with the latest C++ trends, techniques, and best practices.
            </p>
          </div>
          <Button variant="outline" size="lg" className="mt-4 md:mt-0" asChild>
            <Link href="/articles">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="bg-background border-border/40 hover:border-primary/50 transition-colors group"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="mb-2">
                    {article.category}
                  </Badge>
                  <div className="text-xs text-muted-foreground">{article.date}</div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[120px] rounded-md bg-muted/50 flex items-center justify-center text-muted-foreground">
                  Article Preview Image
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <div>By {article.author}</div>
                <div>{article.readTime}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

