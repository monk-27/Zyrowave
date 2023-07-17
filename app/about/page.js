'use client';
import { Navbar } from "../../components";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
const about = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
    </div>
  )
}
export default about;
