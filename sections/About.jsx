'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About ZyroWave" textStyles="text-center pt-12" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal  sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">ZyroWave, </span>
        your one-stop software company that brings together a talented
        team of experts to provide a comprehensive suite of
        <span className="font-extrabold text-white"> technology solutions, including cutting-
          edge software development and dynamic digital marketing services.
        </span>
        We are passionate
        about leveraging the power of technology
        <span className="font-extrabold text-white"> to drive growth and success </span>
        for businesses of
        <span className="font-extrabold text-white"> all
          sizes and industries.
        </span>

      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween')}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>

  </section>
);

export default About;
