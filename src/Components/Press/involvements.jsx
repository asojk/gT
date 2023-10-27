import React from 'react'

const Involvements = ({ img, title, subtitle }) => {
	return (
		<div className='group p-6 sm:p-8 rounded-3xl bg-transparent border border-transparent hover:border-d3 hover:bg-d7/70 shadow-transparent hover:shadow-nimbl'>
			<div className='relative overflow-hidden rounded-xl'>
				<img
					src={img}
					alt='involvement'
					loading='lazy'
					width='1000'
					height='667'
					className='h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105'
				/>
			</div>
			<div className='mt-6 relative'>
				<h3 className='text-2xl leading-none tracking-tight md:text-4xl font-semibold text-white'>
					{title}
				</h3>
				<p className='mt-2 mb-8 text-base leading-relaxed md:text-lg lg:text-xl text-gray-300 line-clamp-5'>{subtitle}</p>
			</div>
		</div>
	);
};

export default Involvements