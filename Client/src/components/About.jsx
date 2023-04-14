import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
    
<Tilt className='xs:w-[300px] w-full h-[400px]'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full p-4 rounded-[20px] shadow-card'
    style={{ maxWidth: "350px", margin: "auto", height: "100%" }}
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-primary rounded-[20px] py-5 px-12 h-full flex justify-evenly items-center flex-col'
    >
      <h3 className='text-white text-[20px] py-4 font-light text-center'>
        {title}
      </h3>

      <img
        src={icon}
        alt='web-development'
        className='w-30 h-30 object-contain'
      />

    </div>
  </motion.div>
</Tilt>

);


const About = () => {
  return (
    <>

    <motion.div variants={textVariant()}>
      <p className ={styles.sectionHeadText}>
      WHAT WE'RE PROVIDING</p>

      {/* <h2 className={styles.sectionHeadText} >
        Overview </h2> */}


    </motion.div>

    {/* <motion.p 
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-red-50 text-[17px] max-w-3xl leading-[30px]">
    </motion.p>

    <motion.p 
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-red-50 text-[17px] max-w-3xl leading-[30px] mb-8">
      </motion.p>

      <motion.p 
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-red-50 text-[17px] max-w-3xl leading-[30px] mb-8">
      </motion.p> */}

    <div className='mt-20 flex flex-wrap gap-20'>

      {services.map((services, index) => (
        <ServiceCard key={services.title} index={index}{...services}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")