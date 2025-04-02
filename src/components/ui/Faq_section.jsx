import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: " Why isn’t my website ranking despite good content?",
      answer:
        "Weak backlinks, poor mobile optimization, and bad website speed are common offenders.  To identify problems, take a free [Google PageSpeed Insights test].",
    },
    {
      question: "How frequently should I make SEO updates to my website?",
      answer:
        "Technical SEO audits are conducted every three months, and top-performing content is updated every six to twelve months.",
    },
    {
      question: "How can I get to the top of Google Maps?",
      answer:
        "Make sure your Google Business Profile has at least ten high-quality images, a keyword-rich business description, and fifty or more real customer reviews.",
    },
    {
      question: "Why do rivals with fewer reviews rank higher than me?",
      answer:
        "They probably have consistent NAP citations, local backlinks, or better-optimized GBP profiles.",
    },
    {
      question: "How long does it take for digital marketing to be effective?",
      answer:
        "Instant traffic (within 48 hours) for PPC/Ads,SEO: three to six months for long-term rankings,Brand authority on social media: more than six months",
    },
    {
      question: "Which approach works best for tight budgets?",
      answer:
        "80% of SMBs see a return on investment in three months if they concentrate on Google Local SEO and Meta/Instagram Ads.",
    },
    {
      question: "Why are my ads getting clicks but no sales?",
      answer:
        "Most likely because: ✔ Poor audience targeting (use Lookalike Audiences) ✔ Weak landing page (load time >3 seconds kills conversions) ✔ Lack of urgency (limited-time deals do 23% better)",
    },
    {
      question: "What’s a good email open rate?",
      answer:
        "20 to 30 percent (average for all industries), 35%+ (segmented lists of top performers)",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center  md:items-center gap-12 px-6">
        
        {/* Left Section - Title */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Explore Common <span className="text-green-600/70" >Questions</span> 
          </h2>
        </div>

        {/* Right Section - FAQs */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-6 py-5"
                >
                  <span className="text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <p className="text-center text-gray-600 text-base mt-9">
            Still have questions?{" "}
            <span className="cursor-pointer font-medium text-blue-600 transition-all duration-200 hover:underline">
              Contact our support
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}