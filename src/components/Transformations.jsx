/* //BomshellLuxeCleaning/src/components/Transformations.jsx */

import { useState, useEffect } from 'react'
import '../styles/transformations.css'
import Reveal from './Reveal'

import { client } from '../sanityClient'
import { urlFor } from '../urlFor'


function Transformations() {

  const [selectedImage, setSelectedImage] = useState(null)

  const [sectionData, setSectionData] = useState(null)
  const [transformations, setTransformations] = useState([])

  useEffect(() => {
    client
    .fetch(`*[_type == "transformationsSection"][0]`)
    .then((data) => setSectionData(data))
    .catch(console.error)

    client
    .fetch(`*[_type == "transformations"]`)
    .then((data) => setTransformations(data))
    .catch(console.error)

  }, [])
  if (!sectionData) return null


  return (

    <section
      className="transformations-section"
      id="transformations"
    >
      <Reveal>

      <div className="section-heading">

        <p>
          {/* Luxury-Level Results */}
          {sectionData.sectionSubtitle}
        </p>

        <h2>
          {/* See The Transformation */}
          {sectionData.sectionTitle}
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
                  onClick={() =>
                    setSelectedImage(
                      urlFor(item.beforeImage).url()
                    )
                  }

                  src={urlFor(item.beforeImage).url()}
                  alt={item.beforeAlt}

                />

                <span className="label before">
                  Before
                </span>

              </div>

              <div className="image-box">

                <img
                onClick={() =>
                  setSelectedImage(
                    urlFor(item.afterImage).url()
                    )
                    }

                    src={urlFor(item.afterImage).url()}
                    alt={item.afterAlt}
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