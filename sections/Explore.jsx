'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('Software Development');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Our Service" textStyles="text-center" />
        <TitleText
          title={<>Choose the Service you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div>
          <div className=" mt-[40px] flex lg:flex-row flex-col  min-h-[10vh] gap-5">
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
          ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Explore;
