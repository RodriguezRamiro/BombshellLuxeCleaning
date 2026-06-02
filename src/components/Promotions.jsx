/* //BomshellLuxeCleaning/src/components/Promotions.jsx */

import '../styles/promotions.css'
import Reveal from './Reveal'
import { motion } from 'framer-motion'
import { promotions } from '../data/promotionsData'
import { useState } from 'react'

/*

needs a way for client to be able to upload current and
changing promitions.
*/

function Promotions() {

  const [selectedPromo, setSelectedPromo] = useState(null)

  return (

    <section
    className="promotions-section"
    id="promotions"
    >
      <Reveal>

      <div className="section-heading">

        <p>
          Featured Promotions
        </p>

        <h2>
          Luxury Offers & Campaigns
        </h2>

      </div>

      <div className="promotions-grid">

        {promotions.map((promo, index) => (

          
          <motion.div
          className="promo-card"
          key={promo.id}

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
            delay:index * 0.07
          }}
          >

            <div className="promo-image">

              <img
                onClick={() => setSelectedPromo(promo.image.src)}
                src={promo.image.src}
                alt={promo.image.alt}

                />

              <div className="promo-overlay"></div>

            </div>

            <div className="promo-content">

              <h3>
                {promo.title}
              </h3>

              <p>
                {promo.description}
              </p>

              <button>
                Learn More
              </button>

            </div>

          </motion.div>

        ))}

      </div>
      </Reveal>

      {selectedPromo && (

        <div
          className="promo-modal"
          onClick={() => setSelectedPromo(null)}
        >

          <div
            className="promo-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-promo-modal"
              onClick={() => setSelectedPromo(null)}
            >
              ×
            </button>

            <img
              src={selectedPromo}
              alt="Expanded promotion"
            />

          </div>

        </div>

        )}

    </section>

  )

}

export default Promotions