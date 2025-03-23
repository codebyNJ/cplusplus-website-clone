import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MessageSquare, Users, Github, ArrowRight } from "lucide-react"
import { MinecraftBlock } from "@/components/minecraft-block"

export function CommunitySection() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute -left-20 top-20 opacity-20">
        <MinecraftBlock type="grass" size={100} />
      </div>
      <div className="absolute -right-20 bottom-20 opacity-20">
        <MinecraftBlock type="stone" size={80} />
      </div>

      <div className="container px-4 relative">
        <div className="text-center mb-16 max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join Our C++ Community</h2>
          <p className="text-muted-foreground text-lg">
            Connect with other C++ developers, share knowledge, ask questions, and collaborate on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-background/50 border-border/40 hover:border-primary/50 transition-colors group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Forum Discussions</h3>
              <p className="text-muted-foreground mb-4">
                Ask questions, share your knowledge, and discuss C++ topics with developers from around the world.
              </p>
              <Button variant="outline" className="mt-auto" asChild>
                <Link href="/forum">
                  Join Discussions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-border/40 hover:border-primary/50 transition-colors group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discord Community</h3>
              <p className="text-muted-foreground mb-4">
                Join our Discord server for real-time discussions, code reviews, and collaboration with other C++
                enthusiasts.
              </p>
              <Button variant="outline" className="mt-auto" asChild>
                <Link href="#">
                  Join Discord <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-border/40 hover:border-primary/50 transition-colors group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Open Source Projects</h3>
              <p className="text-muted-foreground mb-4">
                Contribute to our open source C++ projects, share your code, and collaborate with other developers.
              </p>
              <Button variant="outline" className="mt-auto" asChild>
                <Link href="#">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

