/* //BomshellLuxeCleaning/src/components/Transformations.jsx */

import { useState } from 'react'
import '../styles/transformations.css'
import Reveal from './Reveal'
import { transformations } from '../data/transformationsData'


function Transformations() {

  const [selectedImage, setSelectedImage] = useState(null)

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
            key={item.id}
          >

            <div className="image-wrapper">

              <div className="image-box">

                <img onClick={() => setSelectedImage(item.before.image)}
                  src={item.before.image}
                  alt={item.before.alt}
                />

                <span className="label before">
                  Before
                </span>

              </div>

              <div className="image-box">

                <img
                    onClick={() => setSelectedImage(item.after.image)}
                    src={item.after.image}
                    alt={item.after.alt}
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

    {selectedImage && (

<div
  className="image-modal"
  onClick={() => setSelectedImage(null)}
>

  <div
    className="modal-content"
    onClick={(e) => e.stopPropagation()}
  >

    <button
      className="close-modal"
      onClick={() => setSelectedImage(null)}
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Expanded transformation"
    />

  </div>

</div>

)}

    </section>

  )

}

export default Transformations