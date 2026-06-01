/* //BomshellLuxeCleaning/src/components/Hero.jsx */

import '../styles/hero.css'
import Particles from './Particles'
import { motion } from 'framer-motion'



function Hero() {

  return (

    <section className="hero">

      <Particles />

      <div className="hero-overlay"></div>

    <motion.div
      className="hero-content"
      initial={{
      opacity:0,
      y:40
    }}

      animate={{
      opacity:1,
      y:0
    }}

      transition={{
      duration:0.9,
      ease:'easeOut'
    }}
  >

        <p className="hero-subtitle">
          Tampa Bay Luxury Cleaning Services
        </p>

        <h1>
          Where Luxury Meets Spotless Perfection
        </h1>

        <p className="hero-description">

          Premium residential, Airbnb,
          move-in, and deep cleaning services
          designed for clients who expect elegance,
          detail, and exceptional care.

        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Book Your Cleaning
          </button>

          <button className="secondary-btn">
            View Transformations
          </button>

        </div>

      </motion.div>

    </section>

  )

}

export default Hero