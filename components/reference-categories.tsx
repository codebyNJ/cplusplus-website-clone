import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function ReferenceCategories() {
  return (
    <Accordion type="multiple" className="w-full" defaultValue={["language", "stdlib"]}>
      <AccordionItem value="language" className="border-border/40">
        <AccordionTrigger className="text-lg font-medium">Language</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pl-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Basic Concepts
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Keywords
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Preprocessor
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Expressions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Declarations
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Functions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Classes
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Templates
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Exceptions
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="stdlib" className="border-border/40">
        <AccordionTrigger className="text-lg font-medium">Standard Library</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pl-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Containers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Algorithms
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Iterators
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Strings
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                I/O Streams
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Memory
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Utilities
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Concurrency
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Numerics
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cpp11" className="border-border/40">
        <AccordionTrigger className="text-lg font-medium">C++11</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pl-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Auto Type
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Lambda Expressions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Range-based For Loop
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Smart Pointers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Move Semantics
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cpp14" className="border-border/40">
        <AccordionTrigger className="text-lg font-medium">C++14</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pl-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Generic Lambdas
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Return Type Deduction
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Variable Templates
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cpp17" className="border-border/40">
        <AccordionTrigger className="text-lg font-medium">C++17</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pl-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Structured Bindings
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                if constexpr
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Fold Expressions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                std::optional
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                std::variant
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                std::any
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cpp20" className="border-border/40">
        <AccordionTrigger className="text-lg font-medium">C++20</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pl-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Concepts
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Ranges
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Coroutines
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Modules
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Three-way Comparison
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

