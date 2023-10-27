import React from 'react'

const AvAlt = () => (
    <img
        src="https://grell.s3.us-east-2.amazonaws.com/opt/generic-av.avif"
        alt="customer_avatar"
        loading='lazy'
        className="flex-shrink-0 object-center w-12 h-12 mx-auto rounded-full object-fit md:w-16 md:h-16 shadow-nimble aboslute"
        >
    </img>
);

const NcI = () => (
	<img
		src='https://grell.s3.us-east-2.amazonaws.com/opt/Ncis.avif'
		alt='customer_avatar'
        loading='lazy'
		className='flex-shrink-0 object-contain object-center w-12 mx-auto rounded-lg h-14 md:w-16 md:h-20 shadow-y-nimble aboslute'></img>
);

const JustinG = () => (
	<img
		src='https://lh3.googleusercontent.com/a-/AD_cMMRhOjEy58FYyhkhM0Tf3Fchfd464o5at9oC2xUesEfXwoGZ=w120-h120-p-rp-mo-br100'
        loading='lazy'
		alt='customer_avatar'
		className='flex-shrink-0 object-cover object-center w-12 h-12 mx-auto rounded-full md:w-16 md:h-16 shadow-nimble aboslute'></img>
);

const Dks = () => (
	<img
		src='https://grell.s3.us-east-2.amazonaws.com/dks.png'
        loading='lazy'
		alt='customer_avatar'
		className='flex-shrink-0 object-center w-12 h-12 mx-auto rounded-full bg-l1 object-fit md:w-16 md:h-16 shadow-nimble aboslute'></img>
);

const Tjaden = () => (
    <img
        src="https://grell.s3.us-east-2.amazonaws.com/opt/Tjaden.avif"
        loading='lazy'
        alt="customer_avatar" 
        className="flex-shrink-0 object-contain object-center w-16 h-16 mx-auto rounded-full bg-l1 md:w-20 md:h-20 shadow-nimble aboslute"
        >
    </img>
);

const Nik = () => (
	<img
		src='https://grell.s3.us-east-2.amazonaws.com/opt/nAvatar.avif'
        loading='lazy'
		alt='customer_avatar'
		className='flex-shrink-0 object-cover object-center w-12 h-12 mx-auto rounded-full md:w-16 md:h-16 shadow-nimble aboslute'></img>
);


export {
    AvAlt,
    NcI,
    JustinG,
    Dks,
    Tjaden,
    Nik,
};

