import React, { useCallback, useEffect, useRef, useState } from 'react'
import {Link as ScrollLink} from 'react-scroll';
import Link from 'next/link'
import { navLinks } from '../../utils/nav-links';
import Hamburger from './Hamburger';

const Header = () => {

  let [mobileNavActive, setMobileNav] = useState(false);
  let [scrolled, setScrolled] = useState(false)

  const initialRender = useRef(true)

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (initialRender.current) {
      // dont run anything on ititial component mount
      initialRender.current = false;

    } else {
      // only runs after state change, and not on initial mount
      if (mobileNavActive) {
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', closeNavOnEsc)
      } else {
        window.removeEventListener('keydown', closeNavOnEsc)
        document.body.style.overflow = 'initial'
      }
    }
    }, [mobileNavActive]
  );

  const closeNavOnEsc = useCallback((e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      setMobileNav(false)
    }
  }, [])

  const navStyles = mobileNavActive ? "left-0" : "-left-full"
  
  return (
    <nav className={`z-10 fixed w-full shadow-md transition-all ${scrolled && 'bg-white'}`}>
      <div className={`flex relative w-full justify-between items-center h-20 px-8`}>
        <Link passHref href="/">
          <a className="text-4xl sm:text-5xl text-gray-800 font-bold">BeMDeV</a>
        </Link>
        <ul 
          className={`transition-all duration-300 absolute h-screen w-full flex flex-col justify-center items-center bg-white top-0 ${navStyles}  md:transition-none md:block md:h-auto md:bg-transparent md:w-auto md:static`}
        >
          {navLinks.map((link, i) => {
            return (
              <ScrollLink
                onClick={() => setMobileNav(false)}
                smooth={true}
                offset={-78}
                className="cursor-pointer tracking-wide w-full text-center md:w-auto text-gray-800 font-bold py-3 px-4 my-4 text-3xl md:text-base md:my-0 md:mr-5 md:rounded-lg hover:text-my-teal-200 md:hover:bg-white transition-colors duration-300"
                key={i} 
                to={link.path}
                >
                {link.text}
              </ScrollLink>
            );
          })}
        </ul>

        <Hamburger mobileNavActive={mobileNavActive} setMobileNav={setMobileNav} />
      </div>
    </nav>
  );
}

export default Header;
