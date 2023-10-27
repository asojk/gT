import React from 'react'
import {Link} from 'react-router-dom'
import {UserIcon, NewI, ActivityIcon, ProductsI} from '../Components/hoc/iconsR'

const Press = () => {
	/*TODO: Add a download button for the logo, and a download button for the images.*/
	return (
		<>
			<section className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/WebPics/Office2.avif)] shadow-edge bg-cover bg-center bg-no-repeat'>
				<div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>
				<div className='relative max-w-screen-xl px-8 py-32 mx-auto md:py-36 lg:py-48 sm:px-10 lg:flex lg:items-center lg:px-12'>
					<header className='text-center'>
						<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl'>
							Grell Brand Resources
						</div>
						<h2 className='mb-8 text-4xl font-bold leading-none tracking-tight text-center text-white md:text-7xl'>
							Press Kit
						</h2>
					</header>
				</div>
			</section>

			<section className='relative max-w-screen-xl px-8 py-16 mx-auto sm:px-16 lg:flex lg:items-center lg:justify-around lg:py-24'>
				<div className='max-w-5xl px-8 pb-8 mx-auto'>
					<div className='flex items-center justify-center space-y-4 mb-8'>
						<div className='rounded-t sm:rounded-l sm:rounded-t-none shadow-nimble h-fit w-3/4 p-4'>
							<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-white md:text-lg lg:text-2xl'>
								Logo
							</div>
							<p className='text-base text-l1'>
								For most occassions, you can right click the logo at the top of
								the page and save or download it as an .SVG file.
								<br></br>
								<br></br>Otherwise,{' '}
								<a className='link link-hover text-blue' href=''>
									click here
								</a>{' '}
								to download a .zip file containing the logo in the following
								formats:<br></br>
								<br></br>
							</p>
							<div className='collapse bg-d7'>
								<input type='checkbox' />
								<div className='collapse-title text-small text-l3 font-medium'>
									Information on Formats
								</div>
								<div className='collapse-content'>
									<ul className='list-none space-y-2 text-sm text-l5'>
										<li>
											-<a className='text-white font-black'>JPEG</a>: Raster
											format for photos and images with complex colors. Best for
											web, email, and social media.
										</li>
										<li>
											-<a className='text-white font-black'>PNG</a>: Raster
											format with transparency support. Best for web design,
											online presentations, and digital use.
										</li>
										<li>
											-<a className='text-white font-black'>SVG</a>: Vector
											format for responsive web design. Best for web design,
											mobile apps, and digital use.
										</li>
										<li>
											-<a className='text-white font-black'>EPS</a>: Vector
											format for printing and high-resolution applications.
										</li>
										<li>
											-<a className='text-white font-black'>PDF</a>: Versatile
											format for preserving fonts, images, and layout. Best for
											printing and sharing.
										</li>
										<li>
											-<a className='text-white font-black'>AI</a>: Vector
											format editable in Adobe Illustrator. Best for logo design
											and editing, professional printing.
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='shadow-nimble h-fit w-1/4 p-2'>
							<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-white md:text-lg lg:text-2xl'>
								Colors
							</div>
							<div className='flex flex-wrap'>
								<div className='fill-r h-full w-full bg-r text-white text-center p-2 m-2 rounded'></div>
								<div className='text-white pt-2 pb-2 pl-2'>
									<ul className='list-disc list-inside'>
										<li>#FF3333</li>
										<li>255, 51, 51</li>
										<li>0, 80, 80, 0</li>
									</ul>
								</div>
							</div>
							<div className='flex flex-wrap'>
								<div className='fill-yw h-3/4 w-full bg-yw text-white text-center p-2 m-2 rounded'></div>
								<div className='text-white pt-2 pb-2 pl-2'>
									<ul className='list-disc list-inside'>
										<li>#FFCC33</li>
										<li>255, 204, 51</li>
										<li>0, 20, 80, 0</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='rounded-b sm:rounded-b-none shadow-nimble h-fit p-4'>
						<div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-white md:text-lg lg:text-2xl'>
							Images
						</div>
						<div className='grid grid-cols-2 grid-rows-2 gap-4 pb-8'>
							<div className='rounded-xl w-full h-32 overflow-hidden'>
								<img
									className='w-full h-full object-contain hover:scale-110 transition-all duration-300'
									src='https://grell.s3.us-east-2.amazonaws.com/staff/erica.jp2'
									alt='Owner'
								/>
							</div>
							<div className='rounded-xl w-full h-32 overflow-hidden'>
								<img
									className='w-full h-full object-contain hover:scale-110 transition-all duration-300'
									src='/favicon256.ico'
									alt='Favicon'
								/>
							</div>

							<div className='rounded-xl w-full h-32 overflow-hidden'>
								<img
									className='w-full h-full object-contain hover:scale-110 transition-all duration-300'
									src='https://grell.s3.us-east-2.amazonaws.com/staff/team.jpeg'
									alt='Team'
								/>
							</div>
							<div className='rounded-xl w-full h-32 overflow-hidden'>
								<img
									className='w-full h-full object-contain hover:scale-110 transition-all duration-300'
									src='https://grell.s3.us-east-2.amazonaws.com/WebPics/Office2.avif'
									alt='Office'
								/>
							</div>
						</div>
						<span className='text-center text-l1'>
							<a className='link link-hover text-blue' href=''>
								Click here
							</a>{' '}
							to download these images.
						</span>
					</div>
					<p className='pl-8 pt-16 text-base text-l1'>
						See other pages for more information:
					</p>
					<div className='grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-1 gap-4 p-4 pt-4'>
						<a className='w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-d7'>
							<Link to='/about'>
								<div className='absolute inset-0 bg-gradient-to-b from-red9 to-red7 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300' />
								<UserIcon
									color='#ccc'
									className='absolute z-10 transition-transform duration-300 -top-1 -right-1 w-[7.5rem] h-[7.5rem] md:text-9xl text-d6 group-hover:stroke-[.25px] group-hover:stroke-black/20 group-hover:text-r group-hover:-translate-y-6 group-hover:rotate-12'
								/>
								<h3 className='relative z-10 pt-2 text-lg font-black text-white duration-300 md:text-3xl'>
									ABOUT US
								</h3>
							</Link>
						</a>
						<a className='w-full p-4 rounded-2xl border-[1px] border-b3 relative overflow-hidden group shadow-nimble bg-d7'>
							<Link to='/impact'>
								<div className='absolute inset-0 bg-gradient-to-b from-red9 to-red7 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300' />
								<ActivityIcon
									color='#ccc'
									className='absolute z-10 transition-transform duration-300 -top-1 -right-1 w-[7.5rem] h-[7.5rem] md:text-9xl text-d6 group-hover:stroke-[.25px] group-hover:stroke-black/20 group-hover:text-r group-hover:-translate-y-6 group-hover:rotate-12'
								/>
								<h3 className='relative z-10 pt-2 text-lg font-black text-white duration-300 md:text-3xl'>
									SOCIAL IMPACT
								</h3>
							</Link>
						</a>
					</div>
					<div className='p-4'>
						<p>
							For more information, please contact our media specialist at
							<a
								className='link link-hover text-blue'
								href='mailto:alex@grell.pro'>
								alex@grell.pro
							</a>
							.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default Press
