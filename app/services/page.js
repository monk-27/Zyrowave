/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../../components';
import styles from '../../styles';
import { technoVariants, fadeIn, staggerContainer } from '../../utils/motion';
import { exploreWorlds, technology } from '../../constants';
// import DetailsPage from '../details/page';

const services = () => {
  const Card = ({ world }) => (
    <div
      className={`${styles.servicescard} transform transition-transform hover:scale-100 `}
    >
      <div className="h-full w-full p-4">
        <img
          src={world.imgUrl}
          alt="planet-04"
          className="w-full h-full border-black shadow-2xl rounded-3xl mr-20 "
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white relative pb-2">
          {world.title}
          <br />
          <span className="glowing-underline" />
        </h2>
        <p className="h-auto overflow-hidden mb-3 font-normal text-white dark:text-gray-400">
          {world.description}
        </p>
        <Link href={`/details/${world.id}`}
          className="text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </Link>
      </div>
    </div>
  );
  const TechnoCard = ({ techno }) => (
    <div className="m-2 p-1 sm:flex sm:flex-col items-center ">
      <div className="p-1">
        <img
          src={techno.url}
          alt="planet-04"
          className="h-24 w-24 border-black shadow-2xl rounded-3xl bg-white "
        />
      </div>

      <div className="justify-between p-4 leading-normal">
        <h2 className="text-l tracking-tight shadow-2xl text-white">
          {techno.name}
        </h2>
      </div>
    </div>
  );
  return (
    <>
      <div className="gradient-02 x-0" />
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        {/* every thing do in this div  */}
        <div className="justify-center items-center">
          <section className={`${styles.paddings}`} id="explore">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
              <div className=" p-8 flex flex-col items-center">
                <h2 className=" p-8 flex flex-col items-center text-3xl  text-white font-black">
                  Customized solutions that drive growth and ignite success.
                </h2>
                <p className="text-xl text-white flex flex-col items-center">
                  Empower your business to soar with our bespoke solutions,
                  unlocking its boundless potential.{' '}
                  <span>
                    {' '}
                    We blend technology prowess and strategic finesse to craft
                    personalized plans that propel your growth and drive
                  </span>
                  unrivaled success.
                </p>
              </div>
              <div className="p-8 flex flex-col items-center">
                {exploreWorlds.map((world, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }}>
                    <motion.div
                      variants={fadeIn('up', 'tween', 0.1, 1)}
                      className="relative w-full md:-mt-[20px] -mt-[12px]"
                    >
                      <Card world={world} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
          {/* technologys */}
          <div className="h-full w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#632381] via-[#1A232E] to-[#1A232E] md:grid-cols-2">
            <section className="mt-18 p-8 sm:flex sm:flex-col items-center">
              <div className=" sm:p-8 flex flex-col items-center ">
                <div className=" sm:p-8 flex flex-col items-center">
                  <h2 className=" sm:p-8 mb-3 flex flex-col items-center text-3xl  text-white font-black">
                    Driving Innovation through Powerful Digital Solutions
                  </h2>
                  <p className="text-xl  text-white">
                    Transform your digital landscape with our state-of-the-art
                    technology arsenal. Witness the transformation of your
                    business solutions as we empower you to conquer new
                    horizons.
                  </p>
                </div>
                <div className="ml-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8  items-center w-full">
                  {technology.map((world, index) => (
                    <motion.nav
                      key={index}
                      variants={technoVariants}
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
          {/* contact redirect page  */}
          <section className="flex flex-col items-center">
            <div className="p-4 sm:p-20 flex flex-col items-center">
              <div className="bg-[#253B47] p-4 sm:p-20 flex flex-col items-left border-black shadow-md rounded-3xl">
                <h2 className=" p-8 flex flex-col items-left text-3xl  text-white font-black">
                  From web to mobile, databases to software, we make your goals
                  a reality.
                </h2>
                <p className="pl-8 text-xl  text-white">
                  {' '}
                  Join us on a software development adventure, turning your
                  ideas into remarkable reality. <br /> Experience the
                  difference of a team that genuinely cares about your success.{' '}
                  <br />
                  Contact us now for a quote and let's bring your project to
                  life!
                </p>
                <div className="flex flex-col items-left ">
                  <div className="p-8">
                    <a href="/contact" className=''>
                      <button className={`${styles.hellobutton}`}>
                        Say Hello
                        <span
                          className="ml-2 h-5 w-5 mb-1 animate-shakehand"
                          aria-hidden="true"
                        >
                          👋
                        </span>
                      </button>
                    </a>
                    <a href="/services">
                      <button className="mt-3 sm:mt-0 border-2 border-blue-900 sm:ml-6 bg-white font-medium text-blue-900 px-4 py-2 rounded">
                        Learn More →
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full h-72 mx-auto flex justify-center text-white text-lg font-bold pb-5">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default services;
