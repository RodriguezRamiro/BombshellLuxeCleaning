/* //BomshellLuxeCleaning/src/components/Navbar.jsx */
import '../styles/navbar.css'

import {
  Menu,
  X
} from 'lucide-react'

import {
  useEffect,
  useState
} from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

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