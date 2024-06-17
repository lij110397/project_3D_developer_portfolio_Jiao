/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';
import { Tilt }  from 'react-tilt';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import PropType from 'prop-types';
import SectionWrapper from '../hoc/SectionWrapper';
// define the ServiceCard component

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={ fadeIn("right", "spring", 0.5 * index, 0.75) }
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={ {
            max: 45,
            scale: 1,
            speed:450
          } }
        className="rounded-[20px] bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={ icon } alt={ title } className="object-contain w-16 h-16"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title }</h3>
        </div> 
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={ fadeIn("", "", 0.1, 1) }
      className="mt-4 text-secondary leading-[28px] text-[17px] max-w-3xl">
        I am a front-end developer who use Typescript and Javascript as the main programming language. Besides, I am also familiar with common UX research methods and am able to use Figma for prototyping. I can code in Java as well, but may not be that good.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-10">
        { services.map((service,index) => (
          <ServiceCard key={ index } title={ service.title } index={ index } icon={ service.icon} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default About;

ServiceCard.propTypes = {
  title: PropType.string.isRequired,
  index: PropType.number.isRequired,
  icon: PropType.string.isRequired
}