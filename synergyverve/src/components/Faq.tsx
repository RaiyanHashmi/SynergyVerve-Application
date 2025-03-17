import { useState } from "react";

interface FAQProps {
  title: string;
  faqs: { question: string; answer: string }[];
}

const FAQ = ({ title, faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex container">
      <div className="w-1/2">
      <h2 className="text-6xl  font-bold mb-4">{title}</h2>

      </div>
      <div className="w-1/2">
        <div className=" mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === index ? "➖" : "➕"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-200 rounded-lg mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
