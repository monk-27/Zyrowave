/* eslint-disable react/button-has-type */

'use client';

import React from 'react';
import { Navbar, Footer } from '../../components';

const Contact = () => (

  <div className="bg-primary-black min-h-screen flex flex-col">
    <Navbar />

    <div className="flex flex-col items-center justify-center flex-grow md:flex-row container py-10">
      <div className="w-full">
        <div className="max-w-md mx-auto bg-[#253B47] overflow-hidden shadow-lg rounded-lg px-8 py-6 mb-8
        transition-all duration-300 hover:shadow-md "
        >
          <h1 className="text-white text-4xl font-extrabold">Contact Us for a Personalized Solution to Suit Your Needs.</h1>
          <br />
          <span className="text-white text-lg">
            Don't Delay Your Business's Success. Contact Us to Arrange a Meeting Today.
          </span>
          <br />
          <br />

          <div className="flex flex-col items-start justify-center flex-grow md:flex-row">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start ml-2">
              <div className="flex items-center">
                <img src="/call.png" className="h-5 w-5 mr-1" alt="" />
                <div className="flex flex-col">
                  <h5 className="text-white">Contact Us At</h5>
                  <span className="text-white">XXXXXXXXXX</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow md:flex-row">
              <div className="flex flex-col items-center justify-center md:items-start md:justify-start ml-2">
                <div className="flex items-center">
                  <img src="/email.png" className="h-5 w-5 mr-1" alt="" />
                  <div className="flex flex-col">
                    <h5 className="text-white">Email Us At</h5>
                    <span className="text-white">contacts@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full">
        <div className="max-w-auto mx-auto bg-[#253B47]
         rounded-lg px-8
         py-6 md:mx-0 md:mr-4 shadow-lg  "
        >
          <h1 className="text-white">
            Ready to Discuss? Fill Out Our Contact Form
          </h1>
          <div className="mb-4">
            <div className="flex flex-col md:flex-row mb-2">
              <div className="w-full md:w-1/2 md:pr-2 mb-2 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="block text-white font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label
                  htmlFor="lastName"
                  className="block text-white font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-400 py-2 px-3 rounded-lg h-32 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="checkbox" className="mr-2" />
              <label htmlFor="checkbox" className="text-white">
                Save my Information to contact me.
              </label>
            </div>
          </div>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>

    <div className="w-full h-27 mx-auto flex justify-center text-white text-lg font-bold">
      <Footer />
    </div>
  </div>
);

export default Contact;
