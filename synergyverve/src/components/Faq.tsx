import Image from "next/image";
import Question from "../../public/question.png";
import { useState } from "react";
import { ArrowDownToDot,
  ArrowDownRight
 } from "lucide-react";
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
    <div className="flex relative my-20 mx-20">
      <div className="w-1/3">
      <h2 className="text-6xl  text-center  font-bold mt-10">{title}</h2>
      <div className="mt-6">
            <Image
              src={Question}
              alt="SEO optimization"
              width={300}
              height={600}
              className="  absolute top-16 left-10 -z-10"
            />
          </div>

      </div>
      <div className="w-2/3 my-10">
        <div className=" mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === index ? <ArrowDownToDot 
 className="w-8 h-8 text-accent" /> : <ArrowDownRight  
 className="w-8 h-8 text-accent" />}</span>
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
