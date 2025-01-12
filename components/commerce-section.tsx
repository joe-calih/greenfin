'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Script from "next/script"

interface PaymentCard {
  id: number
  name: string
  amount: string
  type: string
  action: string
}

const paymentCards: PaymentCard[] = [
  { id: 1, name: "Bill Dewey", amount: "$23.00", type: "iPhone 14 Pro Mockup", action: "purchased" },
  { id: 2, name: "Alecive", amount: "$132.00", type: "Team Pro License", action: "upgraded to" },
  { id: 3, name: "Ahmad Irfan", amount: "$23.00", type: "iPhone 15 Pro Mockup", action: "purchased" },
  { id: 4, name: "Activeyou", amount: "$23.00", type: "iPhone 15 Pro Mockup", action: "purchased" }
]

export default function GlobalCommerceSection() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Global Commerce Solution",
    "description": "Accept payments globally with support for 132+ currencies",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#0B2B14] to-[#75E087]">
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <div className="mx-auto max-w-[1180px] px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-wider">Global Scale</p>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
                Sell Everywhere in Global Commerce
              </h2>
              <p className="max-w-[600px] text-gray-200">
                When you sell your software products to global customers, accepting local payment methods is critical in capturing the total market opportunity. Dont let payment friction get in the way of a single sale. Allow customers to pay in their local currency.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <h3 className="text-3xl font-bold">132+</h3>
                <p className="text-sm text-gray-200">Currencies supported</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">85.5%</h3>
                <p className="text-sm text-gray-200">businesses using Finto</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">150M</h3>
                <p className="text-sm text-gray-200">API request per day</p>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[400px] lg:h-full">
            {paymentCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute left-1/2 top-1/2"
                initial={{ 
                  x: -50,
                  y: -50,
                  scale: 0.8,
                  opacity: 0 
                }}
                animate={{
                  x: [
                    Math.cos(index * (Math.PI / 2)) * 120 - 50,
                    Math.cos((index + 1) * (Math.PI / 2)) * 120 - 50
                  ],
                  y: [
                    Math.sin(index * (Math.PI / 2)) * 120 - 50,
                    Math.sin((index + 1) * (Math.PI / 2)) * 120 - 50
                  ],
                  scale: 1,
                  opacity: 1
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  delay: index * 5,
                  ease: "linear"
                }}
              >
                <Card className="w-[280px] p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{card.name}</p>
                      <p className="text-xs text-gray-500">
                        {card.action} {card.type}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-green-600">{card.amount}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

