/* eslint-disable react/button-has-type */

'use client';

import React, { useState } from 'react';
import { Navbar, Footer } from '../../components';

const Contact = () => {
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');

  const [email,setEmail]=useState('');

  const [message,setMessage]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = {
      name,
      email,
      phone,
      message,
    };
  
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        const content = await response.json();
        console.log(content);
        alert("CONGRATULATIONS!!!!!! WE WILL CONTACT YOU SHORTLY. ");
        setMessage('');
        setPhone('');
        setName('');
        setEmail('');
      } else {
       
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      
      console.error('Error:', error);
    }
  };
  


  return(

  <div className="bg-primary-black min-h-screen flex flex-col">
    <Navbar />

   <div className="flex flex-col items-center justify-center flex-grow md:flex-row container p-10"> 
      <div className="w-full mb-4 md:mb-0 md:mr-4">
        <div className="max-w-md mx-auto bg-[#253B47] overflow-hidden shadow-lg rounded-lg px-8 py-6 mb-8
        transition-all duration-300 hover:shadow-md "
        >
          <h1 className="text-white text-4xl font-extrabold">Let's Talk </h1>
          <br />
          <span className='text-white text-lg'>For Tailored Results that Cater to Your Unique Requirements.</span>
          <br /><br />
          <span className="text-white text-lg">
          Unlock your business's full potential and take action now! Reach out to us and schedule a meeting for accelerated success.
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
        <form className="max-w-auto mx-auto bg-[#253B47]
         rounded-lg px-8
         py-6 md:mx-0 md:mr-4 shadow-lg  "
         onSubmit={handleSubmit}
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
                   Full Name
                </label>
                <input
                value={name}
                onChange={e=>setName(e.target.value)}
                  type="text"
                  id="firstName"
                  className="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label
                  htmlFor="phone"
                  className="block text-white font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="tel"
                  value={phone}
                onChange={e=>setPhone(e.target.value)}
                  className="w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
                onChange={e=>setEmail(e.target.value)}
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
            value={message}
                onChange={e=>setMessage(e.target.value)}
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
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>

    <div className="w-full h-27 mx-auto flex justify-center text-white text-lg font-bold">
      <Footer />
    </div>
  </div>
)};

export default Contact;
