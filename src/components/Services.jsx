/* //BomshellLuxeCleaning/src/components/Services.jsx */

import '../styles/services.css'

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

function Services() {

  return (

    <section
      className="services-section"
      id="services"
    >

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

          <div
            className="service-card"
            key={index}
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

          </div>

        ))}

      </div>

    </section>

  )

}

export default Services