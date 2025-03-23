import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink } from "lucide-react"

export function ReferenceContent() {
  return (
    <div className="space-y-8">
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle>std::vector</CardTitle>
          <CardDescription>A sequence container that encapsulates dynamic size arrays.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="methods">Methods</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <p>
                The <code>std::vector</code> is a sequence container that encapsulates dynamic size arrays. The elements
                are stored contiguously, which means that elements can be accessed not only through iterators, but also
                using offsets to regular pointers to elements.
              </p>
              <h3 className="text-lg font-semibold mt-4">Template Parameters</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <code>T</code> - The type of the elements.
                </li>
                <li>
                  <code>Allocator</code> - Type of the allocator object used to define the storage allocation model.
                </li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Time Complexity</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Random access - constant O(1)</li>
                <li>Insertion or removal of elements at the end - amortized constant O(1)</li>
                <li>Insertion or removal of elements - linear O(n)</li>
              </ul>
            </TabsContent>
            <TabsContent value="methods" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Element Access</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <code>at()</code>
                    </li>
                    <li>
                      <code>operator[]</code>
                    </li>
                    <li>
                      <code>front()</code>
                    </li>
                    <li>
                      <code>back()</code>
                    </li>
                    <li>
                      <code>data()</code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Modifiers</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <code>push_back()</code>
                    </li>
                    <li>
                      <code>pop_back()</code>
                    </li>
                    <li>
                      <code>insert()</code>
                    </li>
                    <li>
                      <code>erase()</code>
                    </li>
                    <li>
                      <code>swap()</code>
                    </li>
                    <li>
                      <code>clear()</code>
                    </li>
                    <li>
                      <code>emplace()</code>
                    </li>
                    <li>
                      <code>emplace_back()</code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Capacity</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <code>empty()</code>
                    </li>
                    <li>
                      <code>size()</code>
                    </li>
                    <li>
                      <code>max_size()</code>
                    </li>
                    <li>
                      <code>reserve()</code>
                    </li>
                    <li>
                      <code>capacity()</code>
                    </li>
                    <li>
                      <code>shrink_to_fit()</code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Iterators</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <code>begin()</code>, <code>cbegin()</code>
                    </li>
                    <li>
                      <code>end()</code>, <code>cend()</code>
                    </li>
                    <li>
                      <code>rbegin()</code>, <code>crbegin()</code>
                    </li>
                    <li>
                      <code>rend()</code>, <code>crend()</code>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples" className="space-y-4">
              <div className="relative">
                <pre className="p-4 rounded-lg bg-black/90 text-green-400 font-mono text-sm overflow-x-auto">
                  {`#include <iostream>
#include <vector>

int main() {
    // Create a vector of integers
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Add elements to the end
    numbers.push_back(6);
    numbers.push_back(7);
    
    // Iterate through the vector
    std::cout << "Vector contents: ";
    for (const auto& num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Access elements
    std::cout << "First element: " << numbers.front() << std::endl;
    std::cout << "Last element: " << numbers.back() << std::endl;
    std::cout << "Element at index 2: " << numbers[2] << std::endl;
    
    // Size and capacity
    std::cout << "Size: " << numbers.size() << std::endl;
    std::cout << "Capacity: " << numbers.capacity() << std::endl;
    
    // Remove the last element
    numbers.pop_back();
    
    // Insert an element at a specific position
    numbers.insert(numbers.begin() + 2, 10);
    
    // Print the modified vector
    std::cout << "Modified vector: ";
    for (const auto& num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}`}
                </pre>
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy code</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open in editor</span>
                  </Button>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                <h3 className="text-lg font-semibold mb-2">Output:</h3>
                <pre className="font-mono text-sm">
                  {`Vector contents: 1 2 3 4 5 6 7 
First element: 1
Last element: 7
Element at index 2: 3
Size: 7
Capacity: 10
Modified vector: 1 2 10 3 4 5 6`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

