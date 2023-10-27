import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Cbuttons from './cbuttons';
import { FiHome } from 'react-icons/fi';
import { ActivityIcon, FlashIcon} from '../hoc/iconsR';
import {IconContext} from 'react-icons';
import { VscNewFile, VscArrowSwap } from 'react-icons/vsc';
import {BsTools, BsShieldCheck, BsBuildingGear} from 'react-icons/bs';
import {CgProfile } from 'react-icons/cg';
import {FaQuestionCircle} from 'react-icons/fa';

function SideBar({ isOpen, onClose }) {
	const node = useRef();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (node.current.contains(e.target)) {
				return;
			}
			onClose();
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose]);

return (
	/*TODO edit hover?*/
<AnimatePresence>{isOpen && (
<motion.nav ref={node} variants={sidebarVariants} initial='closed' animate='open' exit='closed' className='fixed top-0 left-0 h-screen max-h-screen overflow-auto border-r-2 w-content shadow-glow bg-gradient-to-r from-d8 to-d7/75 via-d7 backdrop-blur-lg rounded-r-2xl border-b3 z-[99]'>
		<motion.div variants={menuVariants} className='flex items-center w-full h-full px-2 lg:px-4'>
			<ul className='flex flex-col h-fit gap-2 z-[99]'>

				<div className='hidden w-full pl-2 text-sm lg:text-sm text-w4 md:block'>Services</div>
				<MenuItem icon={<IconContext.Provider value={{color: '#ffcc33', className: 'mr-2 md:mr-3 lg:mr-4 w-6 h-6 md:w-8 md:h-8'}}>
						<VscNewFile /></IconContext.Provider>}
					title='Building New' to='/new-roof' onClick={onClose} />
				<MenuItem icon={<IconContext.Provider value={{color: '#ffcc33', className: 'mr-2 md:mr-3 lg:mr-4 w-6 h-6 md:w-8 md:h-8'}}>
						<BsTools /></IconContext.Provider>}
					title='Repair' to='/repair' onClick={onClose} />
				<MenuItem icon={<IconContext.Provider value={{color: '#ffcc33', className: 'mr-2 md:mr-3 lg:mr-4 w-6 h-6 md:w-8 md:h-8'}}>
						<VscArrowSwap /></IconContext.Provider>}
					title='Replacement' to='/replacement' onClick={onClose} />

				<div className='hidden w-full pt-4 pl-2 text-sm lg:text-sm text-w4 md:block'>Information</div>
				<MenuItem icon={<IconContext.Provider value={{color: '#2461ff', className: 'mr-2 md:mr-3 lg:mr-4 w-6 h-6 md:w-8 md:h-8'}}>
						<BsBuildingGear /></IconContext.Provider>}
					title='Maintenance' to='/maintenance' onClick={onClose} />
				<MenuItem icon={<IconContext.Provider value={{color: '#2461ff', className: 'mr-2 md:mr-3 lg:mr-4 w-6 h-6 md:w-8 md:h-8'}}>
						<BsShieldCheck /></IconContext.Provider>}
					title='Warranty' to='/warranty' onClick={onClose} />
				<MenuItem icon={<IconContext.Provider value={{color: '#2461ff', className: 'mr-2 md:mr-3 lg:mr-4 w-6 h-6 md:w-8 md:h-8'}}>
						<FaQuestionCircle /></IconContext.Provider>}
					title='FAQ' to='/faq' onClick={onClose} />
				
				<div className='hidden w-full pt-4 pl-2 text-sm lg:text-sm text-w4 md:block'>About</div>
				<MenuItem icon={<IconContext.Provider value={{color: '#ff3333', className: 'mr-2 md:mr-3 lg:mr-4 w-6 h-6 md:w-8 md:h-8'}}>
						<CgProfile /></IconContext.Provider>}
					title='About Grell' to='/about' onClick={onClose} />
				<MenuItem
					icon={<FlashIcon color="#ff3333" className="w-6 h-6 mr-2 md:mr-3 lg:mr-4 md:w-8 md:h-8" />}
					title='Projects' to='/projects' onClick={onClose} />
				<MenuItem
					icon={<ActivityIcon color="#ff3333" className="w-6 h-6 mr-2 md:mr-3 lg:mr-4 md:w-8 md:h-8" />}
					title='Social Impact' to='/impact' onClick={onClose} />

				<div className='flex justify-center h-4 md:h-4 lg:h-8'></div>
				<div className='flex justify-center'>
				<MenuItem onClick={onClose} to='/' icon={<FiHome className='w-6 h-6 mr-2 md:mr-3 lg:mr-4 md:w-8 md:h-8' />} title='Home'  />
				</div>

				<div className='sm:absolute display-block sm:bottom-8 right-6 md:hidden'>

							<Cbuttons />

					</div>
			</ul>
		</motion.div>
</motion.nav>
)}</AnimatePresence>);}



