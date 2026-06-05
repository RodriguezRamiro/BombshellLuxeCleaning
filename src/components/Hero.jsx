/* //BomshellLuxeCleaning/src/components/Hero.jsx */

import '../styles/hero.css'
import Particles from './Particles'
import { motion } from 'framer-motion'

import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

function Hero() {

  const [hero, setHero] = useState(null)

  useEffect(() => {

    client
    .fetch(`*[_type == "hero"] [0]`)
    .then((data) => setHero(data))
    .catch(console.error)

  },[])

  if (!hero) return null

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
          {hero.subheading}
        </p>

        <h1>
          {hero.heading}
        </h1>

        <p className="hero-description">

        {hero.description}

        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
          {hero.primaryButton}
          </button>

          <button className="secondary-btn">
          {hero.secondaryButton}
          </button>

        </div>

      </motion.div>

    </section>

  )



export default Hero