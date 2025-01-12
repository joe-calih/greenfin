import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Daily is the tool every SaaS founder has been for. It allows SaaS companies to grow without dilution by financing their SaaS receivables.",
    author: "Orlando Digas",
    role: "Marketing, Layers"
  },
  {
    quote: "Daily is the tool every SaaS founder has been for. It allows SaaS companies to grow without dilution by financing their SaaS receivables.",
    author: "Orlando Digas",
    role: "Marketing, Layers"
  },
  {
    quote: "Daily is the tool every SaaS founder has been for. It allows SaaS companies to grow without dilution by financing their SaaS receivables.",
    author: "Orlando Digas",
    role: "Marketing, Layers"
  },
  {
    quote: "Daily is the tool every SaaS founder has been for. It allows SaaS companies to grow without dilution by financing their SaaS receivables.",
    author: "Orlando Digas",
    role: "Marketing, Layers"
  }
]

export default function Testimonials() {
  return (
    <section 
      className="w-full bg-[#004D2C] py-16 md:py-24"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#A5F13C] text-sm uppercase tracking-wider">
            Feedback
          </span>
          <h2 
            className="text-white text-3xl md:text-4xl font-bold mt-2"
            itemProp="name"
          >
            Our Happy Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-[#254338] border-none p-6"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#9FE870] text-[#9FE870]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote 
                className="text-white mb-6"
                itemProp="reviewBody"
              >
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a5451e211998531.672d0926cbh9e0-4IfJRZHN9gDGjjqVsKGUUfDMH0fnl6.png"
                  alt=""
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <div>
                  <div 
                    className="text-white font-medium"
                    itemProp="author"
                  >
                    {testimonial.author}
                  </div>
                  <div 
                    className="text-white/60 text-sm"
                    itemProp="authorTitle"
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

