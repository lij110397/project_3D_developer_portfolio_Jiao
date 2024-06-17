import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { projects } from '../constants'
import PropTypes from 'prop-types'
import { github } from '../assets'
import { fadeIn, textVariant } from '../utils/motion';

// define a project card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  // return <Tilt className='Tilt' options={{ max: 25 }}></Tilt>
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full p-5 bg-tertiary rounded-2xl sm:w-[320px]'
      >
        <div className='w-full h-[230px] relative'>
          <img
            src={image}
            alt={name}
            className='object-cover w-full h-full rounded-2xl'
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient" onClick={()=>window.open(source_code_link,'_blank')}>
              <img src={github} alt={source_code_link} className="object-contain w-1/2 h-1/2"/>
           </div>
            
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] text-white font-bold">{ name }</h3>
          <p className="text-secondary text-[14px] mt-2">{ description }</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          { tags.map((tag) => (
            <p key={ tag.name } className={ `text-[14px] ${tag.color}` }>
              #{ tag.name }
            </p>
          ))}
          </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <SectionWrapper idName='works'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='flex justify-start w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl mt-3 leading-[30px]'
        >
          There are some projects I have worked on independently and use skills
          I have mentioned in the previous section.
        </motion.p>
      </div>

      <div className='flex flex-wrap gap-10 mt-16'>
        {projects.map((project, index) => (
          <div key={`project-${index}`}>
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Works
ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
