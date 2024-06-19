import { useParams } from 'react-router-dom'
import {
  NavbarProject,
  HeroProject,
  BlogList,
  Footer,
} from './components'
import PropType from 'prop-types'

const Project = ({ projectDetails }) => {
  const { id } = useParams()
  const project = projectDetails.find((n) => n.id === Number(id))
  // console.log(project)
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
        <NavbarProject />
        <HeroProject project={project} />
      </div>
      <BlogList project={project}/>
      <Footer />
    </div>
  )
}

export default Project
Project.propTypes = {
  projectDetails: PropType.array.isRequired,
}
