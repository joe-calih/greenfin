import Link from "next/link"
import { Play } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const menuItems = {
  Demos: {
    sections: [
      {
        title: "Help and support",
        items: [
          {
            title: "Help and support",
            description: "Get 24/7 support",
            href: "#",
          },
          {
            title: "How-to guides",
            description: "Read in-depth business guides",
            href: "#",
          },
          {
            title: "Business courses",
            description: "Learn from proven experts",
            href: "#",
          },
          {
            title: "Shopify blog",
            description: "Business strategy tips",
            href: "#",
          },
        ],
      },
    ],
  },
  Pages: {
    sections: [
      {
        title: "Popular topics",
        items: [
          {
            title: "What is Shopify?",
            description: "How our commerce platform works",
            href: "#",
          },
          {
            title: "Shopify Editions",
            description: "New, innovative Shopify products",
            href: "#",
          },
          {
            title: "Founder stories",
            description: "Learn from successful merchants",
            href: "#",
          },
          {
            title: "Branding",
            description: "Build your brand from scratch",
            href: "#",
          },
        ],
      },
      {
        title: "Marketing",
        items: [
          {
            title: "Marketing",
            description: "Build a marketing plan",
            href: "#",
          },
          {
            title: "Ecommerce SEO",
            description: "Improve your search ranking",
            href: "#",
          },
          {
            title: "Social media strategy",
            description: "Turn social into sales",
            href: "#",
          },
          {
            title: "Business growth",
            description: "Scale your business",
            href: "#",
          },
        ],
      },
    ],
  },
  Features: {
    sections: [
      {
        title: "Essential features",
        items: [
          {
            title: "Online store",
            description: "Sell products on your website",
            href: "#",
          },
          {
            title: "Point of Sale",
            description: "Sell in person",
            href: "#",
          },
          {
            title: "Buy Button",
            description: "Add ecommerce to any site",
            href: "#",
          },
          {
            title: "Checkout",
            description: "Optimize your conversion rate",
            href: "#",
          },
        ],
      },
    ],
  },
  Layouts: {
    sections: [
      {
        title: "Store layouts",
        items: [
          {
            title: "Online Store 2.0",
            description: "Customizable store themes",
            href: "#",
          },
          {
            title: "Dawn theme",
            description: "Our versatile, open-source theme",
            href: "#",
          },
          {
            title: "Headless commerce",
            description: "Custom storefront solutions",
            href: "#",
          },
          {
            title: "Mobile app",
            description: "Manage your store on the go",
            href: "#",
          },
        ],
      },
    ],
  },
  Resources: {
    sections: [
      {
        title: "Essential tools",
        items: [
          {
            title: "Logo maker",
            description: "Create your brand identity",
            href: "#",
          },
          {
            title: "Stock photography",
            description: "Find the perfect image",
            href: "#",
          },
          {
            title: "Business plan template",
            description: "Plan your success",
            href: "#",
          },
          {
            title: "Link in bio tool",
            description: "Optimize your social presence",
            href: "#",
          },
        ],
      },
    ],
  },
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#004D2C]/95 backdrop-blur supports-[backdrop-filter]:bg-[#004D2C]/80">
      <nav className="mx-auto max-w-[1180px] px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 relative group">
            <div className="h-8 w-8 bg-[#9FE870] rounded relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-[#9FE870] rounded-full p-1">
                  <Play className="h-4 w-4 text-[#004D2C]" />
                </div>
              </div>
            </div>
            <span className="text-white text-xl font-semibold">Greenfin</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(menuItems).map(([title, { sections }]) => (
                  <NavigationMenuItem key={title}>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#004D2C]/10 hover:text-[#9FE870]">
                      {title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] bg-white rounded-md shadow-lg">
                        {sections.map((section) => (
                          <div key={section.title}>
                            <div className="px-5 py-2 bg-gray-50 border-b">
                              <h3 className="font-medium text-sm text-gray-700">
                                {section.title}
                              </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-x-6 p-5">
                              {section.items.map((item) => (
                                <NavigationMenuLink
                                  key={item.title}
                                  asChild
                                >
                                  <Link
                                    href={item.href}
                                    className="block group p-2 hover:bg-gray-50 rounded-md"
                                  >
                                    <div className="text-sm font-medium text-gray-900 group-hover:text-gray-900">
                                      {item.title}
                                    </div>
                                    <div className="text-sm text-gray-500 group-hover:text-gray-500">
                                      {item.description}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-[#9FE870] text-[#004D2C] hover:bg-[#8FD860]">
              Purchase Now
            </Button>
          </div>

          <Button variant="ghost" className="md:hidden text-white" size="icon">
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  )
}

