"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Copy, Save, Trash } from "lucide-react"
import { MinecraftBlock } from "@/components/minecraft-block"

export function CodePlayground() {
  const [code, setCode] = useState(`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`)
  const [output, setOutput] = useState("")
  const [isCompiling, setIsCompiling] = useState(false)
  const [savedSnippets, setSavedSnippets] = useState<{ id: string; name: string; code: string }[]>([
    {
      id: "1",
      name: "Hello World",
      code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
    },
    {
      id: "2",
      name: "Fibonacci",
      code: `#include <iostream>\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    int n = 10;\n    std::cout << "Fibonacci(" << n << ") = " << fibonacci(n) << std::endl;\n    return 0;\n}`,
    },
  ])
  const [blockRotation, setBlockRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const runCode = () => {
    setIsCompiling(true)
    setOutput("")

    // Simulate compilation and execution
    setTimeout(() => {
      setIsCompiling(false)

      // Simple output simulation based on code content
      if (code.includes("Hello, World!")) {
        setOutput("Hello, World!")
      } else if (code.includes("fibonacci")) {
        setOutput("Fibonacci(10) = 55")
      } else if (code.includes("std::cout")) {
        setOutput("Program executed successfully!")
      } else if (code.trim() === "") {
        setOutput("Error: Empty code")
      } else {
        setOutput("Compilation successful, but no output generated.")
      }
    }, 1500)
  }

  const saveSnippet = () => {
    const snippetName = prompt("Enter a name for this code snippet:")
    if (snippetName) {
      setSavedSnippets((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: snippetName,
          code,
        },
      ])
    }
  }

  const loadSnippet = (snippetCode: string) => {
    setCode(snippetCode)
  }

  const deleteSnippet = (id: string) => {
    setSavedSnippets((prev) => prev.filter((snippet) => snippet.id !== id))
  }

  return (
    <div className="border border-border/40 rounded-lg overflow-hidden bg-background/95 backdrop-blur">
      <div className="flex items-center justify-between p-4 border-b border-border/40">
        <h3 className="text-lg font-bold flex items-center">
          <div className="mr-3 transform" style={{ transform: `rotateY(${blockRotation}deg)` }}>
            <MinecraftBlock type="grass" size={24} />
          </div>
          Interactive C++ Playground
        </h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setCode("")} className="flex items-center gap-1">
            <Trash className="h-4 w-4" />
            <span className="hidden sm:inline">Clear</span>
          </Button>
          <Button variant="outline" size="sm" onClick={saveSnippet} className="flex items-center gap-1">
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">Save</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigator.clipboard.writeText(code)}
            className="flex items-center gap-1"
          >
            <Copy className="h-4 w-4" />
            <span className="hidden sm:inline">Copy</span>
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={runCode}
            disabled={isCompiling}
            className="flex items-center gap-1"
          >
            <Play className="h-4 w-4" />
            <span>{isCompiling ? "Compiling..." : "Run"}</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="md:col-span-2 border-r border-border/40">
          <div className="relative h-[300px]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-4 bg-black/90 text-green-400 font-mono text-sm resize-none focus:outline-none"
              spellCheck="false"
            />
            <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-black/50 px-2 py-1 rounded">
              C++20
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="output">
            <TabsList className="w-full rounded-none border-b border-border/40">
              <TabsTrigger value="output" className="flex-1">
                Output
              </TabsTrigger>
              <TabsTrigger value="snippets" className="flex-1">
                Snippets
              </TabsTrigger>
            </TabsList>
            <TabsContent value="output" className="p-0">
              <div className="h-[300px] overflow-auto p-4 bg-black/80 text-green-400 font-mono text-sm">
                {isCompiling ? (
                  <div className="animate-pulse">Compiling...</div>
                ) : output ? (
                  <pre>{output}</pre>
                ) : (
                  <div className="text-muted-foreground">Run your code to see output here</div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="snippets" className="p-0">
              <div className="h-[300px] overflow-auto">
                {savedSnippets.map((snippet) => (
                  <div key={snippet.id} className="p-3 border-b border-border/40 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{snippet.name}</h4>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => loadSnippet(snippet.code)}
                          className="h-7 px-2"
                        >
                          Load
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteSnippet(snippet.id)}
                          className="h-7 px-2 text-destructive hover:text-destructive"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-1 font-mono">
                      {snippet.code.split("\n")[0]}
                    </div>
                  </div>
                ))}
                {savedSnippets.length === 0 && (
                  <div className="p-4 text-center text-muted-foreground">
                    No saved snippets yet. Save your code to see it here.
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

