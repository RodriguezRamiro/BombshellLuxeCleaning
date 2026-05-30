/* //BomshellLuxeCleaning/src/components/Transformations.jsx */

import '../styles/transformations.css'
import Reveal from './Reveal'

import before1 from '../assets/before1.jpeg'
import after1 from '../assets/after1.jpeg'

import before2 from '../assets/before2.jpeg'
import after2 from '../assets/after2.jpeg'

import before3 from '../assets/before3.jpg'
import after3 from '../assets/after3.jpg'

const transformations = [

  {
    before: before1,
    after: after1
  },

  {
    before: before2,
    after: after2
  },

  {
    before: before3,
    after: after3
  }

]

function Transformations() {

  return (

    <section
      className="transformations-section"
      id="transformations"
    >
      <Reveal>

      <div className="section-heading">

        <p>
          Luxury-Level Results
        </p>

        <h2>
          See The Transformation
        </h2>

      </div>

      <div className="transformations-grid">

        {transformations.map((item, index) => (

          <div
            className="transformation-card"
            key={index}
          >

            <div className="image-wrapper">

              <div className="image-box">

                <img
                  src={item.before}
                  alt="Before Cleaning"
                />

                <span className="label before">
                  Before
                </span>

              </div>

              <div className="image-box">

                <img
                  src={item.after}
                  alt="After Cleaning"
                />

                <span className="label after">
                  After
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>
    </Reveal>

    </section>

  )

}

export default Transformations