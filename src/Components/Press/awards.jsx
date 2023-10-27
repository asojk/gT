const Awards = ({ img, title, subtitle }) => {
	return (
		<div className='space-y-4 rounded-3xl bg-transparent border border-transparent hover:border-d3 hover:bg-d7/70 shadow-transparent hover:shadow-nimble px-8 py-12 sm:px-12 lg:px-8'>
			<img src={img} alt='award' loading='lazy' width='900' height='600' />
			<h3 className='text-2xl font-semibold text-white'>{title}</h3>
			<p className='mb-6 text-base leading-relaxed md:text-lg lg:text-xl text-l1'>{subtitle}</p>
		</div>
	);
};

export default Awards;