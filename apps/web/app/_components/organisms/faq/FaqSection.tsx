import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@uiqubes/ui";

export const FaqSection = () => {
  const faqs = [
    { question: "Is UI Qubes free to use?", answer: "Yes, UI Qubes is open-source and 100% free for both personal and commercial projects." },
    { question: "Do I need to install it as an npm package?", answer: "We provide two ways to use our components. You can install via npm (@uiqubes/ui) for a centralized approach, or simply copy and paste the raw component code directly into your project to retain total ownership." },
    { question: "Which framework is this built for?", answer: "UI Qubes is designed exclusively for React and Next.js, leveraging Tailwind CSS for styling and Radix UI for accessibility." },
    { question: "How is it different from Shadcn UI?", answer: "UI Qubes takes inspiration from the brilliant Shadcn ecosystem, but focuses heavily on offering a broader spectrum of complex 'Blocks'—like complete Hero sections, detailed Pricing tables, and full Bento grids—ready to be dropped in." }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[var(--background)] relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-400">Everything you need to know about using UI Qubes.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                <AccordionTrigger className="text-left text-white hover:text-indigo-400 transition-colors text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
