/* //BomshellLuxeCleaning/src/components/Transformations.jsx */

import { useState, useEffect } from 'react'
import '../styles/transformations.css'
import Reveal from './Reveal'

import { client } from '../sanityClient'
import { urlFor } from '../urlFor'


function Transformations() {

  const [selectedImage, setSelectedImage] = useState({
    src: '',
    title: '',
  })

  const [sectionData, setSectionData] = useState(null)
  const [transformations, setTransformations] = useState([])

  useEffect(() => {
    client
    .fetch(`*[_type == "transformationsSection" && active == true][0]`)
    .then((data) => setSectionData(data))
    .catch(console.error)

    client
    .fetch(`*[_type == "transformations" && active == true]`)
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
            key={item._id}
          >

            {item.description && (

              <h3 className="transfomation-title">
                {item.title}
              </h3>
            )}

            {item.description && (
              <p className="transformation-description">
                {item.description}
              </p>
            )}

            <div className="image-wrapper">

              <div className="image-box">

                {item.beforeImage && (

                <img
                  onClick={() =>
                    setSelectedImage(
                      urlFor(item.beforeImage).url()
                    )
                  }

                  src={urlFor(item.beforeImage).url()}
                  alt={item.beforeAlt}

                />

                )}

                <span className="label before">
                  Before
                </span>

              </div>

              <div className="image-box">

                {item.afterImage && (

                <img
                onClick={() =>
                  setSelectedImage(
                    urlFor(item.afterImage).url()
                    )
                    }

                    src={urlFor(item.afterImage).url()}
                    alt={item.afterAlt}
                    />

                )}

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