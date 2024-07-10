/* eslint-disable react/no-unknown-property */
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { educations } from '../constants'
import properType from 'prop-types'
import { useState } from 'react'

const EducationCard = ({
  index,
  university,
  date,
  degree,
  modules,
  icon,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className='w-full md:w-[350px]'>
      <motion.div
        variants={fadeIn('left', 'spring', 0.5 * index, 0.75)}
        className='w-full gradient-animated p-[1px] rounded-[20px] shadow-card'
        onClick={handleClick}
        whileTap={ { scale: 0.95 } }
        title="click to check modules"
      >
        <div
          className={`rounded-[20px] bg-tertiary py-5 px-12 min-h-[400px] flex text-center gap-5 justify-evenly items-center flex-col ${
            isFlipped ? 'hidden' : ''
          } ${isFlipped ? '' : 'transform rotate-y-180'} hover:cursor-pointer`}
        >
          <h3 className='text-white text-[20px] font-bold text-center mt-5'>
            {university}
          </h3>

          <img
            src={icon}
            alt={university}
            className='object-contain rounded-full h-36 w-36 green-pink-gradient'
          />
          <p>{date}</p>
          <p>{degree}</p>
        </div>

        <div
          className={`rounded-[20px] bg-tertiary py-5 px-12 min-h-[400px] flex items-center flex-col gap-5 mt-5 ${
            isFlipped ? '' : 'hidden'
          } ${isFlipped ? '' : 'transform rotate-y-180'}  hover:cursor-pointer`}
        >
          <h3 className='text-white text-[20px] font-bold text-center mt-5'>
            Modules
          </h3>
          <div className='flex flex-wrap gap-3 mb-5'>
            {modules.map((module, index) => (
              <div key={index} className='flex gap-0'>
                <div className='w-1 bg-white'></div>
                <p
                  key={index}
                  className='w-auto px-2 py-1 border rounded-sm text-md'
                >
                  {module}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Education = () => {
  return (
    <SectionWrapper idName='education'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Study and Degrees</p>
        <h2 className={styles.sectionHeadText}>Eduction.</h2>
      </motion.div>

      <motion.p variants={ fadeIn("", "", 0.1, 1) }
      className="mt-4 text-secondary leading-[28px] text-[17px] max-w-3xl">
        Click and Flip the card to find out more about what I learnt in my education experiences.
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-8'>
        {educations.map((education, index) => (
          <EducationCard
            key={index}
            university={education.university}
            index={index}
            date={education.date}
            degree={education.degree}
            modules={education.modules}
            icon={education.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
export default Education
EducationCard.propTypes = {
  university: properType.string.isRequired,
  index: properType.number.isRequired,
  date: properType.string.isRequired,
  degree: properType.string.isRequired,
  modules: properType.array.isRequired,
  icon: properType.string.isRequired,
}
