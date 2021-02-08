import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { navLinks } from '../../utils/nav-links';

import PropTypes from 'prop-types';

const Header = () => {

  let [mobileNavActive, setMobileNav] = useState(false);

  const allLinksRef = useRef();
  const initialRender = useRef(true);
  const linksRef = useRef();


  const closeMenu = () => {
    setMobileNav(false);
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
  
  return (
    <header className="header">
      <div className={`navbar mobile-nav-${mobileNavActive}`}>
        <Link passHref href="/">
          <a className="brand">BeMDeV</a>
        </Link>
        <div ref={allLinksRef} className="nav-links-desktop">
          {navLinks.map((link, i) => {
            return (
              <Link key={i} className="link" href={link.path}>{link.text}</Link>
            );
          })}
        </div>

        <div 
          onClick={() => {setMobileNav(!mobileNavActive)}} 
          className="hamburger-box"
          aria-label="Click on this element to activate mobile navigation menu."
          role="navigation"
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header;
