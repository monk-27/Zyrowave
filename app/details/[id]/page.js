/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */

'use client';

import { useState, useEffect } from 'react';
import { exploreWorlds } from '../../../constants/index';
import { Navbar, Footer, StartSteps } from '../../../components';
import styles from '../../../styles';

const DetailsPage = ({ params }) => {
    const [isAnimated, setIsAnimated] = useState(false);
  const showdata = exploreWorlds.find((item) => item.id === (params.id));

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
  useEffect(() => {
    setIsAnimated(true);
  }, []);
return (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="justify-center items-center">
      <section className={`${styles.paddings} mb-12`}>
        <h2 className={`mt-1 mx-auto text-xl lg:text-4xl xl:text-6xl text-yellow-300 font-black text-center ${isAnimated ? 'animate-pulse' : ''}`}>

          {showdata.title}

        </h2>
        <div className="flex justify-center mt-5 md:mt-8 md:bg-transparent ">
          {/* <img
            src={showdata.imgUrl}
            alt="planet-01"
            className="w-full h-auto max-w-[600px] md:max-w-half rounded-[32px] object-cover md:bg-transparent "
          /> */}
        </div>

        <div className="mt-5 md:flex items-center justify-center">
          <div className="md:w-1/2 flex justify-center mt-5 md:mt-0 md:bg-transparent ">
            <img
              src={showdata.imgUrl}
              alt="planet-01"
              className="w-full h-auto max-w-[600px] md:max-w-half rounded-[32px] object-cover md:bg-transparent "
            />
          </div>
          {/* <StartSteps
            // key={feature}
            number={`${showdata.id < 10 ? '0' : ''} ${showdata.id + 1}`}
            // text={feature}
          /> */}
          <div className="md:w-1/2  md:max-w-[600px] md:mr-12 flex flex-col items-center md:items-start md:text-left">
            <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
              <span className="mt-5 text-yellow-300  font-bold lg:text-2xl">
                {showdata.subtitle}
              </span>
              <span className="md:text-base sm:text-2xl text-white text-center font-bold ml-1">
                {showdata.description1}
              </span>
            </p>
            <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
              <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
                {showdata.subtitle1}
              </span>
              <span className="md:text-base sm:text-2xl text-white text-center font-bold ml-1">
                {showdata.description2}
              </span>
            </p>
            <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
              <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
                {showdata.subtitle2}
              </span>
              <span className="md:text-base sm:text-2xl text-white text-center font-bold ml-1">
                {showdata.description3}
              </span>
            </p>
            <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
              <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
                {showdata.subtitle3}
              </span>
              <span className="md:text-base sm:text-2xl text-white text-center font-bold ml-1">
                {showdata.description4}
              </span>
            </p>
            <p className="mt-5 md:text-base sm:text-2xl text-white text-center md:text-left ">
              <span className="mt-5 text-yellow-300 text-center font-bold lg:text-2xl">
                {showdata.subtitle4}
              </span>
              <span className="md:text-base sm:text-2xl text-white text-center font-bold ml-1">
                {showdata.description5}
              </span>
            </p>

          </div>

        </div>
      </section>
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
    </div>
    <div className="w-full h-72 mx-auto flex justify-center text-white text-lg font-bold pb-5">
      <Footer />
    </div>
  </div>
  );
};

export default DetailsPage;
