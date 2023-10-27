import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import About from './Pages/about';
import Faq from './Pages/faq';
import Home from './Pages/home';
import Maintenance from './Pages/maintenance';
import NewRoof from './Pages/new-roof';
import Projects from './Pages/projects';
import Impact from './Pages/impact';
import Repair from './Pages/repair';
import Replacement from './Pages/replacement';
import Warranty from './Pages/warranty';
import Press from './Pages/press.jsx';
import Footer from './Components/hoc/footer';
import Contact from './Components/main/Contact';
import Navbar from './Components/hoc/oNav.jsx';
import BgTwo from './Components/hoc/bgTwo.js';
import './global.css';


export const usePageTracking = () => {
	const location = useLocation();

	useEffect(() => {
		window.gtag('event', 'page_view', {
			page_path: location.pathname + location.search + location.hash,
			page_search: location.search,
			page_hash: location.hash,
		});
	}, [location]);
};


const App = () => {
	const location = useLocation();
	return (
		<AnimatePresence wait>
			<BgTwo />
			<motion.div
				key={location.pathname}
				initial="initialState"
				animate="animateState"
				className="base-page-size"
				transition={{ duration: 1.5 }}
				variants={{
					initialState: {
						opacity: 0.5,
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
					},
					animateState: {
						opacity: 1,
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
					},
					exitState: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }
				}}>
				<Navbar />
				<Routes key={location.key}>
					<Route path="/" element={<Home />} />
					<Route path="contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/new-roof" element={<NewRoof />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/impact" element={<Impact />} />
					<Route path="/repair" element={<Repair />} />
					<Route path="/replacement" element={<Replacement />} />
					<Route path="/warranty" element={<Warranty />} />
					<Route path="/maintenance" element={<Maintenance />} />
					<Route path="/press" element={<Press />} />
				</Routes>
				<Footer />
			</motion.div>
		</AnimatePresence>
	);
}

const root = document.getElementById('app');
createRoot(root).render(
	<Router>
			<App />
	</Router>
);