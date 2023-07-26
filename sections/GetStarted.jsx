/* eslint-disable react/button-has-type */

'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/why.gif"
          alt="get-started"
          className="w-[90%] h-[80%] rounded-full"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Why Choose Us ?" />
        <TitleText title={<>Unleashing Your Business's Potential</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[20px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
        <a href="/about">
          <button className={`${styles.explorebutton}`}>
            Explore More
            <span
              className="ml-2 h-5 w-5 mb-1 animate-shakehand"
              aria-hidden="true"
            >
              👋
            </span>
          </button>
        </a>
      </motion.div>

    </motion.div>

  </section>
);

export default GetStarted;
