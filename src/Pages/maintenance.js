import React from "react";
import { Helmet } from "react-helmet";
import { FAQTab } from '../Faq/faqTab';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSend, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { Tooltip } from '@material-tailwind/react';


const MaintServices = ({ Service }) => (
	<div className='w-full px-2 sm:w-1/2'>
		<div className='flex h-full'>
			<div className='flex w-full'>
				<svg
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1}
					className='flex-shrink-0 w-4 h-4 mt-2 mr-3 text-r'
					viewBox='0 0 24 24'>
					<path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
					<path d='M22 4L12 14.01l-3-3' />
				</svg>
				<span className='text-base leading-relaxed text-left text-l1 md:text-lg lg:text-xl'>{Service}</span>
			</div>
		</div>
	</div>
);

const MaintSigns = ({Sign}) => (
  <div className="w-full p-2 sm:w-1/2">
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-2 text-2xl text-r">»</div>

    <span className="text-l3">{Sign}</span>
  </div>
</div>
);

function Maintenance() {

return (
	<>
		<section className="pt-32 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] bg-cover shadow-edge bg-center bg-no-repeat">
			<div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/90 sm:to-black/25 sm:bg-gradient-to-r"></div>

			<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:pt-64 sm:px-8 lg:flex h-content">
				<div className="max-w-2xl text-center sm:text-left">
					<div className="text-base font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl">
						Licensed, bonded, insured
					</div>
					<h1 className="mb-8 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl">
						Flat Roof Maintenance Program
					</h1>
					<p className="max-w-xl mt-4 text-white sm:text-xl/relaxed">
						As commercial property owners ourselves, we realize that managing
						roof maintenance can be a time-consuming task. If you're unsure
						about how to handle it, leave it to us by enrolling in a
						personalized maintenance program.
					</p>
				</div>
			</div>
		</section>

		<section className="relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24">
			<div className="max-w-5xl px-8 mx-auto">
				<header className="text-center">
					<div className="text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-md lg:text-xl">
						Notice a Leak?
					</div>
					<h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">
						Maintenance Services
					</h2>
				</header>
				<p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">
					As a Midwest-based company, we understand the harsh impact of winters
					and summers on roofs, no matter how sturdy they may be. Our
					comprehensive maintenance services cater to almost any situation you
					may encounter.
				</p>
				<p className="pb-2 text-base font-bold leading-relaxed text-left text-white md:text-lg lg:text-xl">
					These services include:
				</p>
				<div className="flex flex-wrap">
					<MaintServices Service="Free yearly inspection & cleaning" />
					<MaintServices Service="Protect your capital investment" />
					<MaintServices Service="Prevent employee accidents" />
					<MaintServices Service="Protect the inside of your facility" />
					<MaintServices Service="Prevent leaks" />

					<MaintServices Service="Prevent production delays" />
					<MaintServices Service="Prevent loss of inventory" />
					<MaintServices Service="No hassle or work for you" />

					<MaintServices Service="Peace of mind" />
				</div>
				<p className="pt-8 text-base leading-relaxed text-left text-l1 md:text-lg lg:text-xl">
					Keep your building protected and contact us today to learn more or
					sign up for one of our flat roof maintenance contracts.
				</p>
			</div>
		</section>

		<section className="relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24">
			<div className="max-w-5xl px-8 mx-auto">
				<header className="text-center">
					<div className="text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-md lg:text-xl">
						Maintenance Services
					</div>
					<h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">
						What to Expect
					</h2>
				</header>

				<p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">
					At Grell Roofing, we believe in proactive care. That's why we offer an
					annual inspection service, with a semi-annual option available in
					certain cases. Our timely inspections followed by comprehensive
					reports help you identify and address any roofing issues swiftly and
					efficiently. We aim to provide you with peace of mind, save you
					valuable time and money, and help you cross one more worry off your
					list.
				</p>
				<p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">
					Our maintenance program includes a complimentary basic preventative
					maintenance inspection each year, ensuring your roof is always in
					optimal condition. When our technicians visit your property for an
					inspection, you can expect them to:
				</p>
				<div className="flex flex-wrap pt-4 pb-8">
					<MaintServices Service="Conduct a thorough inspection of critical areas of your roof" />
					<MaintServices Service="Clean environmental debris from waterways to enhance drainage" />
					<MaintServices Service="Provide a detailed report of any damages or maintenance issues that need attention" />
				</div>
				<p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">
					With Grell Roofing, maintaining your flat roof becomes effortless. Our
					yearly inspections allow you to stay ahead of potential issues,
					ensuring your business is always protected.
				</p>
				<p className="mb-2 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">
					Contact us today to learn more about our maintenance program and how
					it can benefit your business.
				</p>
				<Link to="/contact" smooth={true} duration={500}>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ duration: 0.225, ease: "easeIn" }}
						className="px-4 py-2 text-base font-black leading-relaxed text-center uppercase rounded-lg cursor-pointer xl:mt-6 md:text-lg lg:text-xl text-l1 shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-1 focus:ring-rd2 active:bg-rl"
					>
						Contact
					</motion.button>
				</Link>
			</div>
		</section>

		<section className="relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24">
			<div className="max-w-5xl px-8 mx-auto">
				<header className="text-center">
					<div className="text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-md lg:text-xl">
						24/7 Emergency Flat Roof Repair Services
					</div>
					<h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">
						Emergency Repairs
					</h2>
				</header>
				<p className="mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1">
					At Grell, we always strive to serve our customers as quickly and
					efficiently as possible. We understand, though, that some issues can
					not wait even a day. That is why we offer a 24/7 emergency flat roof
					repair services for situations that are serious safety hazards. If you
					need immediate assistance, call today.
				</p>
				<section className="flex flex-col">
					<span className="grid grid-cols-2 gap-8 place-items-center">
						<Tooltip
							className="p-2 md:text-l3 "
							placement="bottom"
							content="Call (800)-208-9693"
							animate={{
								mount: { scale: 1, y: 0 },
								unmount: { scale: 0, y: 25 }
							}}
						>
							<a
								href="tel:+18002089693"
								className={` relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]  border-rA px-4 py-2 font-semibold text-r transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-r before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}
							>
								<FiPhone className="mr-2 text-xl lg:text-2xl" />
								<span className="text-xl lg:text-2xl">Call Now</span>
							</a>
						</Tooltip>
						<Tooltip
							className="p-2 text-l3"
							placement="bottom"
							content="Text (515) 227-6367"
							animate={{
								mount: { scale: 1, y: 0 },
								unmount: { scale: 0, y: 25 }
							}}
						>
							<a
								href="sms:+15152276367"
								className={` relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]  border-rA px-4 py-2 font-semibold text-r transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-r before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}
							>
								<FiMessageCircle className="mr-2 text-xl lg:text-2xl" />
								<span className="text-xl lg:text-2xl">Text Instead</span>
							</a>
						</Tooltip>
					</span>
				</section>
			</div>
		</section>

		<section className="relative max-w-3xl px-8 py-16 mx-auto sm:px-16 lg:items-center lg:justify-around lg:pt-24">
			<h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl">
				FAQ
			</h2>
			<FAQTab tabName="Maintenance" />
		</section>
	</>
);
}

export default Maintenance;
