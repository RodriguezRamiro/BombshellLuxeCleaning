/* //BomshellLuxeCleaning/src/components/Services.jsx */

import '../styles/services.css'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import {
  Sparkles,
  Home,
  Building2,
  BriefcaseBusiness,
  BedDouble,
  ClipboardCheck
} from 'lucide-react'

const services = [

  {
    icon: <Sparkles />,
    title: 'Deep Cleaning',
    description:
      'Luxury-level detailed cleaning designed to completely refresh and elevate your space.'
  },

  {
    icon: <Home />,
    title: 'Move-In / Move-Out',
    description:
      'Spotless transitions for homes, apartments, rentals, and real estate preparation.'
  },

  {
    icon: <BedDouble />,
    title: 'Airbnb Turnovers',
    description:
      'Fast, reliable, guest-ready cleaning services tailored for short-term rental success.'
  },

  {
    icon: <ClipboardCheck />,
    title: 'Listing Preparation',
    description:
      'Presentation-focused cleaning designed to impress buyers, renters, and guests.'
  },

  {
    icon: <BriefcaseBusiness />,
    title: 'Recurring Services',
    description:
      'Weekly, bi-weekly, and monthly luxury cleaning plans customized to your lifestyle.'
  },

  {
    icon: <Building2 />,
    title: 'Commercial Cleaning',
    description:
      'Professional workspace cleaning with elevated attention to detail and presentation.'
  }

]

/*
section heading slightly too light gold lettering
for light background mode.
additionally it needs a way to exchange cards if services
change or are added and removed. 
*/

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

        {services.map((service, index) => (

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
              {service.icon}
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