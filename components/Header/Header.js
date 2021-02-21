import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { navLinks } from '../../utils/nav-links';

const Header = () => {

  let [mobileNavActive, setMobileNav] = useState(false);

  const allLinksRef = useRef();
  const initialRender = useRef(true);
  const linksRef = useRef();


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
  
  return (
    <nav className="fixed w-full shadow-md">
      <div className={`flex relative w-full justify-between items-center h-20 px-8 mobile-nav-${mobileNavActive}`}>
        <Link passHref href="/">
          <a className="text-5xl text-gray-800 font-bold">BeMDeV</a>
        </Link>
        <div ref={allLinksRef} className="hidden md:block">
          {navLinks.map((link, i) => {
            return (
              <Link 
                key={i} 
                passHref
                href={link.path}>
                <a className="tracking-wide text-gray-800 font-bold py-3 px-4 mr-5 rounded-lg hover:bg-white transition-colors duration-300">{link.text}</a>
              </Link>
            );
          })}
        </div>

        <div 
          onClick={() => {setMobileNav(!mobileNavActive)}} 
          className="hidden hamburger-box"
          aria-label="Click on this element to activate mobile navigation menu."
          role="navigation"
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
