import SectionWrapper from '../../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { textVariant, fadeIn } from '../../utils/motion'
import PropTypes from 'prop-types'
import { Tilt } from 'react-tilt'
import Pagination from './Pagination'
import { useState } from 'react'

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div variants={ fadeIn('up', 'spring', index * 0.5, 0.75) }>
      <Tilt
        options={ {
          max: 30,
          scale: 1,
          speed: 450,
        } }
        className="w-full p-5 border bg-tertiary rounded-2xl">
        
        <div className="flex flex-col gap-2 text-white">
          <h2 className="text-2xl font-bold hover:underline"><a href={ blog.link } alt={ blog.title }>{ blog.title }</a></h2>
          <p>{ blog.description }</p>
          <div className="flex flex-wrap gap-2">{
            blog.tags.map((tag,index) => (
              <p key={ index } className={ `text-[14px] ${tag.color}` }>
                #{ tag.name }
              </p>
            ))
          }</div>
          
        </div>
      </Tilt>
    </motion.div>
  )
}
const BlogList = ({ project }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = project.blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
  return (
    <SectionWrapper idName='blogs'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech blogs related</p>
        <h2 className={styles.sectionHeadText}>BlogList.</h2>
      </motion.div>

      <div className='flex justify-start w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl mt-3 leading-[30px]'
        >
          There are <span className="text-[#915eff] font-bold">{ project.blogs.length}</span> blogs concluded about tech points I met in the projects.
        </motion.p>
      </div>
      <div className="flex flex-col items-end gap-10">
      <div className="flex flex-col w-full gap-10 mt-5">
        {currentBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(project.blogs.length / blogsPerPage)} onPageChange={setCurrentPage} />
      </div>
    </SectionWrapper>
  )
}
export default BlogList

BlogList.propTypes = {
  project: PropTypes.object.isRequired,
}
BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}