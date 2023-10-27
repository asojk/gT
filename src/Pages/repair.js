import React, {useRef} from 'react'
import {Helmet} from 'react-helmet'
import {FAQTab} from '../Faq/faqTab'
import CardCarousel from '../Components/carousel.jsx'
import {FiMessageCircle, FiPhone} from 'react-icons/fi'
import {Tooltip} from '@material-tailwind/react'

function Repair() {
  const EmergencyRef = useRef(null)

  const scrollToEmergency = () => {
    let offset

    if (window.innerWidth < 600) {
      offset = 50 // mobile
    } else if (window.innerWidth < 900) {
      offset = 75 // tablet
    } else {
      offset = 100 // desktop
    }

    window.scrollTo({
      top: EmergencyRef.current.offsetTop - offset,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <section className='pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] shadow-nimble bg-cover bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r'></div>

        <div className='relative max-w-screen-xl px-4 pt-24 pb-32 mx-auto lg:pt-80 sm:px-6 lg:flex h-content lg:items-center lg:px-8'>
          <div className='max-w-5xl text-center sm:text-left'>
            <div className='pb-4 text-sm font-black leading-snug tracking-widest uppercase text-r md:text-lg lg:text-2xl'>
              licensed, bonded, insured
            </div>
            <h1 className='mb-6 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>
              Flat Roof Repair
            </h1>
            <p className='max-w-lg pb-12 mt-4 text-base leading-relaxed text-left text-white md:text-lg lg:text-xl'>
              We'll work with your insurance company to smooth the process.
            </p>
            <div className='text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-lg lg:text-2xl'>
              Our services include:
            </div>
            <div className='flex flex-wrap pt-4 pb-4'>
              <RepairServices Service='Leaks & Holes/Punctures' />
              <RepairServices Service='Metal & Modified Bitumen' />
              <RepairServices Service='TPO, EPDM & PVC' />
              <RepairServices Service='Built-Up & Ballasted' />
              <RepairServices Service='Vent & Insulation ' />
              <RepairServices Service='Membrane, Deck, & Sealant' />
              <RepairServices Service='Penetration & Perimeter' />
              <RepairServices Service='Seal-In Seams & Penetrations' />
            </div>
            <div className='flex flex-wrap gap-4 mt-8 text-center'>
              <a
                onClick={scrollToEmergency}
                className='px-8 py-3 mb-4 font-black text-white rounded-lg cursor-pointer shadow-nimble bg-r hover:bg-rd2 focus:outline-none focus:ring-2 focus:ring-rd2 active:bg-rl'>
                Emergency?
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='relative max-w-screen-xl px-8 py-16 mx-auto sm:px-16 lg:flex lg:items-center lg:justify-around lg:py-24'>
        <div className='relative z-10 max-w-5xl px-8 pb-8 mx-auto rounded-2xl'>
          <header className='text-center'>
            <div className='pb-2 text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-lg lg:text-2xl'>
              Signs that it's time for a repair
            </div>
            <h2 className='mb-4 text-4xl font-bold leading-none tracking-tight text-center text-white md:text-7xl'>
              Notice a leak?
            </h2>
          </header>
          <p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
            Whether from faulty installation, storm damage, or simply an
            outdated roofing system, there are a variety of reasons you may need
            a flat roof repair. Signs of damage are not always obvious, either,
            which is why it is important to get a professional roof inspection
            to uncover even the smallest of damage on your roof. Some common
            signs you may need a flat roof repair include:
          </p>
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
            <RepairSigns RepairSigns='Ponding water on the roof' />
            <RepairSigns RepairSigns='Water stains on the ceiling' />
            <RepairSigns RepairSigns='Flashing separation' />
            <RepairSigns RepairSigns='Cracks in coating, membrane or roof joints' />
            <RepairSigns RepairSigns='Rips or bubbles in the roof membrane' />
            <RepairSigns RepairSigns='Loose or missing fasteners, flashing or caulking' />
          </div>
        </div>
      </section>
      <section className=''>
        <CardCarousel Title1={''} Title2={''} CarouselItems={RepairImages} />
      </section>
      <section
        ref={EmergencyRef}
        className='relative max-w-screen-xl px-8 py-16 mx-auto sm:px-16 lg:flex lg:items-center lg:justify-around lg:py-24'>
        <div className='relative z-10 max-w-5xl px-8 pb-8 mx-auto rounded-2xl'>
          <div className='text-center'>
            <div className='pb-2 text-sm font-black leading-snug tracking-widest uppercase text-yw md:text-lg lg:text-2xl'>
              24/7 Emergency Flat Roof Repair Services
            </div>
            <h2 className='mb-4 text-4xl font-bold leading-none tracking-tight text-center text-white md:text-7xl'>
              Emergency Repairs
            </h2>
            <p className='mb-8 text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
              At Grell, we always strive to serve our customers as quickly and
              efficiently as possible. We understand, though, that some issues
              can not wait even a day. That is why we offer a 24/7 emergency
              flat roof repair services for situations that are serious safety
              hazards. If you need immediate assistance, call today.
            </p>
            <section className='flex flex-col'>
              <span className='relative inline-flex justify-around'>
                <Tooltip
                  className='p-2 md:text-l3 '
                  placement='bottom'
                  content='Call (800)-208-9693'
                  animate={{
                    mount: {scale: 1, y: 0},
                    unmount: {scale: 0, y: 25}
                  }}>
                  <a
                    href='tel:+18002089693'
                    className={` relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]  border-rA px-4 py-2 font-semibold text-r transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-r before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}>
                    <FiPhone className='mr-2 text-xl lg:text-2xl' />
                    <span className='text-xl lg:text-2xl'>Call Now</span>
                  </a>
                </Tooltip>
                <Tooltip
                  className='p-2 text-l3'
                  placement='bottom'
                  content='Text (515) 227-6367'
                  animate={{
                    mount: {scale: 1, y: 0},
                    unmount: {scale: 0, y: 25}
                  }}>
                  <a
                    href='sms:+15152276367'
                    className={` relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]  border-rA px-4 py-2 font-semibold text-r transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-r before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}>
                    <FiMessageCircle className='mr-2 text-xl lg:text-2xl' />
                    <span className='text-xl lg:text-2xl'>Text Instead</span>
                  </a>
                </Tooltip>
              </span>
            </section>
          </div>
        </div>
      </section>
      <section className='relative max-w-5xl px-8 py-16 mx-auto sm:px-16 lg:items-center lg:justify-around lg:py-24'>
        <h2 className='pl-8 mb-4 text-4xl font-bold leading-none tracking-tight text-white md:text-7xl'>
          FAQ
        </h2>
        <FAQTab tabName='Repair' />
      </section>
    </>
  )
}

export default Repair

const RepairServices = ({Service}) => (
  <div className='w-full px-2 sm:w-1/2'>
    <div className='flex items-center h-full'>
      <div className='flex items-center w-full'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          className='flex-shrink-0 w-4 h-4 mr-3 text-yw'>
          <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
          <path d='M22 4L12 14.01l-3-3' />
        </svg>
        <span className='text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
          {Service}
        </span>
      </div>
    </div>
  </div>
)

const RepairSigns = ({RepairSigns}) => (
  <div className='w-full'>
    <div className=''>
      <div className='inline-flex mr-1 text-2xl text-start text-r'>»</div>
      <span className='text-base leading-relaxed text-left md:text-lg lg:text-xl text-l1'>
        {RepairSigns}
      </span>
    </div>
  </div>
)

const RepairImages = [
  {
    id: 1,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg01.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 2,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg02.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 3,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg03.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 4,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg04.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 5,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg05.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 6,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg06.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 7,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg07.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 8,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg08.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },

  {
    id: 10,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg10.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 11,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg11.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 12,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg12.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 13,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg13.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 14,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg14.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 15,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg15.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 16,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg16.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 17,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg17.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 18,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg18.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 19,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg19.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  },
  {
    id: 20,
    url: 'https://grell.s3.us-east-2.amazonaws.com/WebPics/Damage/dmg20.jpg',
    category: ' ',
    title: ' ',
    description: ' '
  }
]
