/* bizzTemplates/BomshellLuxeCleaning/src/components/Testimonials.jsx */

import '../styles/testimonials.css'
import Reveal from './Reveal'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [

  {
    name: 'Sophia M.',
    review:
      'Absolutely incredible attention to detail. My home felt like a luxury resort after the cleaning service.',
  },

  {
    name: 'Rachel T.',
    review:
      'Professional, reliable, and beautifully done. The level of care and presentation truly stands out.',
  },

  {
    name: 'Michael R.',
    review:
      'Bombshell Luxe Cleaning completely transformed our Airbnb property. Guests immediately noticed the difference.',
  }

]

function Testimonials() {

  return (

    <section className="testimonials-section">

      <Reveal>

      <div className="section-heading">

        <p>
          Client Experiences
        </p>

        <h2>
          Trusted Across Tampa Bay
        </h2>

      </div>

      <div className="trust-stats">

        <div className="stat-card">
          <h3>250+</h3>
          <p>Luxury Cleanings</p>
        </div>

        <div className="stat-card">
          <h3>98%</h3>
          <p>Recurring Clients</p>
        </div>

        <div className="stat-card">
          <h3>5-Star</h3>
          <p>Client Experience</p>
        </div>

      </div>

      <div className="testimonials-grid">

        {testimonials.map((item, index) => (

          <motion.div
            className="testimonial-card"
            key={index}

            initial={{
              opacity:0,
              y:30
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true,
              amount:0.15
            }}

            transition={{
              duration:0.5,
              delay:index * 0.08
            }}
          >

            <div className="stars">

              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill="currentColor"
                />
              ))}

            </div>

            <p className="review">
              "{item.review}"
            </p>

            <h4>
              {item.name}
            </h4>

          </motion.div>

        ))}

      </div>
      </Reveal>

    </section>

  )

}

export default Testimonials