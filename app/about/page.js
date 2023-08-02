'use client';

import { useState } from 'react';
// import { motion } from 'framer-motion';
import { Navbar, Footer } from '../../components';
import styles from '../../styles';
// import { OurTeam } from '../../constants';

const about = () => {
  
  const [msg, setMsg] = useState(
    'We deliver reliable and high-performance products to our clients so that they can take their businesses to the next level with a high growth rate.',
  );
  const selectApproach = (approach) => {
    switch (approach) {
      case 1:
        setMsg(
          'With years of experience in the industry, our team possesses a wealth of knowledge and expertise in platform development. We have successfully',
        );
        break;
      case 2:
        setMsg(
          'We value open communication with our clients, keepingnyou informed about campaign progress and performance',
        );
        break;
      case 3:
        setMsg(
          'Our commitment to your success extends beyond the design phase. We provide ongoing support and guidance to ensure the successful implementation of the UI/UX design.',
        );
        break;
      case 4:
        setMsg(
          ' We are committed to meeting deadlines and delivering your app on time.',
        );
        break;
      case 5:
        setMsg(
          'Our competitive pricing ensures excellent value for your investment.',
        );
        break;
      default:
        break;
    }
  };

  // eslint-disable-next-line no-unused-vars
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
        <h2 className="text-l tracking-tight text-gray-900 shadow-2xl dark:text-white">
          {techno.name}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="px-4 lg:px-10 global-content">
        {/* Text part in About Us */}
        <section className={`${styles.paddings} mb-12`} id="explore">
          <h2 className="mt-1 mx-auto text-xl lg:text-4xl xl:text-5xl text-white font-black text-center p-4 border-b-2 border-white">
            Why choose us ?
          </h2>

          <div className="mt-5 md:flex items-center justify-center">
            <div className="md:w-1/2  md:max-w-[600px] md:mr-12 flex flex-col items-center md:items-start md:text-left">
              <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
                <span className="mt-5 text-yellow-600 text-center font-bold lg:text-2xl">
                  End-to-End Solutions :
                </span>
                <span className="md:text-base sm:text-2xl text-white text-center font-bold ml-1">
                  ZyroWave is your one-stop destination for all things
                  tech-related. From software development to digital marketing,
                  we offer end-to-end solutions that cover every aspect of your
                  digital journey.
                </span>
              </p>
              <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
                <span className="mt-5 text-yellow-600 text-center font-bold lg:text-2xl">
                  Innovation and Expertise:
                </span>
                <span className="md:text-base sm:text-2xl text-white text-center font-bold">
                  Our team thrives on innovation and continuously seeks ways to
                  push boundaries. With deep expertise in the latest
                  technologies, we stay at the forefront of industry trends to
                  deliver solutions that are both innovative and effective.
                </span>
              </p>
              <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
                <span className="mt-5 text-yellow-600 text-center font-bold lg:text-2xl">
                  Collaborative Partnership:
                </span>
                <span className="md:text-base sm:text-2xl text-white text-center font-bold">
                  We believe in fostering strong, collaborative relationships
                  with our clients. Through open communication and regular
                  updates, we ensure that you are actively involved in the
                  entire development and marketing process.
                </span>
              </p>
              <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
                <span className="mt-5 text-yellow-600 text-center font-bold lg:text-2xl">
                  Customer-Centric Support:
                </span>
                <span className="md:text-base sm:text-2xl text-white text-center font-bold">
                  At ZyroWave, your satisfaction is our top priority. Our
                  dedicated support team is always ready to address any queries
                  or issues, ensuring that you receive exceptional customer
                  service at every step.
                </span>
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center mt-5 md:mt-0 md:bg-transparent ">
              <img
                src="/uss.jpg"
                alt="planet-01"
                className="w-full h-auto max-w-[600px] md:max-w-half rounded-[32px] object-cover md:bg-transparent "
              />
            </div>
          </div>
        </section>

        {/* Our Core Approach section */}
        <section className={`${styles.paddings} `} id="explore">
          <div className="p-4 lg:p-8 flex flex-col items-center">
            <div className="p-4 flex flex-col items-center w-full">
              <h2 className="mt-12 mb-4 w-full text-2xl lg:text-3xl text-white font-black text-center">
                What Sets Us Apart
              </h2>
              <span className="mb-2 w-full text-2xl lg:text-3xl text-white font-black text-center border-b-2 mt-[-30px] text-transparent">
                What Sets Us Apart:
              </span>
              <p className="text-lg lg:text-xl text-white text-center">{msg}</p>
              <div className="p-4 lg:w-3/5 flex flex-wrap justify-center items-center mt-8">
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(1);
                  }}
                >
                  <img
                    src="/cert.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[32px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Expertise and Experience
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(2);
                  }}
                >
                  <img
                    src="/meet.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Transparent Communication
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(3);
                  }}
                >
                  <img
                    src="/tech.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[10px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Continuous Support
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(4);
                  }}
                >
                  <img
                    src="/24.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Timely Delivery
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(5);
                  }}
                >
                  <img
                    src="/ball.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Affordable Solutions
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
              <img
                src="/mission.png"
                alt="planet-01"
                className="h-auto sm:h-96"
              />
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col items-center lg:items-left lg:justify-center mb-8 lg:mb-0">
              <h2 className="mb-4 w-full text-xl lg:text-3xl text-white font-black text-center lg:text-left">
                Our Mission
              </h2>
              <p className="text-md lg:text-xl text-white text-center lg:text-left">
                At ZyroWave, we are driven by a simple yet ambitious mission to become your reliable and valued partner in the digital realm. Our goal is to empower businesses with cutting-edge software solutions and strategic digital marketing services that not only cater to their distinct requirements but also go above and beyond their expectations.

                With a strong focus on innovation and expertise, we pride ourselves on staying at the forefront of technological advancements to provide you with state-of-the-art web and mobile app development services. Our dedicated team works collaboratively with you, fostering a  collaborative partnership throughout the entire development and marketing process.

                Customer satisfaction is at the core of everything we do.  At ZyroWave, we are committed to delivering excellence, enabling your business to thrive in the digital landscape and achieve unparalleled success.
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
                At ZyroWave, our vision is to be a trailblazing force in the realm of technology and digital innovation, driving positive change for businesses and individuals alike. We envision a future where cutting-edge software solutions and dynamic digital marketing strategies come together seamlessly, empowering businesses to thrive in the rapidly evolving digital landscape.

                As a trusted partner, we will relentlessly pursue the development of state-of-the-art web and mobile applications, ensuring they cater to your specific needs and goals.

                At the heart of our vision is a passion for empowering businesses to reach their full potential.
                Together, we look forward to shaping a future where technology and innovation drive transformative outcomes, making a positive impact on businesses and individuals worldwide.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col items-center">
              <img
                src="/vision.png"
                alt="planet-01"
                className="h-auto sm:h-96"
              />
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
