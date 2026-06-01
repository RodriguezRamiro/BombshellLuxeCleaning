/* //BomshellLuxeCleaning/src/components/Services.jsx */

import '../styles/services.css'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { services } from '../data/servicesData'


function Services() {

  return (

    <section
      className="services-section"
      id="services"
    >

    <Reveal>
      <div className="section-heading">

        <p>
          Luxury Cleaning Solutions
        </p>

        <h2>
          Services Designed Around Excellence
        </h2>

      </div>

      <div className="services-grid">

      {services.map((service, index) => {

        const Icon = service.icon

        return (

          <motion.div
            className="service-card"
            key={service.title}
          >

            <div className="service-icon">
              <Icon />
            </div>

          </motion.div>

        )

        })}

      </div>
    </Reveal>

    </section>

  )

}

export default Services