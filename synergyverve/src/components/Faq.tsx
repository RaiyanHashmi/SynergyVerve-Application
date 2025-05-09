
import { useState } from "react";
import { Plus
 } from "lucide-react";
interface FAQProps {
  title: string;
  faqs: { question: string; answer: string }[];
}

const FAQ = ({  faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-text p-8 rounded-2xl text-white relative m-20 overflow-hidden shadow-xl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 transition-all duration-700 ease-in-out hover:translate-y-1">
          <div className="text-white text-lg font-semibold mb-1 animate-fade-in">
            FAQs
          </div>
          <h2 className="text-6xl font-bold tracking-tighter leading-none">
            HAVE
            <br />
            <span className="from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r">
              QUESTIONS?
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-primary transition-all duration-300 ease-in-out hover:border-accent"
            >
              <button
                className="w-full text-left py-4 pr-4 flex justify-between items-center transition-all duration-300 hover:bg-primary/10 rounded-t-md group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white text-lg group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-md transition-all duration-300 transform ${
                    openIndex === index
                      ? "bg-accent rotate-180 text-white"
                      : "border border-primary hover:bg-primary/20 text-primary"
                  }`}
                >
                  {openIndex === index ? (
                    <span className="font-bold transition-transform duration-300">
                      −
                    </span>
                  ) : (
                    <Plus
                      size={12}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-4 text-white text-lg  opacity-80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-text opacity-70 hover:opacity-100 transition-all duration-300">
            Ca&apos;t find what you&apos;re looking for?
          </div>
          <a
            href="#"
            className="flex items-center text-sm text-primary hover:text-accent group transition-all duration-300 ease-in-out"
          >
            See All FAQs
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
