'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='grid grid-cols-2'>
     
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="w-full" />
        <img src="/hero.png"
          alt="cover"
          className="z-10 relative"
        />
      

        </motion.div>
        <div className="flex items-center">
          <div className="w-2/3 pl-12">
        <motion.h1 variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
            Design
            <br/>
        Transform
        Accelerate
        </motion.h1>
        <motion.p variants={textVariant(1.1)}p
        className={styles.heroPera}>We Revolutionize User Experience
        Using Behavioural Science.</motion.p> 
       
     
          </div>
      </div>
        </div>
    </motion.div>

  </section>
);

export default Hero;
