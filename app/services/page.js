'use client';

import { useState } from 'react';
import { Navbar } from "../../components";
import { Explore } from "../../sections"
import styles from '../../styles';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import { exploreWorlds } from '../../constants';
import { staggerContainer } from '../../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../../components';

const services = () => {
    const [active, setActive] = useState('world-2');
    function Card({ world }) {
        return (
            <div className={`${styles.servicescard} transform transition-transform hover:scale-100`}>
                <div className='h-full w-1/2 p-4'>
                    <img
                        src={world.imgUrl}
                        alt="planet-04"
                        className='w-96 h-full border-black shadow-2xl rounded-3xl '
                    />
                </div>

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{world.title}</h2>
                    <p className="h-auto overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">{world.description}</p>
                </div>
            </div>

        );
    }

    return (
        <div className="bg-primary-black overflow-hidden">
            <Navbar />
            {/* every thing do in this div  */}
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
                <div className="">
                    <section className={`${styles.paddings}`} id="explore">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                            className={`${styles.innerWidth} mx-auto flex flex-col`}
                        >
                            <TypingText title="| Choose the Service you want to explore" textStyles="text-center" />

                            <div className="p-8 flex flex-col items-center">
                                {exploreWorlds.map((world, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1 }} // This applies the scaling effect on hover
                                    >
                                        <Card world={world} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default services;
