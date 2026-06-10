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

import { client } from '../sanityClient'


function Navbar() {

  const [settings, setSettings] = useState(null)

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

    const [theme, setTheme] =
    useState(() => {

      return (
        localStorage.getItem('theme')
        || 'light'
      )

    })

    useEffect(() => {

      client
        .fetch(`*[_type == "siteSettings"][0]`)
        .then((data) => setSettings(data))
        .catch(console.error)

      }, [])

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

  if (!settings) return null

  return (

    <nav
      className={
        scrolled
          ? 'navbar scrolled'
          : 'navbar'
      }
    >

      <a
      href="#"
      className="logo"
      >
        {/* Bombshell Luxe */}
        {settings.businessName}

        </a>

      <div className="nav-links">

      {settings.navigationLinks?.map((link, index) => (

      <a
      key={index}
      href={link.href}
      >

      {link.label}

      </a>

      ))}

      </div>

      <a
      href={settings.navButtonLink}
      className="nav-btn"
      >

      {settings.navButtonText}

      </a>

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

      {settings.navigationLinks?.map((link, index) => (

        <a
        key={index}
        href={link.href}

        onClick={() =>
          setMenuOpen(false)
        }
        >

        {link.label}

        </a>

        ))}

        </div>

        </nav>

        )

      }

export default Navbar