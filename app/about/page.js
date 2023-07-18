'use client';

import { Navbar, Footer } from "../../components";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { exploreWorlds, OurTeam } from '../../constants';

const about = () => {
  const msg = "We deliver reliable and high performance products to our clients so that they can take their businesses to next level with high growth rate."
  function TechnoCard({ techno }) {
    return (
      <div className={`m-2 p-1 flex flex-col items-center `}>
        <div className='p-1'>
          <img
            src={techno.url}
            alt="planet-04"
            className='h-48 w-48 border-black shadow-2xl rounded-3xl bg-white '
          />
        </div>

        <div className="justify-between p-4 leading-normal">
          <h2 className="text-l tracking-tight text-gray-900 shadow-2xl dark:text-white">{techno.name}</h2>
        </div>
      </div>

    );
  }
  return (
    <>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div className="px-4 lg:px-12">
          <section className={`${styles.paddings}`} id="explore">
            <div className="p-4 lg:p-8 flex flex-col lg:flex-row items-center lg:items-left">
              {/* text part in about us */}
              <div className="ml-48 lg:w-2/5 flex flex-col items-center lg:items-left lg:justify-center mb-8 lg:mb-0">
                <h2 className="mb-4 w-full text-3xl text-white font-black text-center lg:text-left">
                  Who we are, what we do, and our uniqueness.
                </h2>
                <p className="text-xl text-white text-center lg:text-left">
                  Our comprehensive IT solutions are tailored to your company's
                  <span> requirements. We handle everything from web development to mobile</span> app development.
                </p>
              </div>

              {/* image part in about us */}
              <div className="lg:ml-16 lg:w-3/5 flex flex-col items-center">
                <img
                  src="/ayush logo.png"
                  alt="planet-01"
                  className="md:w-[430px] w-full h-[450px] rounded-[32px] object-cover"
                />
              </div>
            </div>
          </section>
          {/* our core aproch section */}
          <section className={`${styles.paddings}`} id="explore" >
            <div className="p-4 lg:p-8 flex flex-col lg:flex-col items-center lg:items-center">
              <div className="p-4 lg:w-3/5 flex flex-col items-center">
                <h2 className="mb-4 w-full text-3xl text-white font-black text-center">
                  Our Core Apporach
                </h2>
                <p className="text-xl text-white text-center">
                  {msg}
                </p>
                {/* icon */}
                <div className="p-4 lg:w-3/5 flex justify-center items-center bg-red-900 mt-2">
                  <div className="flex justify-center items-center flex-col ml-4">
                    <img
                      src="https://img.icons8.com/stickers/100/decentralized-network.png"
                      alt="planet-01"
                      className="md:w-[80px] w-full h-[80px] rounded-[32px] object-cover"
                    />
                    <p className="text-xl text-white text-center lg:text-center">
                      Concept
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-col ml-4">
                    <img
                      src="https://img.icons8.com/stickers/100/decentralized-network.png"
                      alt="planet-01"
                      className="md:w-[80px] w-full h-[80px] rounded-[32px] object-cover"
                    />
                    <p className="text-xl text-white text-center lg:text-center">
                      Analysis
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-col ml-4">
                    <img
                      src="https://img.icons8.com/stickers/100/decentralized-network.png"
                      alt="planet-01"
                      className="md:w-[80px] w-full h-[80px] rounded-[32px] object-cover"
                    />
                    <p className="text-xl text-white text-center lg:text-center">
                      Development
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-col ml-4">
                    <img
                      src="https://img.icons8.com/stickers/100/decentralized-network.png"
                      alt="planet-01"
                      className="md:w-[80px] w-full h-[80px] rounded-[32px] object-cover"
                    />
                    <p className="text-xl text-white text-center lg:text-center">
                      Testing
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-col ml-4">
                    <img
                      src="https://img.icons8.com/stickers/100/decentralized-network.png"
                      alt="planet-01"
                      className="md:w-[80px] w-full h-[80px] rounded-[32px] object-cover"
                    />
                    <p className="text-xl text-white text-center lg:text-center">
                      Finalize
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </section>


          {/* mission visssion  section */}
          <section className={`${styles.paddingss}`} id="explore h-48">
            <div className="lg:p-8 flex flex-col lg:flex-row items-center lg:items-left">
              {/* image part in about us */}
              <div className="lg:mr-16 lg:w-3/5 flex flex-col items-center">
                <span className="mb-10 w-48 text-3xl text-white font-black text-center border-b-2 border-white">Our Mission</span>
                <img
                  src="https://img.freepik.com/free-vector/realistic-objective-background_79603-1821.jpg?w=1380&t=st=1689683066~exp=1689683666~hmac=e9d55a612d5411c1be02eb6ef84c55ac3c99bd8ff184f1d1b7c9fe1f75cc665d"
                  alt="planet-01"
                  className="md:w-[500px] w-full h-[300px] rounded-[32px] object-cover"
                />
              </div>
              {/* text part in about us */}
              <div className="mr-48 lg:w-2/5 flex flex-col items-center lg:items-center lg:justify-center mb-8 lg:mb-0">
                <h2 className="mb-4 w-full text-3xl text-white font-black text-center lg:text-left">
                  Who we are, what we do, and our uniqueness.
                </h2>
                <p className="text-xl text-white text-center lg:text-left">
                  At Techbotics, our mission is simple yet ambitious - to be your trusted partner in the digital
                  realm. We aim to empower businesses with innovative software solutions and strategic
                  digital marketing services that not only meet their unique needs but also exceed their
                  expectations.
                  <span> requirements. We handle everything from web development to mobile</span> app development.
                </p>
              </div>
            </div>
          </section>
          <section className={`${styles.paddingss}`} id="explore ">
            <div className="p-4 lg:p-8 flex flex-col lg:flex-row items-center lg:items-left ">
              {/* text part in about us */}
              <div className="ml-48 lg:w-2/5 flex flex-col items-center lg:items-left lg:justify-center mb-8 lg:mb-0">
                <h2 className="mb-4 w-full text-3xl text-white font-black text-center lg:text-left">
                  Who we are, what we do, and our uniqueness.
                </h2>
                <p className="text-xl text-white text-center lg:text-left">
                  At Techbotics, our mission is simple yet ambitious - to be your trusted partner in the digital
                  realm. We aim to empower businesses with innovative software solutions and strategic
                  digital marketing services that not only meet their unique needs but also exceed their
                  expectations.
                  <span> requirements. We handle everything from web development to mobile</span> app development.
                </p>
              </div>

              {/* image part in about us */}
              <div className="ml-48 lg:ml-16 lg:w-3/5 flex flex-col items-center">
                <span className="mb-10 w-48 text-3xl text-white font-black text-center border-b-2 border-white">Our Vision</span>
                <img
                  src="https://img.freepik.com/free-vector/businessman-top-looking-into-telescope-employees-business-opportunity-bizopp-franchising-distribution-concept-white-background_335657-2028.jpg?w=1380&t=st=1689683232~exp=1689683832~hmac=02a2370761562a362479bf489aefe09bfb90e60c9944cc04cedc9ef4ea8cffd2"
                  alt="planet-01"
                  className="md:w-[500px] w-full h-[300px] rounded-[32px] object-cover"
                />
              </div>
            </div>
          </section>
          {/* our team section */}
          <section className="mt-12 lg:mt-18 p-4 lg:p-8 flex flex-col items-center">
            <div className="p-4 lg:w-3/5 flex flex-col items-center">
              <h2 className="mb-4 w-full text-3xl text-white font-black text-center">
                Our Team
              </h2>
              <p className="text-xl text-white text-center">
                We're successful because of "Our Team." Our talented and diverse team works together to deliver <span>excellent results for our clients.</span>
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
                  // className={`${styles.xPaddings} py-8 relative`}
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
      </div >
    </>
  )
}
export default about;
