import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 team members",
      "Basic financial reporting",
      "10 custom invoices per month",
      "24/7 email support"
    ]
  },
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced financial reporting",
      "Unlimited custom invoices",
      "Priority email and chat support",
      "Expense tracking"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Custom financial dashboards",
      "Dedicated account manager",
      "24/7 phone, email, and chat support",
      "Advanced security features"
    ]
  }
]

export default function PricingSection() {
  return (
    <section className="bg-[#F0FFF4] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004D2C] mb-4 text-center">Choose Your Plan</h2>
        <p className="text-[#2C7A51] text-center mb-12 max-w-2xl mx-auto">
          Select the perfect plan for your business needs. All plans come with a 14-day free trial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col justify-between bg-white border-[#E6F7ED] shadow-sm hover:shadow-md transition-shadow duration-300 ${index === 1 ? 'md:-mt-4 md:mb-4' : ''}`}>
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#004D2C]">{plan.name}</CardTitle>
                  <CardDescription className="text-[#5B9E7A]">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-[#004D2C] mb-6">{plan.price}<span className="text-lg font-normal text-[#5B9E7A]">{plan.price !== "Custom" ? "/month" : ""}</span></p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#2C7A51]">
                        <Check className="h-5 w-5 mr-2 text-[#9FE870]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              <CardFooter className="mt-6">
                <Button className={`w-full ${index === 1 ? 'bg-[#9FE870] text-[#004D2C] hover:bg-[#8FD860]' : 'bg-[#004D2C] text-white hover:bg-[#003D22]'}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-[#5B9E7A] text-center mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}

