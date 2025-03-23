import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ForumTopics() {
  const topics = [
    {
      title: "How to implement move semantics correctly?",
      category: "C++11",
      author: "JaneDoe",
      authorInitials: "JD",
      replies: 12,
      views: 345,
      lastReply: "2 hours ago",
      isHot: true,
      isPinned: false,
    },
    {
      title: "Understanding C++20 concepts",
      category: "C++20",
      author: "JohnSmith",
      authorInitials: "JS",
      replies: 8,
      views: 210,
      lastReply: "5 hours ago",
      isHot: false,
      isPinned: true,
    },
    {
      title: "Best practices for memory management",
      category: "Best Practices",
      author: "AlexJohnson",
      authorInitials: "AJ",
      replies: 15,
      views: 420,
      lastReply: "1 day ago",
      isHot: true,
      isPinned: false,
    },
    {
      title: "How to optimize compile times in large projects?",
      category: "Performance",
      author: "MichaelChen",
      authorInitials: "MC",
      replies: 7,
      views: 180,
      lastReply: "2 days ago",
      isHot: false,
      isPinned: false,
    },
    {
      title: "Implementing a thread-safe singleton",
      category: "Design Patterns",
      author: "SarahWilliams",
      authorInitials: "SW",
      replies: 10,
      views: 250,
      lastReply: "3 days ago",
      isHot: false,
      isPinned: false,
    },
  ]

  return (
    <Card className="border-border/40">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Recent Topics</CardTitle>
            <CardDescription>Latest discussions in the forum</CardDescription>
          </div>
          <Link href="#" className="text-sm text-primary hover:underline">
            New Topic
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-3 rounded-md hover:bg-muted transition-colors border border-border/40"
            >
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={topic.author} />
                <AvatarFallback>{topic.authorInitials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {topic.isPinned && (
                    <Badge variant="outline" className="text-xs px-1 py-0 h-5">
                      Pinned
                    </Badge>
                  )}
                  {topic.isHot && (
                    <Badge
                      variant="secondary"
                      className="text-xs px-1 py-0 h-5 bg-red-500/10 text-red-500 hover:bg-red-500/20"
                    >
                      Hot
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs px-1 py-0 h-5">
                    {topic.category}
                  </Badge>
                </div>
                <Link
                  href="#"
                  className="font-medium text-foreground hover:text-primary transition-colors line-clamp-1"
                >
                  {topic.title}
                </Link>
                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                  <div>By {topic.author}</div>
                  <div>{topic.replies} replies</div>
                  <div>{topic.views} views</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">{topic.lastReply}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

