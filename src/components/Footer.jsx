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

import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

function Footer() {

  const [settings, setSettings] = useState(null)

  useEffect(() => {

    client
      .fetch(`*[_type == "siteSettings"][0]`)
      .then((data) => setSettings(data))
      .catch(console.error)

    }, [])

    if (!settings) return null

  return (

    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-content">

        <div className="footer-brand">

          <h2>
            {/* Bombshell Luxe Cleaning */}
            {settings.businessName}
          </h2>

          <p>

            {/* Premium residential and luxury
            cleaning experiences designed
            for elegance, comfort, and
            spotless perfection. */}

            {settings.businessDescription}

          </p>

        </div>

        <div className="footer-links">

          <h3>
            Navigation
          </h3>

          {settings.navigationLinks.map((link, index) => (

          <a
          key={index}
          href={link.href}
        >
            {/* Services */}
            {/* Transformation */}
            {/* Promotions */}
            {/* Contact */}

            {link.label}
          </a>

          ))}

        </div>

        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <div className="footer-item">

            <Phone />

            <span>
              {/* (941) 960-6984 */}
              {settings.phone}
            </span>

          </div>

          <div className="footer-item">

            <Mail />

            <span>
              {/* agodoy@bombshell-luxecleaning.com */}
              {settings.email}
            </span>

          </div>

        </div>

        <div className="footer-socials">

          <h3>
            Socials
          </h3>

          <div className="social-icons">

            {/* href="https://www.instagram.com/bombshell_luxe_cleaning/"> */}
            <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noreferrer"
            >
              <FaInstagram />
            </a>

            {/* href="https://www.facebook.com/people/BomBshell-Luxe-Cleaning/61572643995067/"> */}
            <a
            href={settings.facebookUrl}
            target="_blank"
            rel="noreferrer"
            >
              <FaFacebookF />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          {/* © 2026 Bombshell Luxe Cleaning.
          All rights reserved. */}

          {settings.footerText}

        </p>

        <p>
          {/* Designed by RodriguezTech Studios */}
          {settings.designerCredit}

        </p>

      </div>

    </footer>

  )

}

export default Footer