export default SideBar;

const MenuItem = ({ to, title, icon, onClick }) => (
<Link to={to} onClick={onClick}>
      <button className="w-42 md:w-52 lg:w-64 mx-5 group relative px-2.5 py-2.5 inline-block text-lg md:text-xl lg:text-2xl text-l1 active:top-0.5 active:outline-none focus:outline-none">
			<span className="flex items-center translate-3d-14S group-hover:translate-3d-h-14">{icon}{title}</span>

      </button>
	</Link>
	);

const MenuItemX = ({ to, title, icon, onClick }) => (
	<Link to={to} onClick={onClick}>
		<button className='flex items-center px-2 py-4 transition-colors duration-150 border-2 border-b-2 border-transparent cursor-pointer lg:px-6 group hover:border-yw'>
			<span className='col-span-1 pr-4 group-hover:scale-110'>
				<motion.span
				className='text-left'
					variants={iconVariants}
					whileInView={{ rotate: 180 }}
					transition={{ duration: 0.225, ease: 'easeIn' }}>
					{icon}
				</motion.span>
			</span>
			<span className='text-lg font-thin leading-relaxed text-left text-white md:text-xl lg:text-2xl group-hover:text-w4 group-hover:scale-110'>
				{title}
			</span>
		</button>
	</Link>
);

const MenuItem2 = () => (
	<button className="mx-5 group relative px-5 py-2.5 inline-block text-base text-purple-800 font-medium tracking-wide active:top-0.5 active:outline-none focus:outline-none">
	{/* Button text */}
		<span className="block translate-3d-14 group-hover:translate-3d-h-14">
				<span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent items-center'>
			<ActivityIcon color="white" className='sm:text-sm md:text-lg lg:text-xl' /> Contact
				</span>
		</span>
		{/* Rigth line */}
		<span className="absolute w-1 transition-transform duration-200 origin-top -bottom-1 -top-1 -right-1 bg-gradient-to-br from-purple-400 to-gray-500 scale-3d-101 delay-20 group-hover:scale-3d-111 group-hover:delay-100 group-hover:duration-200 group-hover:origin-bottom" aria-hidden="true"/>
		{/* Top line */}
		<span className="absolute h-1 transition-transform duration-150 ease-linear delay-200 origin-left -top-1 -left-1 -right-1 bg-gradient-to-br from-purple-400 to-gray-500 scale-3d-011 group-hover:scale-3d-111 group-hover:delay-200 group-hover:duration-150 group-hover:origin-right" aria-hidden="true"/>
		{/* Left line */}
		<span className="absolute w-1 transition-transform duration-150 ease-linear origin-bottom -bottom-1 -top-1 -left-1 bg-gradient-to-br from-purple-400 to-gray-500 scale-3d-101 delay-350 group-hover:scale-3d-111 group-hover:delay-350 group-hover:duration-200 group-hover:origin-top" aria-hidden="true"/>
		{/* Bottom line */}
		<span className="absolute h-1 transition-transform duration-100 origin-right -bottom-1 -left-1 -right-1 bg-gradient-to-br from-purple-400 to-gray-500 scale-3d-011 group-hover:scale-3d-111 group-hover:delay-500 group-hover:duration-500 group-hover:origin-left" aria-hidden="true"/>
		{/* Button ::after */}
		<span className="absolute -bottom-1 left-3.5 right-3.5 h-1 bg-gradient-to-br from-purple-400 to-gray-500 transition-after-14 origin-left group-hover:scale-3d-011 group-hover:-right-1 group-hover:-left-1 group-hover:origin-right group-hover:transition-after-h-14" aria-hidden="true"/>
	</button>
);


const sidebarVariants = {
	open: {
		x: 0,
		transition: {
			when: 'beforeChildren',
		},
	},
	closed: {
		x: '-100%',
		transition: {
			when: 'withChildren',
		},
	},
};

const iconVariants = {
	open: {
		initial: { rotate: 180 },
		animate: { rotate: 180 },
		transition: {
			duration: 0.9,
			ease: 'easeIn',
		},
	},
	closed: {
		rotate: 0,
		transition: {
			duration: 0.1,
			ease: 'linear',
		},
	},
};

const menuVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .2,
			ease: 'easeOut',
			when: 'beforeChildren',
		},
	},
	closed: {
		opacity: 0,
		y: -15,
		transition: {
			duration: .05,
			ease: 'easeInOut',
			when: 'beforeChildren',
		},
	},
};