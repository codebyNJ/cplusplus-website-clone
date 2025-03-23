import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ArticlesList() {
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
    {
      title: "Optimizing C++ Compile Times",
      description: "Techniques to reduce compilation times in large C++ projects.",
      date: "Dec 5, 2022",
      category: "Performance",
      readTime: "15 min read",
      author: "Michael Chen",
    },
    {
      title: "Modern C++ Design Patterns",
      description: "Learn about design patterns that work well with modern C++ features.",
      date: "Nov 20, 2022",
      category: "Design Patterns",
      readTime: "20 min read",
      author: "Sarah Williams",
    },
    {
      title: "Effective Use of Smart Pointers",
      description: "How to use std::unique_ptr, std::shared_ptr, and std::weak_ptr effectively.",
      date: "Oct 15, 2022",
      category: "Memory Management",
      readTime: "12 min read",
      author: "David Brown",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {articles.map((article, index) => (
        <Card key={index} className="bg-background border-border/40 hover:border-primary/50 transition-colors group">
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
  )
}

