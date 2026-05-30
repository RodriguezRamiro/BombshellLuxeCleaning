/* //BomshellLuxeCleaning/src/components/Navbar.jsx */

import '../styles/navbar.css'

import {
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react'

import {
  useEffect,
  useState
} from 'react'

/*
Navbar booknow button needs to be hooked up
navbar logo should be clickable for index
*/

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

  const [theme, setTheme] =
    useState(
      localStorage.getItem('theme')
      || 'light'
    )

  // Scroll Effect
  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40)

    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )

  }, [])

  // Theme Effect
  useEffect(() => {

    document.documentElement.setAttribute(
      'data-theme',
      theme
    )

    localStorage.setItem(
      'theme',
      theme
    )

  }, [theme])

  const toggleTheme = () => {

    setTheme(
      theme === 'light'
        ? 'dark'
        : 'light'
    )

  }

  return (

    <nav
      className={
        scrolled
          ? 'navbar scrolled'
          : 'navbar'
      }
    >

      <div className="logo">
        Bombshell Luxe
      </div>

      <div className="nav-links">

        <a href="#services">
          Services
        </a>

        <a href="#transformations">
          Transformations
        </a>

        <a href="#promotions">
          Promotions
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

      <button className="nav-btn">
        Book Now
      </button>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
      >

        {
          theme === 'light'
            ? <Moon />
            : <Sun />
        }

      </button>

      <button
        className="menu-toggle"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {
          menuOpen
            ? <X />
            : <Menu />
        }

      </button>

      <div
        className={
          menuOpen
            ? 'mobile-menu active'
            : 'mobile-menu'
        }
      >

        <a
          href="#services"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Services
        </a>

        <a
          href="#transformations"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Transformations
        </a>

        <a
          href="#promotions"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Promotions
        </a>

        <a
          href="#contact"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Contact
        </a>

      </div>

    </nav>

  )

}

export default Navbar