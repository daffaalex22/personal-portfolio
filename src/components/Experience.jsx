import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import 'react-vertical-timeline-component/style.min.css'
import { textVariant } from './../utils/motion';
import { styles } from '../styles'
import SectionWrapper from './../hoc/SectionWrapper';
import { experiences } from '../constants'
import { useState } from 'react';

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff"
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631"
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon} 
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white sm:text-[24px] text-[18px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary sm:text-[16px] text-[14px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className="mt-3 sm:mt-5">
        <div className="overflow-hidden">
          <ul className={`list-disc ml-5 space-y-1 sm:space-y-2 transition-all duration-700 ease-in-out ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-[24px]'
          }`}>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                style={{
                  transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
                }}
                className={`text-white-100 text-[12px] sm:text-[14px] pl-1 tracking-wider transition-all duration-500 ease-in-out ${
                  !isExpanded && index > 0 
                    ? 'opacity-0 transform translate-y-[-8px]' 
                    : 'opacity-100 transform translate-y-0'
                }`}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
        
        {experience.points.length > 1 && (
          <div className="flex justify-end">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[12px] text-secondary mt-2 transition-all duration-300 hover:text-white cursor-pointer"
            >
              {isExpanded ? "Show less" : "....read more"}
            </button>
          </div>
        )}
      </div>
    </VerticalTimelineElement> 
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}  >What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div>
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
  )
}
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SectionWrapper(Experience, "work");