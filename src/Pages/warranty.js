import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export default function WarrantyGrid() {
  return (
		<>
			<section className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] shadow-nimble bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>

				<div className='relative max-w-screen-xl px-4 pt-64 pb-12 mx-auto lg:pt-80 sm:px-6 lg:flex h-content lg:items-center lg:px-8'>
					<div className='max-w-5xl text-center sm:text-left'>
						<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl'>
							Protect Your Investment
						</div>
						<h1 className='mb-6 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>
							Warranty Information
						</h1>
						<p className='max-w-lg pb-12 mt-4 text-base leading-relaxed text-left text-white md:text-lg lg:text-xl'>
							The best way to ensure a long-lasting, watertight roof is to protect your investment with routine
							housekeeping and inspection.
						</p>
					</div>
				</div>
			</section>
			<section className='relative max-w-[85rem] py-12 mx-auto sm:px-12 lg:flex lg:py-16'>
				<div className='max-w-5xl mx-auto'>
					<header className='text-center'>
						<div className='text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-md lg:text-xl'>
							Protecting your investment
						</div>
						<h2 className='mb-8 text-3xl font-bold leading-none tracking-tight text-center text-white md:text-5xl'>
							Emergency Repairs
						</h2>
					</header>
					<p className='pb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
						Grell works with Duro-Last to provided expanded warranty options. Duro-Last® leads the roofing industry
						with comprehensive warranty coverage, including 25- and 30-year options, providing unparalleled protection
						for commercial roofing applications. With warranty options that include material and labor coverage as well
						as hail and/or high wind protection, we have a level of coverage right for any job.
					</p>
				</div>
			</section>
			<section className='max-w-[85rem] px-4 pt-8 pb-8 lg:pt-12 sm:px-6 lg:px-8 mx-auto '>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					<div className='p-6 bg-transparent border border-transparent group sm:p-8 rounded-3xl'>
						<div className='relative mt-6'>
							<h3 className='text-2xl font-semibold leading-none tracking-tight text-white md:text-4xl'>Samples</h3>
							<div className='pt-8 pb-4 space-y-4 text-base leading-relaxed list-disc md:text-lg text-r'>
								<a
									href='/assets/basic_20_yr_ndl.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='list-item hover:underline'>
									Basic 20 Year NDL
								</a>
								<a
									href='/assets/supreme_15_yr_ndl.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='list-item hover:underline'>
									Supreme 15 Year NDL
								</a>
								<a
									href='/assets/supreme_20_yr_ndl_15_5_material_labor.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='list-item hover:underline'>
									Supreme 20 Year NDL 15/5 Material Labor
								</a>
								<a
									href='/assets/supreme_20_yr_ndl_15_5_material.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='list-item hover:underline'>
									Supreme 20 Year NDL 15/5 Material
								</a>
							</div>
							<p className='pt-2 text-base leading-relaxed md:text-lg text-l1'>
								Please Note - Your warranty may differ from these, as we do our best to tailor each warranty to your
								specific needs.
							</p>
						</div>
					</div>

					<a href='/assets/Maintenance_Checklist.pdf' className='block' target='_blank' rel='noopener noreferrer'>
						<div className='p-6 group sm:p-8 rounded-3xl'>
							<div className='relative grid overflow-hidden rounded-xl place-items-center'>
								<Checklist />
							</div>
						</div>
					</a>
					<Link to='/maintenance' className='block'>
						<div className='p-6 bg-transparent border border-transparent group sm:p-8 rounded-3xl hover:border-d3 hover:bg-d7 shadow-transparent hover:shadow-nimbl'>
							<h3 className='pb-8 text-2xl font-semibold leading-none tracking-tight text-center text-white md:text-4xl'>
								Let Us Help
							</h3>
							<div className='relative rounded-xl'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height={667}
									width={1000}
									className='object-cover object-center w-full transition duration-500 h-44 fill-blue-500 group-hover:scale-105'
									fill='none'
									viewBox='0 0 16 16'>
									<path d='M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z' />
									<path d='M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm4.386 1.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' />
								</svg>
							</div>

							<div className='relative mt-6'>
								<p className='pt-2 text-base font-normal leading-relaxed md:text-lg text-l1'>
									<a className='font-black'>Click here to learn more </a>about setting up a maintenance program, which will protect your investment by eliminating costly repairs.
								</p>
							</div>
						</div>
					</Link>
				</div>
			</section>
			<section className='relative max-w-screen-xl py-16 mx-auto sm:px-12 lg:flex lg:py-24'>
				<div className='max-w-5xl px-8 mx-auto'>
					<p className='py-8 text-base leading-relaxed text-left lg:py-12 md:text-lg lg:text-xl text-l1'>
						If you have other questions, you can visit our{' '}
						<Link to='/faq'>
							<a className='italic text-yw'>our FAQ page.</a>
						</Link>
					</p>
				</div>
			</section>
		</>
	);
}


