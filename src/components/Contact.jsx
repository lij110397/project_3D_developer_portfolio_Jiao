import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../utils/motion'
import { useRef, useState } from 'react'
import EarthCanvas from './canvas/Earth'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  // function for handling change
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // function for handling submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_0uqkog7',
        'template_himrcdq',
        {
          from_name: form.name,
          to_name: 'Jiao Li',
          from_email: form.email,
          to_email: 'lij0928@gmail.com',
          message: form.message,
        },
        '5uiSjyxAVSzJcmD7s'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you for your message! I will get back to you soon.')
          setForm({ name: '', email: '', message: '' })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('something is wrong')
        }
      )
  }

  return (
    <SectionWrapper idName='contact'>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden max-h-screen`}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 mt-12'
          >
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
              />
            </label>
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
              />
            </label>
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your Message</span>
              <textarea
                rows={4}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
              />
            </label>

            <button
              type='submit'
              className='px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary rounded-xl w-fit shadow-primary'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
