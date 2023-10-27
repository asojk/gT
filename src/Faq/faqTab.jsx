import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { QUESTIONS } from "./faqData";
import { FiPlus } from "react-icons/fi";

export const FAQTab = ({ tabName }) => {
  return (
		<div className='max-w-3xl mx-auto mt-12'>
			<AnimatePresence mode='wait'>
				{Object.entries(QUESTIONS).map(([tab, questions]) => {
					return tabName === tab ? (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{
								duration: 0.5,
								ease: 'backIn',
							}}
							className='space-y-4'
							key={tab}>
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
            className='p-4 border rounded-lg cursor-pointer border-r5 border-t5 border-b1'
            layout
            onClick={() => setOpen(!open)}>
            <div className='flex items-center justify-between'>
                <h3 className='text-white'>{question}</h3>
                <FiPlus
                    className={`text-l1 transition-transform transform ${
                        open ? 'rotate-45' : 'rotate-0'
                    }`}
                />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeIn',
                        }}>
                        <hr className='my-2 w-[95%] border-b1 rounded-xl' />
                        <p className='text-l1'>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* TODO differentiate question when open? */