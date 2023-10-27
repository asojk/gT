import React from "react";
import { Helmet } from "react-helmet";
import { FAQTab } from '../Faq/faqTab';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewRoof = () => {
  return (
		<>
			<section className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/finishedroof.jpg)] bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>
				<div className='relative max-w-screen-xl px-4 pt-32 mx-auto sm:px-6 lg:flex md:h-[50vh] lg:items-center lg:px-8'>
					<div className='max-w-2xl text-center sm:text-left'>
						<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl'>
							Installation you can trust
						</div>
						<h1 className='mb-6 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>
							New Construction
						</h1>
						<p className='max-w-lg pb-16 mt-4 md:pb-24 sm:text-xl/relaxed text-l1'>
							We have over 30 years of experience in flat and low-slope installations throughout the Midwest and will
							ensure the entire process goes as smoothly as possible.
						</p>
					</div>
				</div>
			</section>
			<section className='relative max-w-screen-xl px-8 py-16 mx-auto sm:px-16 lg:flex lg:items-center lg:justify-around lg:py-24'>
				<div className='relative z-10 max-w-5xl px-8 pb-8 mx-auto rounded-2xl'>
					<header className='text-center'>
						<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-lg lg:text-2xl'>
							We're here to help
						</div>
						<h2 className='mb-12 text-2xl font-bold leading-none tracking-tight text-white md:text-5xl'>
							Choosing the Right Flat Roof
						</h2>
					</header>

					<p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl md:mb-12 text-l1'>
						At Grell Roofing, we pride ourselves on staying at the forefront of commercial roofing technologies. Our
						expertise allows us to recommend the most efficient and effective roofing solutions for each unique project.
					</p>
					<p className='mb-12 text-base leading-relaxed text-left md:text-lg lg:text-xl md:mb-16 text-l1'>
						Modern commercial roofing products offer high resistance to temperature extremes and enhance environmental
						efficiency. The choice of a commercial roofing system should be guided by the type of facility and the
						specific needs of your business.
					</p>
					<h2 className='mb-12 text-2xl font-bold leading-none tracking-tight text-white md:text-4xl'>The Basics</h2>
					<p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl md:mb-12 text-l1'>
						Commercial roofs can be classified into three categories, each requiring different materials.
						<div className='pt-6 pb-2 text-sm tracking-normal indent-8 font-semi-bold text-yw md:text-lg lg:text-2xl'>
							Primary Categories:
						</div>
						<ul className='py-2 list-disc list-inside indent-12'>
							<li>flat</li>
							<li>low slope</li>
							<li>steep slope</li>
						</ul>
						<div className='pt-6 pb-2 text-sm tracking-normal font-semi-bold text-yw md:text-lg indent-8 lg:text-2xl'>
							Most Common Systems:
						</div>
						<ul className='py-2 list-disc list-inside indent-12'>
							<li>single-ply roofing</li>
							<li>modified bitumen roofing</li>
							<li>built-up roofing</li>
							<li>metal roofs</li>
							<li>liquid applied roofing</li>
							<li>roof coating systems</li>
						</ul>
					</p>
					<h2 className='mb-4 text-2xl font-bold leading-none tracking-tight text-white md:text-4xl'>Further</h2>
					<p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl md:mb-12 text-l1'>
						To further optimize the energy efficiency of commercial roofs and lower utility bills, we recommend the use
						of insulation and cover boards. When replacing a roof, it's advisable to add insulation. Single-ply membrane
						systems, including thermoset and thermoplastic membranes, offer flexibility and resistance to weathering.
						Various attachment methods are used for single-ply roofing.
					</p>
					<p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl md:mb-12 text-l1'>
						Whether you are updating commercial buildings or embarking on new construction projects, the type of
						commercial roof you choose can greatly impact long-term costs.{' '}
						<Link to='/contact'>
							<a className='text-r'>Contact Grell</a>
						</Link>{' '}
						to learn more about the best types of commercial roofing for your specific building, based on your needs and
						the design of the structure.
					</p>
					<div className='mb-4 text-2xl font-bold leading-none tracking-tight text-white md:text-4xl'>
						What is the best commercial roofing material?
					</div>
					<p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl md:mb-12 text-l1'>
						While we recommend investing in durable commercial roofing systems that provide long-lasting protection, the
						ideal choice for your business may depend on several factors. Property investors should consider variables
						such as local weather patterns, aesthetic preferences, maintenance requirements, and the need for roof
						accessibility. At Grell, we're here to guide you through these considerations and help you make the best
						decision for your business.
					</p>
					<p className='mt-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>Schedule your</p>
					<Link to='/contact' smooth={true} duration={500}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.225, ease: 'easeIn' }}
							className='px-4 py-2 text-base font-black leading-relaxed text-center uppercase rounded-lg cursor-pointer xl:mt-2 md:text-lg lg:text-xl text-l1 shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-1 focus:ring-rd2 active:bg-rl'>
							free estimate
						</motion.button>
					</Link>
				</div>
			</section>
			<section className='relative max-w-5xl px-8 py-16 mx-auto sm:px-16 lg:items-center lg:justify-around lg:py-24'>
				<h2 className='pl-8 mb-4 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>FAQ</h2>
				<FAQTab tabName='General' />
			</section>
		</>
	);};export default NewRoof;
