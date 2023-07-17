'use client';

import { Navbar, Footer } from "../../components";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { technoVariants, slideIn, fadeIn } from '../../utils/motion';
import { exploreWorlds, technology, technology1 } from '../../constants';
import { staggerContainer } from '../../utils/motion';

const services = () => {

    function Card({ world }) {
        return (
            <div className={`${styles.servicescard} transform transition-transform hover:scale-100`}>
                <div className='h-full w-full p-4'>
                    <img
                        src={world.imgUrl}
                        alt="planet-04"
                        className='w-full h-full border-black shadow-2xl rounded-3xl mr-20 '
                    />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white relative pb-2">
                        {world.title}<br />
                        <span className="glowing-underline"></span>
                    </h2>
                    <p className="h-auto overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">{world.description}</p>
                </div>

            </div>

        );
    }
    function TechnoCard({ techno }) {
        return (
            <div className={`m-2 p-1 flex flex-col items-center `}>
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
                                    Tailored solutions for your business.
                                </h2>
                                <p className='text-xl text-white flex flex-col items-center'>Our custom solutions can help your business reach its full potential. Our team of experts will help you <span> reach your goals by using the latest technology and tailor-made plans.</span></p>
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
                        <section className='mt-18 p-8 flex flex-col items-center'>
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
                    {/* contact redirect page  */}
                    <section className="flex flex-col items-center">
                        <div className="p-20 flex flex-col items-center">
                            <div className="bg-[#253B47] p-20 flex flex-col items-left border-black shadow-md rounded-3xl">
                                <h2 className=' p-8 flex flex-col items-left text-3xl  text-white font-black'>
                                    We specialises in custom software development.<br />
                                    We‘re happy to help with your requirements.
                                </h2>
                                <p className='pl-8 text-xl  text-white'>Web or mobile app development, database design and management, or any other software project, we<br /> can help you achieve your goals. Please contact us to discuss your project and receive a quote and <br />timeline.</p>
                                <div className="flex flex-col items-left ">
                                    <div className="p-8">

                                        <a href="/contact"><button className={`${styles.hellobutton}`}>Say Hello<span className="ml-2 h-5 w-5 mb-1 animate-shakehand" aria-hidden="true">👋</span></button></a>
                                        <a href="/services"><button className="border-2 border-blue-900 ml-6 bg-white font-medium text-blue-900 px-4 py-2 rounded">{`Learn More →`}</button></a>
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
        </>
    )
}
export default services;
