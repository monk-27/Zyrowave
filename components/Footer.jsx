/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

// import { motion } from 'framer-motion';
// import { socials } from '../constants';

// import styles from '../styles';
// import { footerVariants } from '../utils/motion';

const Footer = () => (
  <footer className="w-full rounded-lg shadow bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src="https://img.icons8.com/stickers/100/decentralized-network.png"
            className="h-12 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ZyroWave
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6">
              About Us
            </a>
          </li>
          {/* <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li> */}
          <li>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
      {/* Social media */}
      <div className="flex flex-col items-center mb-6">
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li className="ml-4 mt-2 sm:ml-10 sm:mt-0">
            <div className="flex flex-col items-center">
              <img
                src="/twitter.svg"
                alt="Flowbite Logo"
                className="h-8 mb-2"
              />
              <h1>Twitter</h1>
            </div>
          </li>
          <li className="ml-4 mt-2 sm:ml-10 sm:mt-0">
            <div className="flex flex-col items-center">
              <img
                src="/linkedin.svg"
                alt="Flowbite Logo"
                className="h-8 mb-2"
              />
              <h1>LinkedIn</h1>
            </div>
          </li>
          <li className="ml-4 mt-2 sm:ml-10 sm:mt-0">
            <div className="flex flex-col items-center">
              <img
                src="/instagram.svg"
                alt="Flowbite Logo"
                className="h-8 mb-2"
              />
              <h1>Instagram</h1>
            </div>
          </li>
          <li className="ml-4 mt-2 sm:ml-10 sm:mt-0">
            <div className="flex flex-col items-center">
              <img
                src="/facebook.svg"
                alt="Flowbite Logo"
                className="h-8 mb-2"
              />
              <h1>Facebook</h1>
            </div>
          </li>
        </ul>
        <span className="block text-sm text-gray-500 sm:text-center mt-4 dark:text-gray-400">
          © 2023 <a href="/services" className="hover:underline  ">ZyroWave™</a>. All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
  );

export default Footer;
