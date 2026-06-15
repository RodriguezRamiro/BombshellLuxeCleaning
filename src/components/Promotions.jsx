/* //BomshellLuxeCleaning/src/components/Promotions.jsx */

import '../styles/promotions.css'
import Reveal from './Reveal'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { client } from '../sanityClient'
import { urlFor } from '../urlFor'


function Promotions() {

  const [selectedPromo, setSelectedPromo] = useState(null)
  const [sectionData, setSectionData] = useState(null)
  const [promotions, setPromotions] = useState([])

  useEffect(() => {

    client
    .fetch(`*[_type == "promotionsSection"][0]`)
    .then((data) => setSectionData(data))
    .catch(console.error)

    client
    .fetch(`*[_type == "promotion" && active == true] | order(displayOrder asc)`)
    .then((data) => setPromotions(data))
    .catch(console.error)

  }, [])

  if (!sectionData) return null

  return (

    <section
    className="promotions-section"
    id="promotions"
    >
      <Reveal>

      <div className="section-heading">

        <p>
          {/* Featured Promotions */}
          {sectionData.sectionSubtitle}
        </p>

        <h2>
          {/* Luxury Offers & Campaigns */}
          {sectionData.sectionTitle}
        </h2>

      </div>

      <div className="promotions-grid">

        {promotions.map((promo, index) => (


          <motion.div
          className="promo-card"
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
            delay:index * 0.07
          }}
          >

            <div className="promo-image">
            {promo.image && (

            <img onClick={() =>
              setSelectedPromo(
                urlFor(promo.image).url()
                )
                }

                src={urlFor(promo.image).url()}
                alt={promo.imageAlt}
                />
            )}

              <div className="promo-overlay"></div>

            </div>

            <div className="promo-content">

                  {/* promo badge "limitedTime" */}
              {promo.badge && (
                <span className="promo-badge">
                  {promo.badge}
                  </span>
              )}

              <h3>
                {promo.title}
              </h3>

              <p>
                {promo.description}
              </p>

              <a
              href={promo.buttonLink}
              target="_blank"
              rel="noreferrer"
              >

                <button>
                  {promo.buttonText}
                </button>

              </a>

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