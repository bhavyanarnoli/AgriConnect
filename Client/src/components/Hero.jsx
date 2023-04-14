// import { motion } from 'framer-motion';
// import { styles } from '../styles'

// // import { ComputersCanvas } from './canvas';
// import Spline from '@splinetool/react-spline';

// // import { fadeIn, textVariant } from '../utils/motion'

// const Hero = () => {
//   return (

//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >

//         <div
//           className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//         >

//           <div className='flex flex-col justify-center items-center mt-5'>

//             {/* <div className='w-5 h-5 rounded-full bg-[#960000]' /> */}
//             {/* <div className='w-1 sm:h-80 h-40 red-gradient' /> */}

//           </div>
//             <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] w-max'>
//               <div >
//                 <p className={`${styles.heroHeadText} text-left`}>
//                   Hi, I'm
//                 </p>
//                 <div className='flex justify-center w-full items-center flex-col'>
//                   <p className='text-white w-full text-4xl md:text-8xl uppercase tracking-wide '>
//                     Mahansh Aditya
//                   </p>
//                   <h2 className=' text-3xl lg:text-[25px] sm:text-[15px] xs:text-[10px] text-gray-400 font-thin'>
//                     Full-Stack Developer | Designer
//                   </h2>
//                 </div>
//               </div>

//             </div>

//               <Spline scene="https://prod.spline.design/AXK9pMgh46IPcKfs/scene.splinecode" />
//         </div>
//       </div>
//       {/* <ComputersCanvas/> */}

//       <div className='absolute pt-10 xs:bottom-10 bottom-16  w-full flex justify-center items-center'>

//         <a href="#about">

//           <div className='w-[35px] h-[64px] rounded-3xl border-2 border-[#e23b3b] flex justify-center items-start p-2'>

//             <motion.div
//               animate={{
//                 y: [0, 24, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop'
//               }}
//               className='w-2 h-2 rounded-full bg-white mb-1'
//             />
//           </div>

//         </a>

//       </div>

//     </section>
//   )
// }

// export default Hero