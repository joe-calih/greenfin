import Image from "next/image"
import {Link2, MessageSquare, Moon, Play, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import BlogSection from "@/components/blog-section"
import PricingSection from "@/components/pricing-section"
import Testimonials from "@/components/testimonials (1)"
import FAQSection from "@/components/faq-section"
import SeoSection from "@/components/seo-section"
import Header from "@/components/Header"


export default function LandingPage() {
  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Greenfin",
            "description": "Create stunning financial business websites",
            "url": "https://Greenfin.com",
            "potentialAction": {
              "@type": "Action",
              "target": "https://Greenfin.com/try-free",
              "name": "Try Greenfin"
            }
          })
        }}
      />

      <div className="min-h-screen bg-[#004D2C]">
        {/* Navigation */}
        <Header/>


        {/* Main Content */}
        <main className="pt-24">
          {/* Hero Section */}
          <div className="mx-auto max-w-[1180px] px-4 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Grow your financial business<br />with a stunning website
            </h1>
            <p className="max-w-3xl mx-auto text-white/80 text-lg md:text-xl mb-12">
              With Greenfin, you can easily create a stunning website that is both beautiful and user-friendly. 
              Whether you are a small business owner or a large corporation, this theme is perfect for you. 
              It is incredibly easy to use, even for those with limited technical skills, and you can have 
              your website up and running in no time.
            </p>
            <Button 
              className="bg-[#9FE870] text-[#004D2C] hover:bg-[#8FD860] text-lg px-6 py-3 h-auto"
            >
              Try Greenfin for free →
            </Button>
            <p className="text-white/60 mt-4 text-sm">
              Test it for free, for 7 days. No credit card required.
            </p>
          </div>

          {/* Preview Image */}
          <div className="mx-auto max-w-[1180px] px-4 mt-2 pb-8">
      <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden group">
        <Image
          src="/behance/green.png"
          alt="Greenfin dashboard preview"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className=" text-[#9FE870] rounded-full  transform scale-90 hover:opacity-90 transition-all duration-300 hover:scale-100 focus:outline-none"
            aria-label="Play video"
          >
            <Play className="w-16 h-16 md:w-16 md:h-16" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
        </main>
        

        {/* Fixed Sidebar */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-[#9FE870]">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-[#9FE870]">
            <Link2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-[#9FE870]">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-[#9FE870]">
            <Moon className="h-5 w-5" />
          </Button>
        </div>

        <BlogSection />
        <SeoSection/>
        <PricingSection/>
        <Testimonials/>
        <FAQSection/>

      </div>
    </>
  )
}

