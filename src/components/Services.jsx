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
            key={service.id}

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
              <Icon />
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </motion.div>

        )

        })}

      </div>
    </Reveal>

    </section>

  )

}

export default Services