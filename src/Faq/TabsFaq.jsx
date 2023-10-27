import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";
import { QUESTIONS } from "./faqData";

export const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className="px-4 -mt-12 overflow-hidden text-l1">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

const Heading = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center">

        <span className="mb-8 text-5xl font-bold">FAQs</span>
      </div>

      <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-tr from-y9/20 to-y2/20 blur-3xl" />
    </>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-l1 text-l1"
              : "border-l5 bg-transparent text-l5"
          }`}
          key={tab}
        >
          <span className="relative z-10">{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "backIn",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-r to-rd2"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }) => {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <AnimatePresence mode="wait">
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`border-l  border-w3 px-4 transition-colors ${
        open ? "bg-d7" : "bg-none"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center justify-between w-full gap-4 py-4"
      >
        <span
          className={`text-left text-lg font-medium transition-colors ${
            open ? "text-l1" : "text-l5"
          }`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: { 
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl transition-colors ${
              open ? "text-l1" : "text-l5"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-l5"
      >
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const TABS = ["General", "Repair", "Maintenance"];