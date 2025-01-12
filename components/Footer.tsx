import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WPFooter",
            "copyrightYear": "2024",
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Greenfin",
              "url": "https://Greenfin.com"
            }
          })
        }}
      />

      <footer className="bg-[#003D22] text-white">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-[1180px] px-4 py-16">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Stay up to date</h2>
                <p className="text-white/70">Subscribe to our newsletter for updates, news, and exclusive insights.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-[#9FE870] text-[#004D2C] hover:bg-[#8FD860] whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="mx-auto max-w-[1180px] px-4 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-[#9FE870] rounded"></div>
                <span className="text-white text-xl font-semibold">Greenfin</span>
              </Link>
              <p className="text-white/70 text-sm">
                Create stunning financial websites with our powerful and flexible theme. Perfect for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                {["Features", "Pricing", "Templates", "Integrations", "Status", "Demo"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                {["Documentation", "Blog", "Tools", "API Reference", "Community", "Help Center"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                {["About Us", "Careers", "Press", "News", "Contact", "Partners"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1180px] px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Greenfin. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

