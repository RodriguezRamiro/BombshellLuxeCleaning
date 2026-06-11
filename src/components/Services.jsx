/* //BomshellLuxeCleaning/src/components/Services.jsx */

import '../styles/services.css'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import { urlFor } from '../urlFor'

function Services() {
   const [servicesData, setServicesData] = useState(null)

   useEffect(() => {
    client .fetch(`*[_type == "services"][0]`)
    .then((data) => setServicesData(data))
    .catch(console.error)

  }, [])
  if (!servicesData) return null

  return (

    <section
      className="services-section"
      id="services"
    >

    <Reveal>
      <div className="section-heading">

      <p> {servicesData.sectionSubtitle} </p>

      <h2> {servicesData.sectionTitle} </h2>

      </div>

      <div className="services-grid">

      {servicesData.servicesList?.map((service, index) => (

          <motion.div
            className="service-card"
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

            whileHover={{
              y:-8
            }}
          >

            <div className="service-icon">
            {service.icon ? (

              <img
              src={urlFor(service.icon).url()}
              alt={service.title}
              />

            ) : (

              <span>✨</span>

            )}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </motion.div>

        ))}

      </div>

    </Reveal>

    </section>

  )

}

export default Services