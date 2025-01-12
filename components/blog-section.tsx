import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding Financial Markets",
    excerpt: "An in-depth look at how financial markets operate and their impact on the global economy.",
    author: "Jane Doe",
    date: "2024-01-15",
    imageUrl: "/behance/design.webp?height=200&width=300",
  },
  {
    id: 2,
    title: "Investing Strategies for Beginners",
    excerpt: "Learn the basics of investing and how to build a strong portfolio from the ground up.",
    author: "John Smith",
    date: "2024-01-18",
    imageUrl: "/behance/shape.jpg?height=200&width=300",
  },
  {
    id: 3,
    title: "The Future of Cryptocurrency",
    excerpt: "Exploring the potential impact of cryptocurrency on traditional financial systems.",
    author: "Alice Johnson",
    date: "2024-01-22",
    imageUrl: "/behance/product.png?height=200&width=300",
  },
  {
    id: 4,
    title: "Sustainable Finance: A Growing Trend",
    excerpt: "How environmental, social, and governance factors are shaping the future of finance.",
    author: "Bob Williams",
    date: "2024-01-25",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Personal Finance Tips for Millennials",
    excerpt: "Practical advice for managing money, saving, and investing in your 20s and 30s.",
    author: "Emma Brown",
    date: "2024-01-28",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "The Role of AI in Financial Services",
    excerpt: "How artificial intelligence is revolutionizing banking, investing, and financial analysis.",
    author: "David Lee",
    date: "2024-01-31",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#F0FFF4] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004D2C] mb-8 text-center">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white border-[#E6F7ED] shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 text-[#004D2C]">{post.title}</CardTitle>
                <p className="text-sm text-[#2C7A51] mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="text-xs text-[#5B9E7A]">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Button variant="ghost" className="text-[#004D2C] hover:text-[#003D22] hover:bg-[#E6F7ED] p-0">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="text-[#004D2C] hover:text-[#003D22] hover:bg-[#E6F7ED]" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-[#9FE870] text-[#004D2C] hover:bg-[#8FD860]">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-[#004D2C] hover:text-[#003D22] hover:bg-[#E6F7ED]">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-[#004D2C] hover:text-[#003D22] hover:bg-[#E6F7ED]">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="text-[#004D2C]" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="text-[#004D2C] hover:text-[#003D22] hover:bg-[#E6F7ED]" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}

