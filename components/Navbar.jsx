/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-template-curly-in-string */

'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useUrl } from 'nextjs-current-url';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { href: pathname } = useUrl() ?? {};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-6 relative`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <h2 className="text-[34px] leading-[30px] text-white font-black"><a href="/">ZyroWave</a></h2>
        <div className="mx-4 md:mx-30 gap-4 md:gap-8 flex flex-wrap md:flex-nowrap relative">
          <h6 className={`${styles.navoption} hover:text-pink-600 md:contrast-50 hidden md:flex`}>
            {pathname === '/services' ? <a href="/services" className="text-pink-600">Services</a> : <a href="/services">Services</a>}

          </h6>
          <h6 className={`${styles.navoption} hover:text-pink-600 md:contrast-50 hidden md:flex`}>
            {pathname === '/about' ? <a href="/about" className="text-pink-600">About Us</a> : <a href="/about">About Us</a>}
          </h6>
          <h6 className={`${styles.navoption} hover:text-pink-600 md:contrast-50 hidden md:flex`}>
            {pathname === '/contact' ? <a href="/contact" className="text-pink-600">Contact Us</a> : <a href="/contact">Contact Us</a>}
          </h6>
          <div className="md:hidden">
            <svg className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleMenu}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          {isMenuOpen && (
            <div className="absolute top-full left-10/2 transform -translate-x-1/2 mt-1 p-4 shadow h-[130px] w-[125px] text-white bg-gray-900  border-2 border-pink-900 rounded-lg mb-96">
              {/* Add your upper options dropdown content here */}
              <a href="/services" className="block  hover:text-pink-600 py-1 text-white" target="_blank">Services</a>
              <a href="/about" className="block  hover:text-pink-600 py-1 text-white" target="_blank">About Us</a>
              <a href="/contact" className="block  hover:text-pink-600 py-1 text-white" target="_blank">Contact Us</a>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
