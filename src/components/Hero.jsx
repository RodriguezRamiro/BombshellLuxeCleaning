/* //BomshellLuxeCleaning/src/components/Hero.jsx */

import '../styles/hero.css'
import Particles from './Particles'

function Hero() {

  return (

    <section className="hero">

      <Particles />

      <div className="hero-overlay"></div>

      <div className="hero-content">

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

      </div>

    </section>

  )

}

export default Hero