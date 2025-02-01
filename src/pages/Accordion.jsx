import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is useState in React?", answer: "useState is a React Hook that allows you to add state to a functional component." },
    { question: "What is Framer Motion?", answer: "Framer Motion is a library for animations in React applications." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used in React to describe the UI structure." },
    { question: "What is React Router?", answer: "React Router is a library for handling navigation in React applications." },
    { question: "What is useEffect?", answer: "useEffect is a Hook that lets you perform side effects in functional components." },
  ];

  return (
    <div className="max-w-lg mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">React Questions</h2>
      {accordionItems.map((item, index) => (
        <div key={index} className="py-2">
          <button
            className="w-full text-left p-3 font-medium text-lg flex justify-between items-center bg-gray-100 rounded-md hover:bg-gray-300 transition duration-200"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={openIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-3 bg-gray-100 rounded-md mt-1">{item.answer}</div>
          </motion.div>
        </div>
      ))}
      <Link to="/" className="text-blue-500 text-lg block text-center  mt-6">
        Go to Home
      </Link>
    </div>
  );
};

export default Accordion;
