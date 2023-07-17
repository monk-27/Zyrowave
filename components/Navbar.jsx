/* eslint-disable no-template-curly-in-string */

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className='="font-extrabold text-[34px] leading-[30px] text-white font-black'>TechBotics</h2>
      <div className={` mx-30px gap-8 flex `}>
        <h2 className='="font-extrabold text-[24px] leading-[30px] text-white '>Tech_1</h2>
        <h2 className='="font-extrabold text-[24px] leading-[30px] text-white '>Tech_2</h2>
        <h2 className='="font-extrabold text-[24px] leading-[30px] text-white '>Tech_2</h2>
      </div>



    </div>

  </motion.nav>
);

export default Navbar;
