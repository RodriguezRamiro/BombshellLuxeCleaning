/* //BomshellLuxeCleaning/src/components/Transformations.jsx */

import '../styles/transformations.css'
import Reveal from './Reveal'
import { transformations } from '../data/transformationsData'


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