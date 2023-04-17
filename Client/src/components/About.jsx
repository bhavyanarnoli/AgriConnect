import React, { useEffect } from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

import {styles} from '../styles';
// import {services} from '../constants';
import {services as englishServices} from '../constants';
import {services as hindiServices} from '../hinconstants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
    
<Tilt className='xs:w-[300px] w-full h-[400px]'>
  <Link to={title === 'Real-Time Market Information' ? '/market-info' : title === 'Connect With Farmers' ? '/connect-with-farmers' : '/tutorials'}>
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
  </Link>
</Tilt>

);

const About = ({ language }) => {
  console.log(`Current language: ${language}. I am in About.jsx`);
  const services = language === 'English' ? englishServices : hindiServices;
  // console.log(`current services ${services}`);
  console.log(services);
  
  return (
    <>

    <motion.div variants={textVariant()}>
      <p className ={styles.sectionHeadText}>
      WHAT WE'RE PROVIDING</p>

    </motion.div>
    <div className='mt-20 flex flex-wrap gap-20'>

      {services.map((services, index) => (
        <ServiceCard key={services.title} index={index}{...services}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")
// export default About;
