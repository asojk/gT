/** @format */

const Recognition = ({ img, title, subtitle, date, url }) => {
	return (
		<div className='lg:w-3/4 xl:w-2/4 lg:mx-auto'>
			<div className='group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-transparent border border-transparent hover:border-d3 hover:bg-d7/70 shadow-transparent hover:shadow-nimble sm:gap-8 sm:flex transition duration-300 hover:z-10'>
				<div className='sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl'>
					<img
						src={img}
						alt='recognition'
						loading='lazy'
						width='1000'
						height='667'
						className='h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
					/>
				</div>

				<div className='sm:p-2 sm:pl-0 sm:w-4/6'>
					<span className='mt-4 mb-2 inline-block font-medium text-l1 sm:mt-0'>{date}</span>
					<h3 className='text-base leading-relaxed md:text-lg lg:text-xl mb-6 font-semibold text-white'>{title}</h3>
					<a
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className='my-6 text-base leading-relaxed underline lg:text-lg text-y1'>
						{subtitle}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Recognition;