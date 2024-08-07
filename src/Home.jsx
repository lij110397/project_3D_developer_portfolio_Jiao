import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  ProjectList,
  StarsCanvas,
  Footer,
  Education,
  OtherLinks
} from './components'

const Home = () => {
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
      <ProjectList />
      <OtherLinks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div className="relative z-0 bg-primary">
          <Footer />
          </div>
      </div>
  )
}

export default Home
