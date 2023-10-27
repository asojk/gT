import React from "react";
import { motion } from 'framer-motion';
import Awards from '../Components/Press/awards.jsx';
import Recognition from '../Components/Press/recognition.jsx';

const About = () => (
	<>
		<section
			className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/WebPics/Office2.avif)] shadow-edge bg-cover bg-center bg-no-repeat'>
			<div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>
			<div className='relative max-w-screen-xl px-8 py-32 mx-auto md:py-36 lg:py-48 sm:px-10 lg:flex lg:items-center lg:px-12'>
				<div className='max-w-2xl text-center sm:text-left'>
					<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl'>
						Commercial Roofing Pros
					</div>
					<h1 className='mb-6 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>About Grell</h1>
				</div>
			</div>
		</section>
		<motion.div variants={SecMotion}>
			<section className=''>
				<div className='container px-6 pt-32 pb-32 mx-auto'>
					<div className='text-sm font-black leading-snug tracking-widest text-center uppercase text-yw md:text-lg lg:text-2xl'>
						Our Management Team
					</div>
					<div className='grid grid-cols-1 gap-8 mt-4 xl:mt-12 md:grid-cols-2 xl:grid-cols-4'>
						<div className='flex flex-col items-center p-8 transition duration-300 transform bg-transparent border border-transparent cursor-pointer group rounded-3xl hover:border-d3 hover:bg-d7 shadow-transparent hover:shadow-nimble hover:z-10'>
							<img
								className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
								src='https://grell.s3.us-east-2.amazonaws.com/staff/eric.avif'
								alt=''
							/>

							<h3 className='pt-4 pb-1 text-2xl font-bold leading-none tracking-tight text-center text-white md:text-4xl'>
								Erica Grell
							</h3>

							<p className='text-sm text-center capitalize text-l3 md:text-lg lg:text-2xl group-hover:text-r'>
								Owner/President
							</p>
						</div>

						<div className='flex flex-col items-center p-8 transition duration-300 transform bg-transparent border border-transparent cursor-pointer group rounded-3xl hover:border-d3 hover:bg-d7 shadow-transparent hover:shadow-nimble hover:z-10'>
							<img
								className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
								src='https://grell.s3.us-east-2.amazonaws.com/staff/chase.avif'
								alt=''
							/>

							<h3 className='pt-4 pb-1 text-2xl font-bold leading-none tracking-tight text-center text-white md:text-4xl'>
								Chase Michehl
							</h3>

							<p className='text-sm text-center capitalize text-l3 md:text-lg lg:text-2xl group-hover:text-r'>
								Business Operations Specialist
							</p>
						</div>

						<div className='flex flex-col items-center p-8 transition duration-300 transform bg-transparent border border-transparent cursor-pointer group rounded-3xl hover:border-d3 hover:bg-d7 shadow-transparent hover:shadow-nimble hover:z-10'>
							<img
								className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
								src='https://grell.s3.us-east-2.amazonaws.com/staff/laura.avif'
								alt=''
							/>

							<h3 className='pt-4 pb-1 text-2xl font-bold leading-none tracking-tight text-center text-white md:text-4xl'>
								Laura Sanchez
							</h3>

							<p className='text-sm text-center capitalize text-l3 md:text-lg lg:text-2xl group-hover:text-r'>
								Office Manager
							</p>
						</div>

						<div className='flex flex-col items-center p-8 transition duration-300 transform bg-transparent border border-transparent cursor-pointer group rounded-3xl hover:border-d3 hover:bg-d7 shadow-transparent hover:shadow-nimble hover:z-10'>
							<img
								className='object-cover w-32 h-32 rounded-full ring-2 ring-r'
								src='https://grell.s3.us-east-2.amazonaws.com/staff/alex.avif'
								alt=''
							/>

							<h3 className='pt-4 pb-1 text-2xl font-bold leading-none tracking-tight text-white md:text-4xl'>
								Alex Sojka
							</h3>

							<p className='text-sm capitalize text-l3 md:text-lg lg:text-2xl group-hover:text-r'>Digital Strategist</p>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
		<div className='py-16'>
			<div className='px-6 m-auto text-white xl-container md:px-12 xl:px-6'>
				<div className='mb-12 space-y-2 text-center'>
					<div className='text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-lg lg:text-2xl'>
						Recognition
					</div>
				</div>
				<Recognition
					img='https://grell.s3.us-east-2.amazonaws.com/Press/RadiatingHope.jpg'
					title='Grell Roofing donates to Radiating Hope campaign'
					subtitle='Messenger News'
					url='https://www.messengernews.net/news/showcase/2022/08/grell-roofing-donates-to-radiating-hope-campaign/'
					date='Aug 20, 2022'
				/>
				<Recognition
					img='https://grell.s3.us-east-2.amazonaws.com/Press/messenger.jpg'
					title='Grell shows signs of growth'
					subtitle='Messenger News'
					url='https://www.messengernews.net/news/local-business/2019/08/grell-shows-signs-of-growth/'
					date='Aug 25, 2019'
				/>
			</div>
		</div>
		<section className='container px-6 pt-32 mx-auto'>
			<div className='pb-4 text-sm font-black leading-snug tracking-widest text-center uppercase text-yw md:text-lg lg:text-2xl'>
				Awards
			</div>
			<p className='px-4 mb-8 text-base leading-relaxed text-left md:px-8 lg:px-12 md:text-lg lg:text-xl md:mb-12 text-l1'>
				At Grell Roofing, our commitment to community involvement aligns with our corporate values. We are in the
				business of making life easier through our products and services and through our commitment to giving back to
				the communities in which we live, work, and do business.
			</p>
			<div className='pb-16'>
				<div className='container px-6 m-auto text-l1 md:px-12 xl:px-0'>
					<div className='grid gap-6 lg:grid-cols-7'>
						<div className='lg:col-span-3'>
							<Awards
								img='https://grell.s3.us-east-2.amazonaws.com/Press/Award2023.jpg'
								title='Five-time Golden Eagle Award Winer'
								subtitle=''
							/>
						</div>
						<div className='lg:col-span-2'>
							<Awards
								img='https://grell.s3.us-east-2.amazonaws.com/Press/ChairmanAward2023.jpeg'
								title=''
								subtitle=''
							/>
						</div>
						<div className='lg:col-span-2'>
							<Awards
								img='https://grell.s3.us-east-2.amazonaws.com/Press/ReadersChoice.jpg'
								title="Repeat Reader's Choice Winner"
								subtitle=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);

export default About;


const SecMotion = {
	initial: { y: -10, scale: 0.7, opacity: 0 },
	animate: { y: 0, scale: 1, opacity: 1, transition: { duration: 1.3, delay: 1 }, staggerChildren: 0.8 },
	exit: { opacity: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};