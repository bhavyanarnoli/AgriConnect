import { VerticalTimeline, vert, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from 'framer-motion';
import { useState, useEffect } from "react";
import 'react-vertical-timeline-component/style.min.css'

import {styles} from '../styles'
import { experiences } from "../constants";
import {experiences as englishexperiences} from '../constants';
import {experiences as hindiexperiences} from '../hinconstants';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {

  const [audio] = useState(new Audio(experience.audio));
  const handleIconClick = () => {
    audio.play();
  };
  
  const handleIconMouseLeave = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#7EA62A",
        color: "#fff",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ 
        borderRight: "14px solid #7EA62A",
        top: "calc(50% - 10px)",
      }}
      // date={experience.date}
      iconStyle={{ background: experience.iconBg,
        width: "60px",
        height: "60px",
        top: "calc(50% - 32px)", // Adjust the top and left values as needed
      }}

      icon={
        <div className='flex justify-center items-center w-full h-full'
        onClick={handleIconClick}
        onMouseLeave={handleIconMouseLeave}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>

        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>

      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

    </VerticalTimelineElement>
  );
};

const FarmingForecast = ({ language }) => {

  const experiences = language === 'English' ? englishexperiences : hindiexperiences;
  const sectionHeadText = language === 'English' ? 'Farming ForeCast:' : 'खेती का अंदाज़ा';
  const sectionSubText = language === 'English' ? 'Plan Ahead' : 'आगे की योजना ';

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-center`}>
        {sectionHeadText}
        </p>
        <h2 className={`${styles.sectionHeadText} font-semi-bold text-center`}>
        {sectionSubText}

        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(FarmingForecast, "experience");