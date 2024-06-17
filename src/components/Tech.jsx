import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
const Tech = () => {
  return (
    <SectionWrapper idName='tech'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What skills I have</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        { technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={ technology.icon} />
        </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Tech
