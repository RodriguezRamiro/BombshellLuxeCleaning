/* //BomshellLuxeCleaning/src/components/Footer.jsx */


import '../styles/footer.css'

import {
  Mail,
  Phone
} from 'lucide-react'

import {
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa'

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-content">

        <div className="footer-brand">

          <h2>
            Bombshell Luxe Cleaning
          </h2>

          <p>

            Premium residential and luxury
            cleaning experiences designed
            for elegance, comfort, and
            spotless perfection.

          </p>

        </div>

        <div className="footer-links">

          <h3>
            Navigation
          </h3>

          <a href="#services">
            Services
          </a>

          <a href="#transformations">
            Transformations
          </a>

          <a href="#promotions">
            Promotions
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <div className="footer-item">

            <Phone />

            <span>
              (941) 960-6984
            </span>

          </div>

          <div className="footer-item">

            <Mail />

            <span>
              agodoy@bombshell-luxecleaning.com
            </span>

          </div>

        </div>

        <div className="footer-socials">

          <h3>
            Socials
          </h3>

          <div className="social-icons">

            <a href="https://www.instagram.com/bombshell_luxe_cleaning/">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/people/BomBshell-Luxe-Cleaning/61572643995067/">
              <FaFacebookF />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Bombshell Luxe Cleaning.
          All rights reserved.
        </p>

        <p>
          Designed by RodriguezTech
        </p>

      </div>

    </footer>

  )

}

export default Footer