const Checklist = () => {
  return (
		<motion.div
			whileHover='hover'
			transition={{
				duration: 1,
				ease: 'backInOut',
			}}
			variants={{
				hover: {
					scale: 1.05,
				},
			}}
			className='relative p-8 overflow-hidden cursor-pointer bg-none shrink-0'>
			<div className='relative z-10 text-white bg-none'>
				<motion.span
					initial={{ scale: 0.85 }}
					variants={{
						hover: {
							scale: 1,
						},
					}}
					transition={{
						duration: 1,
						ease: 'backInOut',
					}}
					className='text-2xl font-semibold leading-none tracking-tight text-center text-white md:text-4xl'>
					Checklist
				</motion.span>

				<p className='flex pt-4 text-lg'>
					Click here to download our Owners Maintenance & Care Checklist.
				</p>
			</div>
			<Background />
		</motion.div>
	);
};
const Samples = () => {
  return (
		<motion.div
			whileHover='hover'
			transition={{
				duration: 1,
				ease: 'backInOut',
			}}
			variants={{
				hover: {
					scale: 1.05,
				},
			}}
			className='relative p-8 overflow-hidden cursor-pointer bg-d7 bg-none h-96 w-80 shrink-0 rounded-xl'>
			<div className='relative z-10 text-white bg-none'>
				<motion.span
					initial={{ scale: 0.85 }}
					variants={{
						hover: {
							scale: 1,
						},
					}}
					transition={{
						duration: 1,
						ease: 'backInOut',
					}}
					className='my-2 block origin-top-left text-6xl font-black leading-[1.2]'>
					Checklist
				</motion.span>

				<p className='flex pt-4 text-lg'>Click here for the Owners Maintenance & Care Checklist and learn what you can do to help protect your Grell Roofing System.</p>
			</div>
			<Background />
		</motion.div>
	);
};

const Background = () => {
	return (
		<motion.svg
			xmlns='http://www.w3.org/2000/svg'
			height={600}
			viewBox='0 0 24 24'
			width={1000}
			className='object-cover object-center w-full transition duration-500 h-44 fill-r group-hover:scale-105'
			variants={{ hover: { scale: .75, y: 2 } }}
			transition={{ duration: 1, ease: 'backInOut' }}>
			<motion.path
				d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'
				fill='none'
				stroke='white'
				opacity='.3'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				variants={{ hover: { scale: .75, y: 2 } }}
				transition={{ duration: 1, ease: 'backInOut', delay: 0.2 }}
			/>
			<motion.polyline
				points='7 10 12 15 17 10'
				fill='none'
				stroke='white'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				variants={{ hover: { scale: .75, y: 2 } }}
				transition={{ duration: 1, ease: 'backInOut', delay: 0.2 }}
			/>
			<motion.line
				x1='12'
				y1='15'
				x2='12'
				y2='3'
				fill='none'
				stroke='white'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				variants={{ hover: { scale: .75, y: 2 } }}
				transition={{ duration: 1, ease: 'backInOut', delay: 0.2 }}
			/>
		</motion.svg>
	);
};