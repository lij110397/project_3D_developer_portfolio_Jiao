import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col items-center mt-5'>
          <div className='rounded-full bg-[#915eff] w-5 h-5' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>

        <div className='mx-10'>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am <span className='text-[#915eff]'>Jiao Li</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I am A Frontend Developer, <br className='block md:hidden' />A UX
            designer and <br className='block md:hidden' />A coming full-stack
            developer.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute flex items-start justify-center w-full xs:bottom-10 bottom-32'>
        <a href='#about'>
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

export default Hero
