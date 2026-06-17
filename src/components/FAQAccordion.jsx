import iconMinus from '../assets/icon-minus.svg';
import iconPlus from '../assets/icon-plus.svg';
import iconStar from '../assets/icon-star.svg';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is Frontend Mentor, and how will it help me?',
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: 'Is Frontend Mentor free?',
    answer:
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
  },
  {
    id: 3,
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

function FAQAccordion() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-purple-100 bg-mobile-pattern bg-contain bg-top bg-no-repeat md:bg-desktop-pattern">
      <section className="flex w-[90%] max-w-[327px] flex-col items-start justify-center gap-300 rounded-lg bg-white p-300 shadow-card md:max-w-[600px] md:p-500">
        <div className="flex flex-row items-center gap-300 md:gap-400">
          <img
            src={iconStar}
            alt="Icon of a star"
            className="h-[24px] w-[24px]"
          />
          <h1 className="text-preset-1">FAQs</h1>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const isLast = index === faqs.length - 1;

            return (
              <div key={faq.id}>
                <div
                  className="mb-300 flex cursor-pointer flex-row items-center gap-300"
                  onClick={() => toggle(faq.id)}
                >
                  <p className="flex-1 text-preset-2">{faq.question}</p>
                  <img
                    src={isOpen ? iconMinus : iconPlus}
                    alt={isOpen ? 'Collapse' : 'Expand'}
                    className="h-[30px] w-[30px] justify-end"
                  />
                </div>
                {isOpen && <p className="mb-300 text-preset-3">{faq.answer}</p>}

                {!isLast && (
                  <div className="my-300 border border-purple-100"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default FAQAccordion;
