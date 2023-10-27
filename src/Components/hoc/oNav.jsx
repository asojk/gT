import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SideBar from './SideBar'
import Cbuttons from './cbuttons'

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <nav className="fixed w-full flex items-center md:px-[5vw] xl:px-[10vw] py-4 z-[100]">
        <div className="w-1/4 pl-2 md:w-1/3 md:pl-8">
          <div>
            <button
              aria-label="Open Menu"
              onClick={() => setSidebarOpen(true)}
              className="relative z-50 group">
              <div className="relative inline-flex p-4 overflow-hidden border-[.25rem] rounded-md border-b4 shadow-nimble bg-gradient-to-br from-d7 to-d7/80 hover:from-d7/80 hover:to-d7/90 focus:relative">
                <div className="flex flex-col justify-between w-[18px] h-[18px] md:w-[36px] md:h-[36px] transform transition-all duration-200 origin-center overflow-hidden group">
                  <div className="bg-white group-hover:bg-r rounded h-[2px] w-7 md:h-[5px] md:w-8 transform transition-all duration-200 group-focus:rotate-45 -translate-x-1" />
                  <div className="bg-white group-hover:bg-r h-[2px] w-7 md:h-[5px] md:w-8 rounded transform transition-all duration-200 " />
                  <div className="bg-white group-hover:bg-r rounded h-[2px] w-7 md:h-[5px] md:w-8 transform transition-all duration-200 group-focus:-rotate-45 -translate-x-1" />
                </div>
              </div>
            </button>
          </div>
          <SideBar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        </div>
        <div className="relative z-50 items-center w-2/4 text-center bg-transparent md:w-1/3 place-content-center">
          <Link to="/">
            <img
              className="mx-auto w-2/2 max-h-36 md:max-h-none md:w-4/4 lg:w-6/6 xl:w-5/8 max-w-[32rem]"
              src="https://grell.s3.us-east-2.amazonaws.com/Logo/Grell-Logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="relative z-50 items-end justify-end hidden w-1/4 md:w-1/3 md:block">
          <Cbuttons className="" />
        </div>
      </nav>
    </>
  )
}

export default Navbar
