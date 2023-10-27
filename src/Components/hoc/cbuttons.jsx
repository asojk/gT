import React from 'react'
import {FiSend, FiMessageCircle, FiPhone} from 'react-icons/fi'
import {Tooltip} from '@material-tailwind/react'
//TODO add slight transparency?
const Cbuttons = () => {
  return (
    <section className='text-center md:text-right'>
      <span className='relative md:bg-d7 inline-flex overflow-hidden md:border-[.25rem] rounded-2xl md:rounded-md shadow-nimble border-[#ff3333] border-1 md:border-b4'>
        <Tooltip
          className='p-2 text-white'
          placement='bottom'
          content='Call (800)-208-9693'
          animate={{mount: {scale: 1, y: 0}, unmount: {scale: 0, y: 25}}}>
          <a
            href='tel:+18002089693'
            className='inline-block p-4 text-white md:border-e-[.25rem] border-e-1 border-rd2 md:border-b4 focus:relative md:from-d7 md:to-d7/80 md:hover:from-d7/80 md:hover:to-d7/90'>
            <FiPhone className='text-2xl stroke-1 stroke-black md:stroke-white md:hover:stroke-r fill-white md:fill-none lg:text-4xl' />
          </a>
        </Tooltip>

        <Tooltip
          className='p-2 text-white'
          placement='bottom'
          content='Email roof@grell.pro'
          animate={{mount: {scale: 1, y: 0}, unmount: {scale: 0, y: 25}}}>
          <a
            href='mailto:roof@grell.pro'
            className='inline-block p-4 text-white md:border-e-[.25rem] border-e-1 border-rd2 md:border-b4 focus:relative md:from-d7 md:to-d7/80 md:hover:from-d7/80 md:hover:to-d7/90'>
            <FiSend className='text-2xl stroke-1 stroke-black md:stroke-white md:hover:stroke-r fill-white md:fill-none lg:text-4xl' />
          </a>
        </Tooltip>

        <Tooltip
          className='p-2 text-white'
          placement='bottom'
          content='Text (515) 227-6367'
          animate={{mount: {scale: 1, y: 0}, unmount: {scale: 0, y: 25}}}>
          <a
            href='sms:+15152276367'
            className='inline-block p-4 text-white md:border-e-[.25rem] border-e-1 border-rd2 md:border-b4 focus:relative md:from-d7 md:to-d7/80 md:hover:from-d7/80 md:hover:to-d7/90'>
            <FiMessageCircle className='text-2xl stroke-1 stroke-black md:stroke-white md:hover:stroke-r fill-white md:fill-none lg:text-4xl' />
          </a>
        </Tooltip>
      </span>
    </section>
  )
}

export default Cbuttons
