// import React from 'react'

// function HomeScreen() {
//   return (
//     <div>HomeScreen</div>
//   )
// }

// export default HomeScreen
import { motion } from 'framer-motion';
import { styles } from '../styles'

// import Spline from '@splinetool/react-spline';

// import { fadeIn, textVariant } from '../utils/motion'

const HomeScreen = () => {
  return (

    <section className={`relative w-full h-screen mx-auto`}>

      <div className="flex items-center justify-center h-screen">

        <div className="bg-[#7EA62A] p-4 rounded-3xl w-3/5 h-3/5 xs:h-1/4 sm:h-1/3 md:h-96 lg:h-1/2 xl:h-3/5 ">

          <div className='flex flex-wrap gap-20 items-center justify-between'>

            <div>

              <div className='text-5xl font-light'>Tempertautre</div>
              <div className='text-5xl font-light'>in your area</div>
              <div className='text-3xl font-thin'>Slightly Coool</div>


            </div>
            <div className='text-10xl font-medium'>19°C</div>

          </div>
      

        </div>

      </div>
      {/* <div
        className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >

          <div className='flex flex-col justify-center items-center mt-5'>

          </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] w-max'>
              <div >
                <p className={`${styles.heroHeadText} text-left`}>
                  Hi, I'm
                </p>
                <div className='flex justify-center w-full items-center flex-col'>
                  <p className='text-white w-full text-4xl md:text-8xl uppercase tracking-wide '>
                    Mahansh Aditya
                  </p>
                  <h2 className=' text-3xl lg:text-[25px] sm:text-[15px] xs:text-[10px] text-gray-400 font-thin'>
                    Full-Stack Developer | Designer
                  </h2>
                </div>
              </div>

            </div>

              <Spline scene="https://prod.spline.design/AXK9pMgh46IPcKfs/scene.splinecode" />
        </div>
      </div> */}

      {/* <div className='absolute pt-10 xs:bottom-10 bottom-16  w-full flex justify-center items-center'>

        <a href="#about">

          <div className='w-[35px] h-[64px] rounded-3xl border-2 border-[#1B2822] flex justify-center items-start p-2'>

            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-2 h-2 rounded-full bg-white mb-1'
            />
          </div>

        </a>

      </div> */}

    </section>
  )
}

export default HomeScreen