import React from "react";
import { Link } from "react-router-dom";

import { Bank, Hotel, County, Fed, School, Mall, Industry, Med, Office, Res, Rest, Buis } from './drawings.jsx';
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";

const ExpCard = ({ Icon, description }) => {
	const [hovered, setHovered] = React.useState(false);
	const spring = useSpring({
		transform: hovered ? 'translateY(0%)' : 'translateY(100%)',
		config: { tension: 0, friction: 10 },
	});

	return (
		<div
			className="relative items-center content-center -p-8 overflow-hidden text-center transition-colors duration-200 transform cursor-pointer group hover:bg-d7 hover:z-2 rounded-2xl"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{
				width: "70%",
				height: "70%",
				preserveAspectRatio: "xMidYMid meet"
			}}
		>
			<Icon
				className="w-full h-auto fill-red5"
				style={{
					width: "100%",
					height: "auto",
					preserveAspectRatio: "xMidYMid meet"
				}}
			/>
			<animated.div
				className="text-sm leading-relaxed text-white bg-d7 md:text-lg lg:text-xl exp-description"
				style={spring}
			>
				{description}
			</animated.div>
		</div>
	);
};

const Expertise = () => {
	return (
		<>
			<section className="max-w-screen-xl px-4 pt-24 mx-auto lg:px-8">
				<h2 className="p-4 mb-6 text-2xl font-bold text-white rounded-md md:mb-12 md:text-4xl">
					Cross-Industry <span className="text-r"> Expertise</span>
				</h2>
				<p className="pb-12 text-base leading-relaxed text-left text-l1 md:text-lg lg:text-xl">
					No matter the size or shape of your flat or low-sloped roof, we are
					<a className="font-black text-yw"> confident </a> that we can
					take care of you. Our team is experienced in working with all parties
					including building owners, architects, and specifiers to make sure the
					re-roofing process goes as quickly and smoothly as possible.
				</p>
				<div className="mx-auto fill-red5">
					<div className="relative grid grid-rows-5 mt-12 md:mt-24 z-1 -p-2 h-[16rem] lg:h-[24rem]">
						<div className="relative grid grid-cols-5 -mt-24">
							<div className="relative z-0"></div>
							<ExpCard Icon={Mall} description="Shopping" />
							<div className="relative z-0"></div>
							<ExpCard Icon={Office} description="Offices" />
							<div className="relative z-0"></div>
						</div>
						<div className="relative grid grid-cols-5 -mt-24">
							<ExpCard Icon={Bank} description="Banks" />
							<div className="relative z-0"></div>
							<ExpCard Icon={Med} description="Medical" />
							<div className="relative z-0"></div>
							<ExpCard Icon={Hotel} description="Hotels" />
						</div>
						<div className="relative grid grid-cols-5 -mt-24">
							<div className="relative z-0"></div>
							<ExpCard Icon={County} description="City & County" />
							<div className="relative z-0"></div>
							<ExpCard Icon={Buis} description="Small Business" />
							<div className="relative z-0"></div>
						</div>
						<div className="relative grid grid-cols-5 -mt-24">
							<ExpCard Icon={Industry} description="Manufacturing" />
							<div className="relative z-0"></div>
							<ExpCard Icon={Rest} description="Restaurants" />
							<div className="relative z-0"></div>
							<ExpCard Icon={Res} description="Residential" />
						</div>
						<div className="relative grid grid-cols-5 -mt-24">
							<div className="relative z-0"></div>
							<ExpCard Icon={School} description="K-12" />
							<div className="relative z-0"></div>
							<ExpCard Icon={Fed} description="Federal" />
							<div className="relative z-0"></div>
						</div>
					</div>
				</div>
				<div className="pt-6 m-auto max-w-screen-2xl xl-container text-l1 mb-24">
					<Link to="/projects">
						<span className="relative inline-flex text-sm ">
							<a
								className={`cursor-pointer relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]  border-white px-4 py-2 font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-r before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}
							>
								View our Projects
							</a>
						</span>
					</Link>
				</div>
			</section>
		</>
	);
};

export default Expertise;
