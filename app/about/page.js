'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../../components';
import styles from '../../styles';
import { OurTeam } from '../../constants';

const about = () => {
  const [msg, setMsg] = useState(
    'We deliver reliable and high-performance products to our clients so that they can take their businesses to the next level with a high growth rate.',
  );
  const selectApproach = (approach) => {
    switch (approach) {
      case 1:
        setMsg(
          'We kickstart our journey by immersing ourselves in your vision and goals. Through creative brainstorming and thoughtful discussions, we conceive inspired concepts that lay the groundwork for your project.',
        );
        break;
      case 2:
        setMsg(
          'Before we embark on development, we conduct a thorough analysis to ensure our ideas align with your needs. Our team crafts a strategic blueprint, outlining a well-defined roadmap for seamless project execution.',
        );
        break;
      case 3:
        setMsg(
          'Our skilled developers, designers, and marketers collaborate to bring your vision to life. From web and app development to software solutions and captivating UI/UX design, we infuse brilliance into every facet of your project.',
        );
        break;
      case 4:
        setMsg(
          ' We leave no room for errors. Our rigorous testing process meticulously assesses every detail to ensure flawless performance and functionality. This ensures that your end-product is polished and seamless.',
        );
        break;
      case 5:
        setMsg(
          'The culmination of our efforts results in the unveiling of your masterpiece. With utmost care, we finalize and deliver your project, ready to make a lasting impact on your audience. Your success becomes our success as we witness excellence unfold.',
        );
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
                <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
                  End-to-End Solutions :
                </span>
                <span className="md:text-base sm:text-2xl text-white text-center font-bold ml-1">
                  Techbotics is your one-stop destination for all things
                  tech-related. From software development to digital marketing,
                  we offer end-to-end solutions that cover every aspect of your
                  digital journey.
                </span>
              </p>
              <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
                <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
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
                <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
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
                <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
                  Customer-Centric Support:
                </span>
                <span className="md:text-base sm:text-2xl text-white text-center font-bold">
                  At Techbotics, your satisfaction is our top priority. Our
                  dedicated support team is always ready to address any queries
                  or issues, ensuring that you receive exceptional customer
                  service at every step.
                </span>
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center mt-5 md:mt-0 md:bg-transparent ">
              <img
                src="/choose.gif"
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
                Our Core Approach
              </h2>
              <span className="mb-2 w-full text-2xl lg:text-3xl text-white font-black text-center border-b-2 mt-[-30px] text-transparent">
                Our Core Approach
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
                    src="/idea.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[32px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Inspired Ideation
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(2);
                  }}
                >
                  <img
                    src="/diagram.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Strategic Blueprint
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(3);
                  }}
                >
                  <img
                    src="/coding.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[10px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Crafting Brilliance
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(4);
                  }}
                >
                  <img
                    src="/report.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Precision Testing
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-col m-2 lg:m-4"
                  onClick={() => {
                    selectApproach(5);
                  }}
                >
                  <img
                    src="/rocket.gif"
                    alt="planet-01"
                    className="w-[80px] h-[80px] rounded-[2px] object-cover"
                  />
                  <p className="mt-2 text-sm lg:text-lg text-white text-center">
                    Excellence Unveiled
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
                At Techbotics, we are driven by a simple yet ambitious mission to become your reliable and valued partner in the digital realm. Our goal is to empower businesses with cutting-edge software solutions and strategic digital marketing services that not only cater to their distinct requirements but also go above and beyond their expectations.

                With a strong focus on innovation and expertise, we pride ourselves on staying at the forefront of technological advancements to provide you with state-of-the-art web and mobile app development services. Our dedicated team works collaboratively with you, fostering a  collaborative partnership throughout the entire development and marketing process.

                Customer satisfaction is at the core of everything we do.  At Techbotics, we are committed to delivering excellence, enabling your business to thrive in the digital landscape and achieve unparalleled success.
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
                At Techbotics, our vision is to be a trailblazing force in the realm of technology and digital innovation, driving positive change for businesses and individuals alike. We envision a future where cutting-edge software solutions and dynamic digital marketing strategies come together seamlessly, empowering businesses to thrive in the rapidly evolving digital landscape.

                As a trusted partner, we will relentlessly pursue the development of state-of-the-art web and mobile applications, ensuring they cater to your specific needs and goals.

                At the heart of our vision is a passion for empowering businesses to reach their full potential.
                Together, we look forward to shaping a future where technology and innovation drive transformative outcomes, making a positive impact on businesses and individuals worldwide.
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
              We're successful because of "Our Team." Our talented and diverse
              team works together to deliver excellent results for our clients.
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
