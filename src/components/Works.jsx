/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { SectionWrapper } from './../hoc';
import { fadeIn, textVariant } from './../utils/motion';
import { styles } from '../styles';
import { projects } from '../constants';
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  links
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5 * 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((link, index) => (
            <button
              key={`title-${index}`}
              className={`${link.type === "github" ? "black-gradient" : "violet-gradient"} py-2 px-4 rounded-xl font-semibold hover:opacity-80 transition-opacity text-[14px] flex items-center w-[calc(50%-0.25rem)] justify-center ${!link.url ? 'hidden' : ''}`}
              type='button'
              onClick={() => window.open(link.url, "_blank")}
              disabled={!link.url}
            >
              <img 
                src={link.icon}
                alt="icon"
                className="h-[14px] w-auto mr-2"
              />
              {link.title}
            </button>
          ))}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}  >My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These are some of projects that I&apos;ve worked on in the past. Each projects contain links to it&apos;s GitHub repository as well as (some) live page of the projects. This shows my focus, management, drive as well as capability to work with different tech stacks. 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");