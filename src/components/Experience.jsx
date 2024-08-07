import SectionWrapper from '../hoc/SectionWrapper'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import PropTypes from 'prop-types'
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex items-center justify-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='object-cover w-10 h-10 rounded-full'
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

        <div className="flex flex-row flex-wrap gap-2">
          { experience.tags.map((tag) => (
            <span key={ tag.name } className={ `text-[14px] ${tag.color}` }>
              #{ tag.name }
            </span>
          ))}
          </div>
      </div>

      <ul className='mt-5 ml-5 space-y-2 list-disc'>
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
  )
}
const Experience = () => {
  return (
    <SectionWrapper idName='work'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='flex flex-col mt-8'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  )
}

export default Experience
ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
}
