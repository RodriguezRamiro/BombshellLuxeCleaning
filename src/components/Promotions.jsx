/* //BomshellLuxeCleaning/src/components/Promotions.jsx */

import '../styles/promotions.css'

import promo1 from '../assets/promo1.jpg'
import promo2 from '../assets/promo2.jpg'
import promo3 from '../assets/promo3.jpg'

const promotions = [

  {
    image: promo1,
    title: 'Summer Cleaning Special',
    description:
      'Book now and receive 15% OFF luxury cleaning services for a limited time.'
  },

  {
    image: promo2,
    title: 'Move-In / Move-Out Refresh',
    description:
      'Detailed transformation cleanings designed for seamless home transitions.'
  },

  {
    image: promo3,
    title: 'Airbnb Turnover Excellence',
    description:
      'Fast, elegant, guest-ready cleaning experiences for short-term rentals.'
  }

]

function Promotions() {

  return (

    <section
      className="promotions-section"
      id="promotions"
    >

      <div className="section-heading">

        <p>
          Featured Promotions
        </p>

        <h2>
          Luxury Offers & Campaigns
        </h2>

      </div>

      <div className="promotions-grid">

        {promotions.map((promo, index) => (

          <div
            className="promo-card"
            key={index}
          >

            <div className="promo-image">

              <img
                src={promo.image}
                alt={promo.title}
              />

              <div className="promo-overlay"></div>

            </div>

            <div className="promo-content">

              <h3>
                {promo.title}
              </h3>

              <p>
                {promo.description}
              </p>

              <button>
                Learn More
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  )

}

export default Promotions