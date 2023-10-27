import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
	sm: 640,
	lg: 1024,
};

const CardCarousel = ({CarouselItems, Title1, Title2}) => {
	const [ref, { width }] = useMeasure();
	const [offset, setOffset] = useState(0);

	const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

	const CAN_SHIFT_LEFT = offset < 0;

	const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (CarouselItems.length - CARD_BUFFER);

	const shiftLeft = () => {
		if (!CAN_SHIFT_LEFT) {
			return;
		}
		setOffset((pv) => (pv += CARD_SIZE * 2));
	};

	const shiftRight = () => {
		if (!CAN_SHIFT_RIGHT) {
			return;
		}
		setOffset((pv) => (pv -= CARD_SIZE *2));
	};

	return (
		<section className='bg-d7 shadow-edge' ref={ref}>
			<div className='relative p-8 overflow-hidden'>
				{/* CARDS */}
				<div className='max-w-6xl mx-auto'>
					<p className='mb-0 text-2xl font-semibold text-white'>
						{Title1}<span className='text-yw'>{Title2}</span>
					</p>
					<motion.div
						animate={{
							x: offset,
						}}
						className='flex'>
						{CarouselItems.map((item) => {
							return <Card key={item.id} {...item} />;
						})}
					</motion.div>
				</div>

				{/* BUTTONS */}
				<>
					<motion.button
						initial={false}
						animate={{
							x: CAN_SHIFT_LEFT ? '0%' : '-100%',
						}}
						className='absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3'
						onClick={shiftLeft}>
						<FiChevronLeft />
					</motion.button>
					<motion.button
						initial={false}
						animate={{
							x: CAN_SHIFT_RIGHT ? '0%' : '100%',
						}}
						className='absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3'
						onClick={shiftRight}>
						<FiChevronRight />
					</motion.button>
				</>
			</div>
		</section>
	);
};

const Card = ({ url, category, title, description }) => {
	return (
		<div
			className='relative shrink-0 cursor-pointer rounded-2xl bg-d5 shadow-nimble transition-all hover:scale-[.98] hover:shadow-xl'
			style={{
				width: CARD_WIDTH,
				height: CARD_HEIGHT,
				marginRight: MARGIN,
				backgroundImage: `url(${url})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<div className='absolute inset-0 z-20 rounded-2xl transition-[backdrop-filter] hover:backdrop-grayscale'>
				<span className='text-xs font-semibold uppercase text-zinc-100'>{category}</span>
				<p className='my-2 text-3xl font-bold text-r'>{title}</p>
				<p className='text-lg text-zinc-300'>{description}</p>
			</div>
		</div>
	);
};

export default CardCarousel;