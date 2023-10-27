import React from 'react';
import { Helmet } from 'react-helmet';
import { FAQTab } from '../Faq/faqTab';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CardCarousel from '../Components/carousel.jsx';


const ReplacePoints = ({ Point }) => (
	<div className='w-full p-2 sm:w-1/2'>
		<div className='flex items-start'>
			<div className='mr-2 text-base leading-relaxed text-left md:text-lg lg:text-xl text-r'>» </div>
			<span className='text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>{Point}</span>
		</div>
	</div>
);

const ReplaceSigns = ({ Sign }) => (
	<div className='w-full p-2 sm:w-1/2'>
		<div className='flex items-start'>
			<div className='mr-2 text-base leading-relaxed text-left md:text-lg lg:text-xl text-r'>» </div>
			<span className='text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>{Sign}</span>
		</div>
	</div>
);

function Replacement() {
	return (
		<>
			<section className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg)] bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>
				<div className='relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
					<div className='max-w-2xl text-center sm:text-left'>
						<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl'>
							Installation you can trust
						</div>
						<h1 className='mb-6 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>
							Commercial Roof Replacement
						</h1>
						<p className='max-w-lg pb-12 mt-4 lg:pb-24 sm:text-xl/relaxed text-l3'>
							We have over 30 years of experience in flat and low-slope installations throughout the Midwest and will
							ensure the entire process goes as smoothly as possible.
						</p>

						<p className='mt-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>Check out our</p>
						<Link to='/projects'>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.9 }}
								transition={{ duration: 0.225, ease: 'easeIn' }}
								className='px-4 py-2 text-base font-black leading-relaxed text-center uppercase rounded-lg cursor-pointer xl:mt-2 md:text-lg lg:text-xl text-l1 shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-1 focus:ring-rd2 active:bg-rl'>
								past projects
							</motion.button>
						</Link>
					</div>
				</div>
			</section>

			<div className='relative max-w-screen-xl px-4 py-[10vh] mx-auto sm:px-6 lg:flex lg:items-center lg:px-8'>
				<section className='relative z-1 max-w-[85rem] px-4 mx-auto'>
					<div className='container px-5 mx-auto rounded-2xl'>
						<div className='mb-8 text-center'>
							<header className='text-center'>
								<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-lg lg:text-2xl'>
									When to replace
								</div>
								<h2 className='mb-4 text-4xl font-bold leading-none tracking-tight text-center text-white md:text-7xl'>
									Signs it's time for a replacement
								</h2>
							</header>
							<p className='text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
								It can be hard to know when it is time to get a new flat roof, and certainly, it can be quite an
								investment. What is even more costly, though, is not replacing a damaged roof which can lead to further
								issues and even more expenses. If you experience any of the signs below, it may be time to schedule your
								flat roof replacement:
							</p>
						</div>
						<div className='flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2'>
							<ReplaceSigns Sign='Water stains on the ceiling' />
							<ReplaceSigns Sign='Multiple roof holes' />
							<ReplaceSigns Sign='Leaking ceiling' />
							<ReplaceSigns Sign='Torn vapor barrier' />
							<ReplaceSigns Sign='Missing pieces of roof' />
							<ReplaceSigns Sign='Pooling water' />
							<ReplaceSigns Sign='Cracked roof membrane' />
							<ReplaceSigns Sign='Bubbling roof membrane' />
							<ReplaceSigns Sign='Sagging roof' />
							<ReplaceSigns Sign='Mold or mildew' />
							<ReplaceSigns Sign='Rusted flashing' />
							<ReplaceSigns Sign='Damaged roof insulation' />
							<ReplaceSigns Sign='Damaged roof deck' />
							<ReplaceSigns Sign='Damaged roof membrane' />
						</div>
						<p className='pt-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
							The only way to ensure that your roof is still in good shape is to hire a professional. Contact Grell
							today for a free roofing inspection to see if a roof replacement is the next step for maintaining your
							building.
						</p>
					</div>
				</section>
			</div>
			<section className=''>
				<CardCarousel Title1={''} Title2={''} CarouselItems={ReplaceImages} />
			</section>

			<div className='relative max-w-screen-xl px-4 py-[10vh] mx-auto sm:px-6 lg:flex lg:items-center lg:px-8'>
				<section className='relative z-1 max-w-[85rem] px-4 mx-auto'>
					<div className='container px-5 mx-auto rounded-2xl'>
						<div className='mb-8 text-center'>
							<header className='text-center'>
								<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-lg lg:text-2xl'>
									We only install the best
								</div>
								<h2 className='mb-4 text-4xl font-bold leading-none tracking-tight text-center text-white md:text-7xl'>
									Duro-Last Elite Contractor
								</h2>
							</header>
							<p className='text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
								As a Duro-Last Elite Contractor, you can rest assured that you are not only getting the highest quality
								flat roofing but also excellent service and reliable installation that will last for years to come.{' '}
							</p>
							<p className='pt-12 mx-auto text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1 lg:w-3/4'>
								We only install the best flat roofing on the market. Duro-Last has built a reputation for manufacturing
								precision-fabricated roofing systems, which come with endless benefits including:
							</p>
						</div>
						<div className='flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2'>
							<ReplacePoints Point='Less on-site seaming during installation, which minimizes problems and enables us to install quicker, saving you time and money' />
							<ReplacePoints Point='A significant reduction in the potential for installation issues and future leak problems' />
							<ReplacePoints Point='A reduction in waste, both during manufacturing and during installation' />
							<ReplacePoints Point='More secure installation at critical roof transitions' />
						</div>
						<p className='pt-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
							No matter which type of product you select for your flat roof, we can guarantee you will be satisfied with
							the end result. Contact us today to get a free estimate on your flat roof installation.
						</p>
						{/*<a className='inline-flex items-center mt-3 text-r'>
							Learn More
							<svg
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								className='w-4 h-4 ml-2'
								viewBox='0 0 24 24'>
								<path d='M5 12h14M12 5l7 7-7 7'></path>
							</svg>
			</a>*/}
					</div>
				</section>
			</div>
			<section className='relative max-w-5xl px-8 py-16 mx-auto sm:px-16 lg:items-center lg:justify-around lg:py-24'>
				<h2 className='pl-8 mb-4 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>FAQ</h2>
				<FAQTab tabName='General' />
			</section>
		</>
	);
}


export default Replacement;


const ReplaceImages = [
	{
		id: 1,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img01.jpeg',
		category: '',
		title: '',
		description: '',
	},
	{
		id: 2,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img12.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 3,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img13.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 4,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img02.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 5,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img03.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 6,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img04.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 7,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img05.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 8,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img06.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 9,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img07.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 10,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img08.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 11,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img09.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 12,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img10.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 13,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img11.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 14,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img14.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 15,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img15.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 16,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img16.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 17,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img17.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 18,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img18.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 19,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img19.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 20,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img20.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 21,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img21.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 22,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img22.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
	{
		id: 23,
		url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/img23.jpeg',
		category: ' ',
		title: ' ',
		description: ' ',
	},
];

