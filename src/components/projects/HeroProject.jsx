import { linkIcon } from '../../assets'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { fadeIn } from '../../utils/motion'
import PropType from 'prop-types'

const HeroProject = ({ project }) => {
  return (
    <section className='relative w-full h-screen mx-auto' id='project'>
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 h-auto`}
      >
        <div className='flex flex-col gap-3 flex-2'>
          <h1 className={`${styles.projectHeadText}`}>{project.title}</h1>
          <div className='flex flex-col gap-1'>
            <p className='text-[#915eff] uppercase'>
              Role: &nbsp;
              {project.roles.map((role, index) => (
                <span key={index} className='text-white'>
                  {role} &nbsp;
                </span>
              ))}
            </p>
            <p className='text-[#915eff] uppercase'>
              Duration: &nbsp;
              <span className='text-white'>{project.duration}</span>
            </p>

            <div className='flex gap-1'>
              {project.tags.map((tag, index) => (
                <span key={index} className={`${tag.color}`}>
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
          <div className='flex justify-start w-full'>
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className='text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              {project.description}
            </motion.p>
          </div>
          <div className='flex flex-row items-start'>
            <p className='text-[#915eff] uppercase'>
              Link of the website: &nbsp;
            </p>
            <a
              href={project.link}
              onClick={() => window.open(project.link, '_blank')}
            >
              <img src={linkIcon} alt='link' className='inline-block w-5 h-5' />
            </a>
          </div>

          <div>
            <ul className='mt-5 ml-5 space-y-2 list-disc'>
              {project.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='w-full overflow-y-scroll flex-3 max-h-[600px]'>
          <img src={project.img} alt='projectHero' className='rounded-xl' />
        </div>
      </div>

      <div className='absolute flex items-start justify-center w-full xs:bottom-10 bottom-32'>
        <a href='#blogs'>
          <div className='border-4 rounded-3xl w-[35px] h-[64px] flex justify-center items-start p-2 border-secondary'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 mb-1 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  )
}
export default HeroProject

HeroProject.propTypes = {
  project: PropType.object.isRequired,
}
