import { technologies } from '../constants';
import { BallCanvas } from './canvas';
import SectionWrapper from './../hoc/SectionWrapper';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
      {technologies.map((technology) => (
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")