"use client";
import { useState } from "react";

import "./fastyles.css";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I preview the web components before purchase?",
      answer:
        "Yes, we offer live previews of all website components, dashboard templates, landing pages, and UI code templates.",
    },
    {
      question: "Are your templates RTL-compatible?",
      answer:
        "Our WordPress/Elementor templates, web components, and UI code templates support RTL languages out of the box.",
    },
    {
      question: "How are custom code templates delivered?",
      answer:
        "Custom code templates are delivered as ZIP files with clean CSS, HTML, JS, and React-based web components.",
    },
    {
      question: "What support is included for dashboards and UI templates?",
      answer:
        "We include documentation, code samples, and email support for all web components, dashboards, and website components.",
    },
    {
      question: "Can I request new templates or components?",
      answer:
        "Yes! We welcome requests for custom web components, WordPress/Elementor templates, dashboards, landing pages, and UI blocks.",
    },
  ];

  return (
    <section className="faqs_section pt-20 pb-20 md:pt-32 md:pb-32">
      <>
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-10">
          FAQ’s (Frequently Asked Questions)
        </h2>
        <div className={`faq_wrapper inner_section  "fade-in" : "opacity-0"}`}>
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow p-1 rounded-[22px]">
              <div
                key={index}
                className={`accordion !bg-black/5 !border rounded-[22px] !border-black/5 ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {/* Accordion Header */}
                <div className="accordion_head ">
                  <span>{faq.question}</span>
                  <p
                    className={`icon ${activeIndex === index ? "rotate" : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path stroke="currentColor" d="M13.5 5.5 8 11 2.5 5.5" />
                    </svg>
                  </p>
                </div>

                {/* Accordion Content */}
                <div
                  className="accordion_content"
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0px",
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateY(0)"
                        : "translateY(-10px)",
                  }}
                >
                  <p className="faq_answer">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  );
}
