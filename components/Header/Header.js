import React, { useEffect, useRef, useState } from 'react'
import {Link as ScrollLink} from 'react-scroll';
import Link from 'next/link'
import { navLinks } from '../../utils/nav-links';
import Hamburger from './Hamburger';

const Header = () => {

  let [mobileNavActive, setMobileNav] = useState(false);
  let [scrolled, setScrolled] = useState(false)

  const allLinksRef = useRef();
  const initialRender = useRef(true);
  const linksRef = useRef();

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(
    () => {
      if (initialRender.current) {

        initialRender.current = false;
        linksRef.current = allLinksRef.current.querySelectorAll('a');

      } else {
        
        if (mobileNavActive) {
          linksRef.current.forEach((link, i) => {
            link.style.animation = `navLinkFadeIn 0.4s ease forwards ${(i / 7 + 0.2)}s`
          });
        } else {
          linksRef.current.forEach((link) => {
            link.style.animation = 'navLinkFadeOut 0.2s ease forwards 0s';
          });
        }
        
      }
    }, 
    [mobileNavActive]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return 
  })

  const navStyles = mobileNavActive ? "left-0 opacity-100" : "-left-full opacity-0"
  
  return (
    <nav className={`z-10 fixed w-full shadow-md transition-all ${scrolled && 'bg-white'}`}>
      <div className={`flex relative w-full justify-between items-center h-20 px-8 mobile-nav-${mobileNavActive}`}>
        <Link passHref href="/">
          <a className="text-4xl sm:text-5xl text-gray-800 font-bold">BeMDeV</a>
        </Link>
        <ul ref={allLinksRef} className={`transition-all duration-300 md:transition-none absolute h-screen w-full flex flex-col justify-center items-center bg-white top-0 ${navStyles}  md:opacity-100 md:block md:h-auto md:bg-transparent md:w-auto md:static `}>
          {navLinks.map((link, i) => {
            return (
              <ScrollLink
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
