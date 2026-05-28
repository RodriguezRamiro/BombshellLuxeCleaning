/* /BomshellLuxeCleaning/src/components/Contact.jsx */

import '../styles/contact.css'

import {
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

function Contact() {

  return (

    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">

        <div className="contact-info">

          <p className="contact-label">
            Luxury Booking Experience
          </p>

          <h2>
            Your Space Deserves
            The Bombshell Treatment
          </h2>

          <p className="contact-description">

            Experience premium residential,
            Airbnb, and deep cleaning services
            tailored for clients who value elegance,
            detail, and exceptional presentation.

          </p>

          <div className="contact-details">

            <div className="detail-item">

              <Phone />

              <span>
                (941) 960-6984
              </span>

            </div>

            <div className="detail-item">

              <Mail />

              <span>
                agodoy@bombshell-luxecleaning.com
              </span>

            </div>

            <div className="detail-item">

              <MapPin />

              <span>
                Tampa Bay • Wesley Chapel • St. Pete
              </span>

            </div>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Service Needed"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit">
            Request Luxury Cleaning
          </button>

        </form>

      </div>

    </section>

  )

}

export default Contact