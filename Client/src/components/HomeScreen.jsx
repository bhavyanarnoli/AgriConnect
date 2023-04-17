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
  const handleSubmit = (event) =>{
    event.preventDefault();
    const {weather} = event.target;
    console.log(weather.value);
  }
   return (

    <section className={`relative w-full h-screen mx-auto`}>

      <div className="flex items-center justify-center h-screen">

        <div className="bg-[#86a541] p-4 rounded-3xl w-3/5 h-3/5 xs:h-1/4 sm:h-1/3 md:h-96 lg:h-1/2 xl:h-3/5 ">

          <div className='flex h-full items-center justify-between'>

            <div className='text-[54px] -translate-x-1/4'>

              <div className='font-semibold'>Temprature</div>
              <div className='font-semibold'>in your area</div>
              <div className='text-2xl font-light uppercase leading-[39px] tracking-[0.1rem]'>Slightly Cool</div>
              <form onSubmit={handleSubmit} className='flex items-center py-4' >
                <input name='weather' className='bg-transparent border-solid border-white border-2  rounded-md p-4 text-base text-white focus:outline-none' type="text" placeholder='' />
                {/* <button type='submit' className='px-2' >

                <img className='invert' src="https://img.icons8.com/ios/50/null/arrow--v1.png" />


                </button> */}
              </form>

            </div>
            <div className='text-10xl scale-150 font-medium translate-x-1/4'>19°C</div>

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