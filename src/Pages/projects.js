/** @format */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Projects = () => {
	useEffect(() => {
		const ccShowcaseRoot = document.getElementById('companycam-showcase-root');
		if (!ccShowcaseRoot || !window.fetch) {
			return;
		}
		const ccShowcaseRootParent = document.getElementsByTagName('body')[0];
		const ccShowcaseScript = document.createElement('script');
		ccShowcaseScript.src = 'https://showcase.companycam.com/bundle.js';
		ccShowcaseScript.type = 'text/javascript';
		ccShowcaseRootParent.appendChild(ccShowcaseScript);
	}, []);

	return (
		<>
			<section className="relative max-w-[85rem] px-4 pt-36 md:pt-48 lg:pt-64 xl:pt-80 mx-auto lg:items-center lg:justify-around">
				<div className="relative z-10 max-w-3xl px-8 mx-auto rounded-2xl">
					<header className="text-center">
						<div className="pb-4 text-sm font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl">
							Our work speaks for itself
						</div>
						<h1 className="mb-8 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl lg:text-5xl">
							Projects
						</h1>
					</header>
					<p className="mb-8 text-base leading-relaxed text-l1">
						With nearly four decades of experience and over 12 million square
						feet of roofing application, Grell Roofing has successfully met the
						commercial and industrial roofing needs of Iowa and the Upper
						Midwest. Now, we are expanding our horizons and taking on projects across the country.
					</p>
					<p className="mb-8 text-base leading-relaxed text-l1">
						Check out our ongoing and completed projects below.
					</p>
				</div>
			</section>

			<section className="Center-Container is-Flexbox">
				<div
					className="p-0"
					data-showcase-id="bd0fbd6f-4168-45d7-a25c-0bba7e9817e2"
					id="companycam-showcase-root"
				/>
			</section>
		</>
	);
};

export default Projects;
