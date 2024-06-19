import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 py-5 z-20 bg-primary`}
    >
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='object-contain h-9 w-9' />
          <p className='font-bold text-white text-[18px] cursor-pointer flex' title="Click to go back homepage">
            JIAOLL &nbsp;<span className='hidden lg:block'> | &nbsp;Personal Website</span>
          </p>
        </Link>

        <ul className='flex-row hidden gap-10 list-none md:flex'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:text-white ${
                active === link.title ? 'text-white' : 'text-secondary'
              } cursor-pointer text-[18px] font-medium`}
              onClick={() => {
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-end flex-1 md:hidden'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='object-contain w-[24px] h-[24px] cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 absolute top-16 right-0 mx-4 my-2 min-w-[140px] black-gradient z-10 rounded-xl`}
          >
            <ul className='flex-col items-start justify-end gap-6 list-none'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`hover:text-white ${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={ () => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
