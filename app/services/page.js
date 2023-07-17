'use client';

import { Navbar } from "../../components";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';



const services = () => {
    return (

        <div className="bg-primary-black overflow-hidden">

            <Navbar />
            <div className="justify-center items-center">
                <motion.nav
                    variants={navVariants}
                    initial="hidden"
                    whileInView="show"
                    className={`${styles.xPaddings} py-8 relative`}
                >
                    <div className="w-1/2 mx-auto flex justify-center bg-black rounded-lg">
                        <h1 className="text-[30px] leading-30 text-white font-black p-4 ">Services</h1>
                    </div>
                </motion.nav>
                <div>
                

                </div>

            </div>
        </div>




    )
}
export default services;
