import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function ForumSearch() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input type="search" placeholder="Search forum topics..." className="pl-10 bg-background" />
      <Button className="absolute right-1 top-1 h-8" size="sm">
        Search
      </Button>
    </div>
  )
}

