import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { links } from '../constants'
import { Tilt } from 'react-tilt'
import PropTypes from 'prop-types'

const LinkCard = ({ index, title, link, img }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full p-5 green-pink-gradient bg-tertiary rounded-2xl shadow-card'
      >
        <div className='m-5'>
          <a href={link} className='text-secondary text-[14px] m-2 hover:cursor-pointer' target="_blank">
            <img src={img} className='object-cover w-48 h-48 mb-10 rounded-full' />
          <h3 className='text-[24px] text-white font-bold hover:underline text-center'>
            {title}
          </h3>
          </a>
        </div>
      </Tilt>
    </motion.div>
  )
}

const OtherLinks = () => {
  return (
    <SectionWrapper idName='otherlinks'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My related accounts</p>
        <h2 className={styles.sectionHeadText}>Other Links.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary leading-[28px] text-[17px] max-w-3xl'
      >
        Some other related accounts includes GITHUB and my Photo gallery.
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-8'>
        {links.map((link, index) => (
          <LinkCard
            key={index}
            index={index}
            title={link.title}
            link={link.link}
            img={link.img}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
export default OtherLinks
LinkCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
