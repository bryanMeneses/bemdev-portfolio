import React from 'react'

const Hamburger = ({mobileNavActive, setMobileNav}) => {
  return (
    <button
      aria-haspopup="true"
      onClick={() => {setMobileNav(!mobileNavActive)}} 
      className="z-50 relative ml-auto h-8 w-11 md:hidden"
      aria-label="Click on this element to activate mobile navigation menu.">
      <div 
        className={`line-1 absolute transform transition-all duration-300 ${mobileNavActive ? "bg-white top-5 rotate-45" : "top-2 "} bg-my-green-400 w-3/4 h-1`}>
      </div>
      <div 
        className={`line-2 absolute top-4 transition-all duration-300 ${mobileNavActive && "opacity-0"} bg-my-green-400 w-3/4 h-1`}>
      </div>
      <div 
        className={`line-3 absolute  transform transition-all duration-300 ${mobileNavActive ? "bg-white top-5 -rotate-45" : "top-6"} bg-my-green-400 w-3/4 h-1`}>
      </div>
    </button>
  )
}

export default Hamburger
