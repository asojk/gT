import React from 'react';
import { motion } from 'framer-motion';
import Involvements from '../Components/Press/involvements.jsx';

const Impact = () => {
	return (
		<>
			<span className='absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-tr from-y9/20 to-y2/20 blur-3xl' />
			<motion.div variants={SecMotion}>
				<section className='relative z-1 max-w-[85rem] px-4 pt-36 md:pt-48 lg:pt-64 xl:pt-80 mx-auto'>
					<div className='px-6 m-auto text-l1 xl:container md:px-12 xl:px-6'>
						<h1 className='mb-6 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>
							Social Impact
						</h1>
						<p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl md:mb-16 text-l1'>
							At Grell Roofing, our commitment to community involvement aligns with our corporate values. We are in the
							business of making life easier through our products and services and through our commitment to giving back
							to the communities in which we live, work, and do business.
						</p>

						<h2 className='text-3xl font-bold text-yw md:text-4xl'>Committed to making lives brighter</h2>
						<p className='mt-12 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
							We focus on initiatives that empower people through programs that encourage improving lives, and we
							partner with organizations that align with our corporate values of giving. By ensuring that our employees
							have a voice in the way we give back to our community, we believe that makes for more meaningful
							fundraising and volunteering. Ultimately, everybody wins: the Grell Roofing works with organizations and
							causes that they’re passionate about—and our community grows stronger with every hour volunteered, and
							every dollar donated.
						</p>
						<p className='mt-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
							Grell works with local communities that it operates in to support the following areas:
						</p>
					</div>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<Involvements
							img='https://grell.s3.us-east-2.amazonaws.com/Press/BikesforTykes.jpg'
							title='Health & Human Services'
							subtitle='including food banks, youth development, and other social services, as well as local hospitals ands clinics, medical research, and patient and family support charities.'
						/>
						<Involvements
							img='https://grell.s3.us-east-2.amazonaws.com/impact/recycle.jpg'
							title='Environmental'
							subtitle='Grell Roofing has always been dedicated to helping our community, our environment, and reducing our carbon footprint wherever we can. Today we want to share with you the opportunity we couldn’t pass up to honor those beliefs! This picture shows material that will be recycled, repurposed, and manufactured into other roofing products that can be utilized in future projects. This is the first of many loads and we believe by the end of our current job we should have over 30,000 pounds of material successfully transported back to Sigourney, Iowa. Does your local flat roofer believe in reducing landfill waste? We do!'
						/>
						<Involvements
							img='https://grell.s3.us-east-2.amazonaws.com/impact/vets-bows.jpg'
							title='Veterans'
							subtitle='And another pair of Dust-off Project bows left the Sticks & Stones Archery Shop tonight with a pair of Army
						Combat Veterans. Tyler Holthaus (green hoodie) started his Military Career in 2009 as a 91B Wheeled Vehicle
						Mechanic. He deployed to Baghram Air Field, Afghanistan in support of OEF 10-11 and conducted vehicle
						recovery operations. Tyler was also a former volunteer firefighter. He currently supports the Veteran
						community as a member of the Hometown Heroes Outdoors field staff; a great veteran based nonprofit that
						takes Veterans and their families on hunting and fishing trips. Tyler is the reciepient of a new Martin
						Axxon 36, and is our first reciepient to receive his bow because of monetary donations from generous
						supporters. His bow was funded by Grell Roofing of Fort Dodge, Iowa. Sean Rohret (green jacket) served 14
						years in the Iowa Army National Guard as an 11B Infantryman, and retired at the rank of E6 Staff Sergeant.
						He also completed air assault school. Sean has deployed to Egypt, Iraq (more on that later), and
						Afghanistan. While deployed to Iraq in 2006 Sean recieved a Purple Heart award when the Up armored Humvee he
						was driving struck and IED consisting of three 155mm HE Artillery Shells with the rear driver side wheel.
						Sean was medevaced to Germany and Eventually Walter Reed Military Hospital in Washington, DC. He suffered 55
						broken bones to include his spine in 8 places and 12 ribs, 14 pieces of shrapnel in various locations
						removed, spleen removal, various other injuries, and at one point in the evacuation process had to be
						revived on the operating table several (3 I believe) times. He went on to reenlist after being released from
						medical care and deployed to Afghanistan in 2010 with the 1-133 IN Ironman Battalion and actually completed
						this deployment to the end. Sean is not active in any Veterans organizations at this time, but regularly
						connects with many of his Army family members, including myself. Sean took home a PSE Beast EVO bow donated
						by David Adams. Thank you gentlemen for your Service.'
						/>
					</div>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<Involvements
							img='https://grell.s3.us-east-2.amazonaws.com/Press/racecar.jpeg'
							title='Ambitions'
							subtitle='Grell sponsors local racecar driver Myles Michehl in the IMCA Sport Mod division. Myles is a 3rd generation driver and has been racing since he was 14 years old. He has won 2 track championships and 2 state championships. He is currently a senior at Fort Dodge Senior High and plans to attend Iowa Central Community College in the fall.'
						/>
						<Involvements
							img='https://grell.s3.us-east-2.amazonaws.com/Press/DinnerSponsor.jpg'
							title='Athletics'
							subtitle='When the Fort Dodge softball team won a bid to state 🥳, Grell helped out by sponsoring their State send off dinner.'
						/>
						<Involvements
							img='https://grell.s3.us-east-2.amazonaws.com/impact/icecream.jpg'
							title='& More'
							subtitle='Grell aims to support NGOs working in disaster relief, peace, and human rights, and educationally-focused organizations that provide support for students, teachers, and parents. Grell also supports individuals via scholarships and financial aid services.'
						/>
					</div>
				</section>
			</motion.div>
		</>
	);
};

export default Impact;

const SecMotion = {
	initial: { y: -10, scale: 0.7, opacity: 0 },
	animate: { y: 0, scale: 1, opacity: 1, transition: { duration: 1.3, delay: 1 }, staggerChildren: 0.8 },
	exit: { opacity: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};