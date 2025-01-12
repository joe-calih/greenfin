import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is FinFlow?",
    answer: "FinFlow is a powerful and flexible theme designed for creating stunning financial websites. It caters to businesses of all sizes, from small startups to large corporations, offering easy-to-use tools and templates for building professional financial web presence."
  },
  {
    question: "Do I need coding experience to use FinFlow?",
    answer: "No, you don't need coding experience to use FinFlow. Our theme is designed with user-friendliness in mind, featuring drag-and-drop builders and pre-designed templates. However, if you have coding skills, you can further customize the theme to meet your specific needs."
  },
  {
    question: "Can I try FinFlow before purchasing?",
    answer: "Yes, we offer a 14-day free trial for all our plans. You can explore all the features and functionalities of FinFlow without any commitment. No credit card is required to start your trial."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support to all our customers. This includes detailed documentation, video tutorials, and a dedicated support team. Depending on your plan, you can access email support, live chat, or even get a dedicated account manager for enterprise-level assistance."
  },
  {
    question: "Is FinFlow compatible with other financial tools and software?",
    answer: "Yes, FinFlow is designed to be compatible with a wide range of financial tools and software. We offer integrations with popular accounting software, CRM systems, and other financial services. If you need a specific integration, our team can assist you in setting it up."
  },
  {
    question: "How often is FinFlow updated?",
    answer: "We regularly update FinFlow to ensure it remains cutting-edge and secure. Major updates are typically released quarterly, with minor updates and security patches rolled out as needed. All updates are included in your subscription at no additional cost."
  }
]

export default function FAQSection() {
  return (
    <section className="bg-[#F0FFF4] py-16 md:py-24">
      {/* Schema.org markup for FAQs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })
      }} />

      <div className="mx-auto max-w-[1180px] px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004D2C] mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-[#004D2C] hover:text-[#003D22]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#2C7A51]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

