/* //BomshellLuxeCleaning/src/components/Hero.jsx */

import '../styles/hero.css'
import Particles from './Particles'
import { motion } from 'framer-motion'

import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import { urlFor } from '../urlFor'

function Hero() {

  const [hero, setHero] = useState(null)

  useEffect(() => {

    client
    .fetch(`*[_type == "hero"] [0]`)
    .then((data) => setHero(data))
    .catch(console.error)

  },[])

  if (!hero)
    return (
    <section className="hero loading">
      Loading...
    </section>
    )

  return (

    <section
    className="hero"
    >
      

      <Particles />

      <div className="hero-container">

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
          {hero.subheading}
        </p>

        <h1>
          {hero.heading}
        </h1>

        <p className="hero-description">

        {hero.description}

        </p>

        <div className="hero-buttons">

          <a
          href={hero.primaryButtonLink}
          className="primary-btn"
>
          {hero.primaryButtonText}
          </a>

          <a
          href={hero.secondaryButtonLink}
          className="secondary-btn">
          {hero.secondaryButtonText}
          </a>

        </div>

      </motion.div>

      <div className="hero-visual">

        {hero.backgroundImage && (

          <img
          src={urlFor(hero.backgroundImage).url()}
          alt={hero.heading}

          />

        )}

      </div>

    </div>

    </section>



  )

  }

export default Hero