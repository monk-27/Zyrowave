
'use client';
import { Navbar, Footer } from "../../components";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
const contact = () => {
    return (
        <>
            <div className="bg-primary-black overflow-hidden">
                <Navbar />







                <div className="w-full h-72 mx-auto flex justify-center text-white text-lg font-bold pb-5">
                    <Footer />
                </div>
            </div>

        </>
    )
}
export default contact;
