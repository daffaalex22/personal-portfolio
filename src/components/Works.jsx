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
  links,
  ongoing
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5 * 0.75)} className="inline-block w-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] mx-auto"
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
              className={`${link.type === "github" ? "black-gradient" : "violet-gradient"} py-2 px-4 rounded-xl font-semibold hover:opacity-80 transition-opacity text-[14px] flex items-center w-full sm:w-[calc(50%-0.25rem)] justify-center ${!link.url ? 'hidden' : ''}`}
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
          <div className="flex items-center gap-2">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            {ongoing && (
              <span 
                className="text-white text-xs px-2 py-1 rounded-full relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #00cea8, #bf61ff, #00cea8)',
                  backgroundSize: '200% 100%',
                  animation: 'gradientMove 2s linear infinite'
                }}
              >
                Ongoing
              </span>
            )}
          </div>
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
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="mt-3 text-secondary text-[12px] sm:text-[17px] max-w-3xl leading-[20px] sm:leading-[30px]"
        >
          These are some of projects that I&apos;ve worked on in the past. Each projects contain links to it&apos;s GitHub repository as well as (some) live page of the projects. This shows my focus, management, drive as well as capability to work with different tech stacks. 
        </motion.p>
      </div>

      <motion.div 
        className="mt-20 mb-0 columns-1 sm:columns-2 lg:columns-3 gap-7 [&>div]:mb-7 mx-auto"
        style={{
          columnWidth: '360px',
          maxWidth: '1200px'
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </motion.div>
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 0%; }
            100% { background-position: -200% 0%; }
          }
        `}
      </style>
    </>
  )
}

export default SectionWrapper(Works, "projects");