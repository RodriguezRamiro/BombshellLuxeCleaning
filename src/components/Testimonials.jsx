/* bizzTemplates/BomshellLuxeCleaning/src/components/Testimonials.jsx */

import '../styles/testimonials.css';
import Reveal from './Reveal';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import { stats } from '../data/statsData';


/*
need to have leave review button and/or api from google reviews? limit up to
3-5 most recents with at least 4 stars.
stats card should be dynamic. maybe we need a way to calculate
actual stats. 5 stars we can link to google reviwes,
cleanings  and recurring clients needs to be calculated automatically somehow.
would it be best to leave them statiic?
*/

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

        {stats.map((stat) => (

        <div className="stat-card"
          key={stat.id}
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
            key={item.id}

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

          </motion.div>


))}

      </div>
      <div className="reviews-actions">

        <button className="reviews-btn">
          Read More Reviews
        </button>

        <button className="reviews-btn">
          Leave A Review
        </button>

      </div>
      </Reveal>

    </section>

  )

}

export default Testimonials