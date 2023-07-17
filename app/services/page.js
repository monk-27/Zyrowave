'use client';

import { Navbar } from "../../components";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { navVariants, technoVariants, slideIn, fadeIn } from '../../utils/motion';
import { exploreWorlds, technology, technology1 } from '../../constants';
import { staggerContainer } from '../../utils/motion';
import { TypingText } from '../../components';

const services = () => {
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
    function TechnoCard({ techno }) {
        return (
            <div className={`m-2 p-1 flex flex-col items-center  `}>
                <div className='p-1'>
                    <img
                        src={techno.url}
                        alt="planet-04"
                        className='h-24 w-24 border-black shadow-2xl rounded-3xl bg-white '
                    />
                </div>

                <div className="justify-between p-4 leading-normal">
                    <h2 className="text-l tracking-tight text-gray-900 shadow-2xl dark:text-white">{techno.name}</h2>
                </div>
            </div>

        );
    }
    return (
        <>
            <div className="gradient-02 x-0" />
            <div className="bg-primary-black overflow-hidden">
                <Navbar />
                {/* every thing do in this div  */}
                <div className="justify-center items-center">
                    <div className="">
                        <section className={`${styles.paddings}`} id="explore">
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.25 }}
                                className={`${styles.innerWidth} mx-auto flex flex-col`}
                            >
                                <div className=' p-8 flex flex-col items-center'>
                                    <h2 className=' p-8 flex flex-col items-center text-3xl  text-white font-black'>
                                        Empowering Your Digital Solutions
                                    </h2>
                                    <p className='text-xl  text-white'>Revolutionize your digital presence with our cutting-edge tech stack. Let us empower your business solutions today.</p>
                                </div>
                                <div className="p-8 flex flex-col items-center">
                                    {exploreWorlds.map((world, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.1 }} // This applies the scaling effect on hover
                                        >
                                            <motion.div
                                                variants={fadeIn('up', 'tween', 0.1, 1)}
                                                className="relative w-full md:-mt-[20px] -mt-[12px]"
                                            >
                                                <Card world={world} />
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>
                        {/* technologys */}
                        <div className="h-full w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#632381] via-[#1A232E] to-[#1A232E] md:grid-cols-2">
                            <section className='mt-24 p-8 flex flex-col items-center'>
                                <div className=' p-8 flex flex-col items-center '>
                                    <div className=' p-8 flex flex-col items-center'>
                                        <h2 className=' p-8 flex flex-col items-center text-3xl  text-white font-black'>
                                            Empowering Your Digital Solutions
                                        </h2>
                                        <p className='text-xl  text-white'>Revolutionize your digital presence with our cutting-edge tech stack. Let us empower your business solutions today.</p>
                                    </div>
                                    <div className="ml-2 flex flex-row  items-center w-full">
                                        {technology.map((world, index) => (
                                            <motion.nav
                                                key={index}
                                                variants={technoVariants}
                                                initial="hidden"
                                                whileInView="show"
                                            // className={`${styles.xPaddings} py-8 relative`}
                                            >
                                                <TechnoCard techno={world} />
                                            </motion.nav>
                                        ))}
                                    </div>
                                    {/* <div className="ml-2 flex flex-row items-center bg-blue-900 w-full">
                                {technology1.map((world, index) => (
                                    <motion.div
                                        key={index}
                                    >
                                        <TechnoCard techno={world} />
                                    </motion.div>
                                ))}
                            </div> */}

                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default services;
