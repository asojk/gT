import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReactDatePicker from 'react-datepicker';
import './datepick.css';
import addDays from 'date-fns/addDays';
import getDay from 'date-fns/getDay';
import { AnimatePresence, motion } from 'framer-motion';
import Swal from 'sweetalert2';

	const NameInput = ({ name, setName }) => {
		return (
			<div className='flex flex-col w-full my-2'>
				<label htmlFor='user_name' className='block px-3 py-2 overflow-hidden rounded-md'>
					<span className='text-base leading-relaxed md:text-lg lg:text-xl text-l1'>*Name</span>
					<input
					id='user_name'
						type='text'
						name='user_name'
						autoComplete='off'
						value={name}
						required
						onChange={(e) => setName(e.target.value)}
						className='w-full p-2 mt-1 border-none rounded-md bg-w4 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5'
					/>
				</label>
			</div>
		);
	};
	const PhoneInput = ({ phone, setPhone }) => {
		return (
			<div className='flex flex-col w-full my-4'>
				<label htmlFor='user_phone' className='block px-3 py-2 overflow-hidden rounded-md'>
					<span className='text-base leading-relaxed md:text-lg lg:text-xl text-l1'>*Phone Number</span>
					<input
					id='user_phone'
						type='tel'
						name='user_phone'
						autoComplete='off'
						value={phone}
						required
						onChange={(e) => setPhone(e.target.value)}
						className='w-full p-2 mt-1 border-none rounded-md bg-w4 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5'
					/>
				</label>
			</div>
		);
	};
	const EmailInput = ({email, setEmail}) => {
		return (
			<div className='flex flex-col w-full my-4'>
				<label htmlFor='user_email' className='block px-3 py-2 overflow-hidden rounded-md'>
					<span className='text-base leading-relaxed md:text-lg lg:text-xl text-l1'>*Email</span>
					<input
					id='user_email'
						type='email'
						name='user_email'
						autoComplete='off'
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
						className='w-full p-2 mt-1 border-none rounded-md bg-w4 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5'
					/>
				</label>
			</div>
		);
	};
	const DateInput = ({ date, setDate }) => {
		const minDate = addDays(new Date(), 7); // One week from now
		const isWeekday = (date) => {
			const day = getDay(date);
			return day !== 0 && day !== 6;
		};
		return (
			<div className='flex flex-col w-full my-2 text-white bg-none'>
				<div className='flex flex-col w-full bg-none'>
					<p className='text-base leading-relaxed md:text-lg lg:text-xl text-l1'>
						If you'd like, select a day that works best for an inspection
					</p>
				</div>

				<ReactDatePicker
					autoComplete='off'
					inputID='date'
					selected={date}
					onChange={(date) => setDate(date)}
					filterDate={isWeekday}
					monthsShown={1}
					minDate={minDate}
					type='date'
					name='user_date'
					value={date}
					placeholderText='Select'
					className='w-1/2 p-2 mt-2 mb-4 text-white rounded-lg cursor-pointer border-[1px] border-w4 bg-d7/50 focus:ring-0 text-base leading-relaxed md:text-lg lg:text-xl caret-transparent'
				/>
			</div>
		);
	};
	const BuildingSelect = ({buildingType, setBuildingType}) => {
		return (
			<div className='flex flex-col w-full my-4'>
				<select
					id='building_type'
					name='user_buildingType'
					required
					value={buildingType}
					onChange={(e) => setBuildingType(e.target.value)}
					className='text-sm font-thin tracking-wide normal-case bg-transparent rounded-lg outline-none cursor-pointer w-[12rem] btn border-b1 text-l1 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0'>
					<option value='NA'>* Building Type</option>
					<option value='Commercial'>Commercial</option>
					<option value='Industrial'>Industrial</option>
					<option value='Medical'>Medical</option>
					<option value='School'>School</option>
					<option value='Office'>Office</option>
					<option value='Retail'>Retail</option>
					<option value='Residential'>Residential</option>
					<option value='Other'>Other</option>
				</select>
			</div>
		);
	};
	const ApplicationSelect = ({application, setApplication}) => {
		return (
			<div className='flex flex-col w-full my-4'>
				<select
					id='application'
					name='user_application'
					required
					value={application}
					onChange={(e) => setApplication(e.target.value)}
					className='text-sm font-thin tracking-wide normal-case bg-transparent rounded-lg outline-none cursor-pointer w-[12rem] btn border-b1 text-l1 bg-d7 peer focus:border-transparent focus:outline-none focus:ring-0'>
					<option value='NA'>* Application</option>
					<option value='New Construction'>New Construction</option>
					<option value='Repair'>Repair</option>
					<option value='Retrofit (Current is Metal)'>Retrofit (Current is Metal)</option>
					<option value='Retrofit (Current is Rubber or Tar)'>Retrofit (Current is Rubber or Tar)</option>
					<option value='Insulation (Energy Efficient)'>Insulation (Energy Efficient)</option>
					<option value='PVC Duro-Last'>PVC Duro-Last</option>
					<option value='EDPM Rubber Roofing'>EDPM Rubber Roofing</option>
					<option value='Other'>Other</option>
					<option value="I'm Not Sure">Not Sure</option>
				</select>
			</div>
		);
	};
	const NotesInput = ({notes, setNotes}) => {
		return (
			<label htmlFor='user_notes' className='block px-3 py-4 overflow-hidden rounded-md'>
				<span className='py-2 text-base leading-relaxed md:text-lg lg:text-xl text-l1'>
					Do you have a special request or additional information to provide?
				</span>
				<textarea
					rows='14'
					cols='10'
					wrap='soft'
					type='text'
					name='user_notes'
					id='user_notes'
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
					className='w-full p-4 mt-1 border-none rounded-md h-36 bg-w4 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-b5'></textarea>
			</label>
		);
	};
	const Send = () => {
		return (
			<button
				type='submit'
				className='px-5 py-2 m-6 font-bold tracking-widest text-right uppercase transition-all duration-500 border rounded-md border-d3 text-r hover:text-l1 animate-btn-anim-1 hover:bg-r hover:shadow-nimble'>
				SEND
			</button>
		);
	};

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [date, setDate] = useState('');
	const [notes, setNotes] = useState('');
	const [buildingType, setBuildingType] = useState('');
	const [application, setApplication] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		if (!name || !email || !phone || !buildingType || !application) {
			alert('Please fill in all required fields indicated by an asterisk (*)');
			return;
			}

		emailjs
			.send(
				'service_caqlar9',
				'template_webform',
				{
					user_name: name,
					user_email: email,
					user_phone: phone,
					user_date: date,
					user_notes: notes,
					user_buildingType: buildingType,
					user_application: application,
				},
				'KfKbChHKxtJr4p331',
			)
			
			.then(
				(result) => {
					console.log('Form submitted successfully:', result.data);
					Swal.fire({
						color: '#fff',
						background: '#111',
						title: 'Thank you!',
						text: 'Your request has been submitted. We will be in touch soon!',
						icon: 'success',
						timer: 3000,
				})
					setName('');
					setEmail('');
					setPhone('');
					setDate('');
					setNotes('');
					setBuildingType('');
					setApplication('');
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const [stepsComplete, setStepsComplete] = useState(0);
	const numSteps = 3;

		const handleSetStep = (num) => {
			if ((stepsComplete === 0 && num === -1) || (stepsComplete === numSteps && num === 1)) {
				return;
			}
			setStepsComplete((pv) => pv + num);
		};
			const PreviousButton = () => {
				return (
					<button onClick={() => handleSetStep(-1)} className='px-4 py-1 m-4 rounded text-l1 hover:bg-d6'>
						Prev
					</button>
				);
			};
			const NextButton = () => {
				return (
					<button onClick={() => handleSetStep(1)} className='px-4 py-1 m-4 rounded text-l1 bg-r'>
						Next
					</button>
				);
			};

	return (
	<><div className='relative py-48'>
		<div className='relative px-6 m-auto xl-container'>
			<div className='lg:grid lg:grid-cols-[2fr,1fr]'>
				<div className='m-auto space-y-8'>
					<h2 className='mb-12 text-2xl font-bold text-center text-white md:text-4xl'>
						Schedule your<span className='text-r'> free</span> estimate
					</h2>
					<div className='w-full p-4 px-8 lg:p-8 lg:px-12 mx-auto rounded-2xl border-[1px] border-b3 group shadow-nimble bg-gradient-to-tl from-d7 to-d6'>
						<Steps numSteps={numSteps} stepsComplete={stepsComplete} />
						<div className='flex p-2 my-6 h-fit justify-evenly'>
							<form ref={form} onSubmit={sendEmail}>
								{stepsComplete === 0 && <NameInput name={name} setName={setName} />}
								{stepsComplete === 0 && <PhoneInput phone={phone} setPhone={setPhone} />}
								{stepsComplete === 0 && <EmailInput email={email} setEmail={setEmail} />}
								{stepsComplete === 0 && <NextButton />}
								{stepsComplete === 1 && <DateInput date={date} setDate={setDate} />}
								{stepsComplete === 1 && (
									<span className='py-2 text-base leading-relaxed md:text-lg lg:text-xl text-l1'>
										Please select one for each of the following:
									</span>
								)}
								{stepsComplete === 1 && (
									<div className='flex flex-col justify-between md:gap-6 md:flex-row'>
										<BuildingSelect buildingType={buildingType} setBuildingType={setBuildingType} />
										<ApplicationSelect application={application} setApplication={setApplication} />
									</div>
								)}
								{stepsComplete === 1 && <PreviousButton />}
								{stepsComplete === 1 && <NextButton />}
								{stepsComplete === 2 && <NotesInput notes={notes} setNotes={setNotes} />}
								{stepsComplete === 2 && <Send />}
								{stepsComplete === 2 && <PreviousButton />}
							</form>
						</div>
					</div>
				</div>
				<div className='w-[24rem] pt-12 pr-6 md:pt-16'>
					<div className='flex py-2 text-left'>
						<div>
							<div className='pb-2 text-base tracking-normal font-semi-bold text-yw md:text-lg lg:text-2xl'>
								Other ways to connect
							</div>
							<p className='mt-2 mb-4 text-base leading-relaxed text-left text-l1 md:text-lg'>
								Our office is open Monday-Friday from 8am to 4pm. If you your request is urgent, we do our best to
								respond to calls and texts 24/7.
							</p>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='w-full'>
							<p className='p-1 text-base font-semibold leading-relaxed md:text-lg lg:text-xl text-l1'>Text us</p>
							<a
								href='sms:+15152276367'
								className='inline-flex items-center p-1 font-medium border-0 text-md text-w3 group hover:text-r'>
								(515) 227-6367
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1 m-1'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										fill='currentColor'
										d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
									/>
								</svg>
							</a>
						</div>

						<div className='w-full'>
							<p className='p-1 text-base font-semibold leading-relaxed md:text-lg lg:text-xl text-l1'>
								Call instead
							</p>
							<a
								href='tel:+18002089693'
								className='inline-flex items-center p-1 font-medium border-0 text-md text-w3 group hover:text-r'>
								(800)-208-9693
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1 m-1'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										fill='currentColor'
										d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
									/>
								</svg>
							</a>
						</div>

						<div className='w-full'>
							<p className='p-1 text-base font-semibold leading-relaxed md:text-lg lg:text-xl text-l1'>
								Send an email
							</p>
							<a
								href='mailto:roof@grell.pro'
								className='inline-flex items-center p-1 font-medium border-0 text-md text-w3 group hover:text-r'>
								roof@grell.pro
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1 m-1'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										fill='currentColor'
										d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
	);
};

const Steps = ({ numSteps, stepsComplete }) => {
	const stepArray = Array.from(Array(numSteps).keys());

	return (
		<div className='flex items-center justify-between gap-4'>
			{stepArray.map((num) => {
				const stepNum = num + 1;
				const isActive = stepNum <= stepsComplete;
				return (
					<React.Fragment key={stepNum}>
						<Step num={stepNum} isActive={isActive} />
						{stepNum !== stepArray.length && (
							<div className='relative w-full h-1 rounded-full bg-rd2'>
								<motion.div
									className='absolute top-0 bottom-0 left-0 rounded-full bg-r'
									animate={{ width: isActive ? '100%' : 0 }}
									transition={{ ease: 'easeIn', duration: 0.3 }}
								/>
							</div>
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

const Step = ({ num, isActive }) => {
	return (
		<div className='relative'>
			<div
				className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative transition-colors duration-300 ${
					isActive ? 'border-rA text-l1' : 'border-w4 text-w4'
				}`}>
				<AnimatePresence mode='wait'>
					{isActive ? (
						<motion.svg
							key='icon-marker-check'
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='0'
							viewBox='0 0 16 16'
							height='1.6em'
							width='1.6em'
							xmlns='http://www.w3.org/2000/svg'
							initial={{ rotate: 180, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -180, opacity: 0 }}
							transition={{ duration: 0.125 }}>
							<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'></path>
						</motion.svg>
					) : (
						<motion.span
							key='icon-marker-num'
							initial={{ rotate: 180, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -180, opacity: 0 }}
							transition={{ duration: 0.125 }}>
							{num}
						</motion.span>
					)}
				</AnimatePresence>
			</div>
			{isActive && <div className='absolute z-0 -inset-1.5 bg-rd2 rounded-full animate-pulse' />}
		</div>
	);
};

export default Contact;
