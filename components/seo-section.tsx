import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Diamond, Clock } from 'lucide-react'

export default function SeoSection() {
  return (
    <div className="w-full bg-[#1B4034] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Keyword Research Card */}
          <Card className="bg-[#2A5548]/50 border-0 text-white">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                Done-For-You Keyword<br />& Competitor Research.
              </h2>
              <p className="text-gray-200">
                Get high-quality content centered around the exact keywords you want to rank for on Google.
              </p>
              <Button 
                variant="link" 
                className="text-[#C2E7B9] hover:text-[#C2E7B9]/90 p-0 h-auto font-semibold text-lg"
              >
                Get Better Content →
              </Button>
            </CardContent>
          </Card>

          {/* Keyword Targets Card */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Your Keyword Targets</h3>
              <div className="space-y-4 mb-6">
                {[
                  { icon: FileText, text: "Keyword #1" },
                  { icon: Diamond, text: "Keyword #2" },
                  { icon: FileText, text: "Keyword #3" },
                  { icon: Clock, text: "Keyword #4" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C2E7B9] flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-[#1B4034]" />
                    </div>
                    <span className="text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-[#2A5548] hover:bg-[#2A5548]/90 text-white">
                See More
              </Button>
            </CardContent>
          </Card>

          {/* Auto Publishing Card */}
          <Card className="bg-[#2A5548]/50 border-0 text-white">
            <CardContent className="p-6 space-y-6">

              <Card className="bg-white text-gray-800">
                <CardContent className="p-4 space-y-4">
                  <div className="space-y-3">
                    {["Keywords", "Impressions", "Click-Through"].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{item}</span>
                        <div className="w-32 h-2 bg-gray-200 rounded" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <p className="text-gray-200">
                We automatically publish & index your blog content so you start getting impressions immediately.
              </p>
              
              <Button 
                variant="link" 
                className="text-[#C2E7B9] hover:text-[#C2E7B9]/90 p-0 h-auto font-semibold text-lg"
              >
                Rank Better On Google →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "SEO Content Optimization",
              "description": "Professional keyword research and content optimization service with automatic publishing and Google indexing updates.",
              "provider": {
                "@type": "Organization",
                "name": "Your Company Name"
              },
              "serviceType": "SEO Services",
              "offers": {
                "@type": "Offer",
                "description": "Done-For-You Keyword & Competitor Research"
              }
            })
          }}
        />
      </div>
    </div>
  )
}

