'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../../components';
import styles from '../../styles';
import { OurTeam } from '../../constants';

const about = () => {
  const [msg, setMsg] = useState('We deliver reliable and high-performance products to our clients so that they can take their businesses to the next level with a high growth rate.');
  const selectApproach = (approach) => {
    switch (approach) {
      case 1:
        setMsg('We deliver reliable and high-performance products to our clients so that they can take their businesses to the next level with a high growth rate.');
        break;
      case 2:
        setMsg('We thoroughly research all projects helping our team to better understand your target markets & target audience and online marketing needs.');
        break;
      case 3:
        setMsg('We can design and build customized solutions, develop the functionality that keeps your users engaged, set up content management systems, and even handle website hosting and maintenance for your website.');
        break;
      case 4:
        setMsg('We use modern testing technologies in order to thoroughly test the developed products. We believe in achieving a more specific execution of your requirements from the system.');
        break;
      case 5:
        setMsg('We deliver reliable and high-performance products to our clients so that they can take their businesses to the next level with a high growth rate.');
        break;
      default:
        break;
    }
  };

  const TechnoCard = ({ techno }) => (
    <div className="m-2 p-1 flex flex-col items-center ">
      <div className="p-1">
        <img
          src={techno.url}
          alt="planet-04"
          className="h-48 w-48 border-black shadow-2xl rounded-3xl bg-white "
        />
      </div>
      <div className="justify-between p-4 leading-normal">
        <h2 className="text-l tracking-tight text-gray-900 shadow-2xl dark:text-white">{techno.name}</h2>
      </div>
    </div>
    );

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="px-4 lg:px-12 global-content">

        {/* Text part in About Us */}
        <section className={`${styles.paddings}`} id="explore">
          <div className="mt-[-40px] p-6 lg:p-8 flex flex-col-reverse lg:flex-row items-center lg:items-left">
            <div className="lg:mr-12 w-full lg:w-1/2 flex flex-col items-center lg:items-left lg:justify-center mb-8 lg:mb-0">
              <h2 className="mb-4 text-xl lg:text-4xl xl:text-5xl text-white font-black text-center lg:text-left">
                Who we are, what we do, and our uniqueness.
              </h2>
              <p className="text-md lg:text-2xl xl:text-3xl text-white text-center lg:text-left">
                Our comprehensive IT solutions are tailored to your company's requirements. We handle everything from web development to mobile app development.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <img
                src="/ayush logo.png"
                alt="planet-01"
                className="w-full h-auto max-w-[430px] lg:max-w-full rounded-[32px] object-cover"
              />
            </div>
          </div>

        </section>

        {/* Our Core Approach section */}
        <section className={`${styles.paddings}`} id="explore">
          <div className="p-4 lg:p-8 flex flex-col items-center">
            <div className="p-4 flex flex-col items-center w-full">
              <h2 className="mb-4 w-full text-2xl lg:text-3xl text-white font-black text-center">
                Our Core Approach
              </h2>
              <span className="mb-2 w-full text-2xl lg:text-3xl text-white font-black text-center border-b-2 mt-[-30px] text-transparent">Our Core Approach</span>
              <p className="text-lg lg:text-xl text-white text-center">
                {msg}
              </p>
              <div className="p-4 lg:w-3/5 flex flex-wrap justify-center items-center mt-8">
                <div className="flex justify-center items-center flex-col m-2 lg:m-4" onClick={() => { selectApproach(1); }}>
                  <img
                    src="/light-bulb.png"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[32px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Concept
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col m-2 lg:m-4" onClick={() => { selectApproach(2); }}>
                  <img
                    src="/exploration.png"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Analysis
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col m-2 lg:m-4" onClick={() => { selectApproach(3); }}>
                  <img
                    src="/coding.png"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[10px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Development
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col m-2 lg:m-4" onClick={() => { selectApproach(4); }}>
                  <img
                    src="/test.png"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Testing
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col m-2 lg:m-4" onClick={() => { selectApproach(5); }}>
                  <img
                    src="/task.png"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Finalize
                  </p>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* Mission and Vision section */}
        <section className={`${styles.paddingss}`} id="explore">
          <div className="p-4 lg:p-8 flex flex-col lg:flex-row items-center lg:items-left">
            <div className="lg:w-1/2 flex flex-col items-center">
              <span className="mb-4 lg:mb-10 w-48 text-2xl lg:text-3xl text-white font-black text-center border-b-2 border-white">
                Our Mission
              </span>
              <img
                src="https://img.freepik.com/free-vector/realistic-objective-background_79603-1821.jpg?w=1380&t=st=1689683066~exp=1689683666~hmac=e9d55a612d5411c1be02eb6ef84c55ac3c99bd8ff184f1d1b7c9fe1f75cc665d"
                alt="planet-01"
                className="md:w-[400px] lg:w-[500px] w-full h-[300px] rounded-[32px] object-cover"
              />
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col items-center lg:items-left lg:justify-center mb-8 lg:mb-0">
              <h2 className="mb-4 w-full text-xl lg:text-3xl text-white font-black text-center lg:text-left">
                Our Mission
              </h2>
              <p className="text-md lg:text-xl text-white text-center lg:text-left">
                At Techbotics, our mission is simple yet ambitious - to be your trusted partner in the digital realm. We aim to empower businesses with innovative software solutions and strategic digital marketing services that not only meet their unique needs but also exceed their expectations. We handle everything from web development to mobile app development.
              </p>
            </div>
          </div>

        </section>

        <section className={`${styles.paddingss}`} id="explore">
          <div className="p-4 lg:p-8 flex flex-col lg:flex-row items-center lg:items-left">
            <div className="lg:ml-16 lg:w-1/2 flex flex-col items-center lg:items-left lg:justify-center mb-8 lg:mb-0">
              <h2 className="mb-4 w-full text-xl lg:text-3xl text-white font-black text-center lg:text-left">
                Our Vision
              </h2>
              <p className="text-md lg:text-xl text-white text-center lg:text-left">
                At Techbotics, our mission is simple yet ambitious - to be your trusted partner in the digital realm. We aim to empower businesses with innovative software solutions and strategic digital marketing services that not only meet their unique needs but also exceed their expectations. We handle everything from web development to mobile app development.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col items-center">
              <span className="mb-4 lg:mb-10 w-32 lg:w-48 text-xl lg:text-3xl text-white font-black text-center border-b-2 border-white">
                Our Vision
              </span>
              <img
                src="https://img.freepik.com/free-vector/businessman-top-looking-into-telescope-employees-business-opportunity-bizopp-franchising-distribution-concept-white-background_335657-2028.jpg?w=1380&t=st=1689683232~exp=1689683832~hmac=02a2370761562a362479bf489aefe09bfb90e60c9944cc04cedc9ef4ea8cffd2"
                alt="planet-01"
                className="md:w-[400px] lg:w-[500px] w-full h-[300px] rounded-[32px] object-cover"
              />
            </div>
          </div>

        </section>

        {/* Our Team section */}
        <section className="mt-12 lg:mt-18 p-4 lg:p-8 flex flex-col items-center">
          <div className="p-4 lg:w-3/5 flex flex-col items-center">
            <h2 className="mb-4 w-full text-3xl text-white font-black text-center">
              Our Team
            </h2>
            <p className="text-xl text-white text-center">
              We're successful because of "Our Team." Our talented and diverse team works together to deliver excellent results for our clients.
            </p>
          </div>
          <div className="mt-8 w-full">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {OurTeam.map((world, index) => (
                <motion.nav
                  key={index}
                  variants={OurTeam}
                  initial="hidden"
                  whileInView="show"
                >
                  <TechnoCard techno={world} />
                </motion.nav>
                ))}
            </div>
          </div>
        </section>
      </div>

      <div className="w-full h-72 mx-auto flex justify-center text-white text-lg font-bold pb-5">
        <Footer />
      </div>
    </div>
  );
};

export default about;
