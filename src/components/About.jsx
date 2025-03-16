import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[48%] sm:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-3 sm:py-5 px-6 sm:px-12 min-h-[180px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
          <h3 className="text-white text-[14px] sm:text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[12px] sm:text-[17px] max-w-3xl leading-[20px] sm:leading-[30px]"
      >
        I am a skilled fullstack developer with experience in Go, NodeJS as well as ReactJS. I am a quick learner and communicates clearyly. Let&apos;s bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-between gap-y-6 sm:justify-start sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");