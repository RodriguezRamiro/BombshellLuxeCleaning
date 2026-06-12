/* bizzTemplates/BomshellLuxeCleaning/src/components/Testimonials.jsx */

import '../styles/testimonials.css';
import Reveal from './Reveal';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

/*
need to have leave review button and/or api from google reviews? limit up to
3-5 most recents with at least 4 stars.
stats card should be dynamic. maybe we need a way to calculate
actual stats. 5 stars we can link to google reviwes,
cleanings  and recurring clients needs to be calculated automatically somehow.
would it be best to leave them statiic?
*/

function Testimonials() {

  const [sectionData, setSectionData] = useState(null)
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    client
    .fetch(`*[_type == "testimonialsSection"][0]`)
    .then((data) => setSectionData(data))
    .catch(console.error)

    client
    .fetch(`*[_type == "testimonial"]`)
    .then((data) => setTestimonials(data))
    .catch(console.error)

  }, [])

  if (!sectionData) return null

  return (

    <section className="testimonials-section">

      <Reveal>

      <div className="section-heading">

        <p>
          {/* Client Experiences */}
          {sectionData.sectionSubtitle}
        </p>

        <h2>
          {/* Trusted Across Tampa Bay */}
          {sectionData.sectionTitle}
        </h2>

      </div>

      <div className="trust-stats">

      {sectionData.stats?.map((stat, index) => (

        <div className="stat-card"
          key={index}
          >

            <h3>
              {stat.value}
            </h3>

            <p>
              {stat.label}
            </p>

        </div>

        ))}

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

              {[...Array(item.rating)].map((_, i) => (

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

              {item.location && (
                <span>
                  {item.location}
                </span>
              )}

          </motion.div>


))}

      </div>
      <div className="reviews-actions">

        <a className="reviews-btn"
        href={sectionData.googleReviewsUrl}
        target="_blank"
        rel="noreferrer"
        >
          Read More Reviews
        </a>

        <a
        className="reviews-btn"
        href={sectionData.leaveReviewUrl}
        target="_blank"
        rel="noreferrer"
        >
          Leave A Review
        </a>

      </div>
      </Reveal>

    </section>

  )

}

export default Testimonials