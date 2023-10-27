import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from 'react';
import { Link } from 'react-scroll';


const VerticalSlideFeatures = () => {
	const [selected, setSelected] = useState(0);

	return (
		<section className='max-w-screen-xl px-4 py-24 mx-auto lg:px-8'>
					<h2 className='p-4 mb-6 text-2xl font-bold text-white rounded-md md:mb-12 md:text-4xl'>
						Getting Started
					</h2>
		<div className='flex flex-col-reverse gap-4 px-4 mx-auto place-content-center md:flex-row-reverse md:px-8'>
			<AnimatePresence mode='wait'>
				{FEATURES.map((tab, index) => {
					return selected === index ? (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							key={index}
							className='w-full'>
							<tab.Feature />
						</motion.div>
					) : undefined;
				})}
			</AnimatePresence>
			<Tabs selected={selected} setSelected={setSelected} />
		</div>
		</section>
	);
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 md:w-64">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="relative w-full group md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-gradient-to-l from-l1 to-r p-4 transition-colors group-hover:border-w4 md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[300px] text-start text-xl font-semi-bold transition-colors md:text-2xl ${
            selected
              ? "text-white bg-zinc-600/30 p-[8px] rounded-md"
              : "text-zinc-300 group-hover:text-white"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-gradient-to-r from-r to-rd2 md:w-2"
        />
      )}
    </div>
  );
};

export default VerticalSlideFeatures;

const FEATURES = [
	{
		title: 'How soon can we start?',
		Feature: () => <Start text='Start' />,
	},
	{
		title: 'Does Grell service my area?',
		Feature: () => <ServiceArea text='USA' />,
	},
];

const ServiceArea = () => (
	<div className='relative md:ml-12 justify-center w-full overflow-hidden rounded-2xl group'>
		<img
			alt='moto'
			src='https://grell.s3.us-east-2.amazonaws.com/earth-line.svg'
			className='absolute w-40 h-40 mb-4 -left-16 -bottom-16'
		/>
		<div className='w-full px-4 mb-2'>
			<p className='mb-4 text-base leading-relaxed text-left text-l1 md:text-lg lg:text-xl'>
				We're available to work in most of North America.
			</p>
		</div>
		<iframe
			src='https://api.mapbox.com/styles/v1/grell/clmexi03003ay01ph1zl4ds2x.html?title=false&access_token=pk.eyJ1IjoiZ3JlbGwiLCJhIjoiY2xraXpib3NkMDBibTNybXZnbml5eGMwMyJ9.y69nZBItX012aWE7GWBfyA&zoomwheel=true#3.11/37.27/-90.94'
			title='GrellHeat'
			width='100%'
			height='350px'
			loading='lazy'
			className='flex p-0 rounded-2xl border-b3'></iframe>
	</div>
);

const Start = () => (
	<div className='relative justify-center ml-36 w-3/4 overflow-hidden rounded-2xl group'>
		<div className='relative z-0 w-5/6 align-center p-4 rounded-2xl border-[3px] border-b3 overflow-hidden group shadow-nimble bg-gradient-to-tl from-d7 to-d6'>
			<img
				alt='moto'
				src='https://grell.s3.us-east-2.amazonaws.com/calendar.svg'
				className='absolute w-40 h-40 mb-4 z-1 -right-16 -bottom-16'
			/>
			<div className='flex flex-wrap lg:p-2'>
				<p className='relative z-10 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
					Typically, we can schedule an estimate as soon as a week from now.
				</p>
			</div>
			<div className=''>
				<p className='relative z-10 w-full pb-1 pl-1 mt-8 text-base leading-relaxed text-left md:w-12 lg:w-full lg:mt-4 md:text-lg lg:pb-0 lg:text-xl text-l1'>Schedule your</p>
				<Link to='contact' smooth={true} duration={400}>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ duration: 0.225, ease: 'easeIn' }}
						className='relative z-10 px-4 py-2 text-base font-black leading-relaxed text-center text-white uppercase rounded-lg cursor-pointer xl:mt-2 md:text-lg lg:text-xl shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-1 focus:ring-rd2 active:bg-rl'>
						free estimate
					</motion.button>
				</Link>

			</div>
		</div>
	</div>
);
