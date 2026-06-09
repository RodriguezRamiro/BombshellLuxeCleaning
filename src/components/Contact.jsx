/* /BomshellLuxeCleaning/src/components/Contact.jsx */

import '../styles/contact.css'
import Reveal from './Reveal'

import {
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

function Contact() {

  const [contactData, setContactData] = useState(null)

  useEffect(() => {

    client
    .fetch(`*[_type == "contact"][0]`)
    .then((data) => setContactData(data))
    .catch(console.error)
  }, [])

  if (!contactData) return null

  return (

    <section
      className="contact-section"
      id="contact"
    >
      <Reveal>

      <div className="contact-container">

        <div className="contact-info">

          <p className="contact-label">
            {/* Luxury Booking Experience */}
            {contactData.label}
          </p>

          <h2>
            {/*  Your Space Deserves
            The Bombshell Treatment */}
            {contactData.heaeding}
          </h2>

          <p className="contact-description">

            {/* Experience premium residential,
            Airbnb, and deep cleaning services
            tailored for clients who value elegance,
            detail, and exceptional presentation. */}

            {contactData.description}

          </p>

          <div className="contact-details">

            <div className="detail-item">

              <Phone />

              <span>
                {/* (941) 960-6984 */}
                {contactData.phone}
              </span>

            </div>

            <div className="detail-item">

              <Mail />

              <span>
                {/* agodoy@bombshell-luxecleaning.com */}
                {contactData.email}
              </span>

            </div>

            <div className="detail-item">

              <MapPin />

              <span>
                {/* Tampa Bay • Wesley Chapel • St. Pete */}
                {contactData.location}
              </span>

            </div>

          </div>

        </div>


        {/* Replace with your FormSpree endpoint */}
        {/*
        https://formspree.io
        create Formspree account
        copy & paste your endpoint
        done
        */}

        <form
        className="contact-form"
        action={contactData.formEndpoint} {/*"https://formspree.io/f/your_endpoint" */}
        method="POST"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"

            placeholder="Email Address"
          />

          <input
            type="text"
            name="service"
            placeholder="Service Needed"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit">
            {/* Request Luxury Cleaning */}
            {contactData.buttonText}
          </button>

        </form>

      </div>
      </Reveal>

    </section>

  )

}

export default Contact