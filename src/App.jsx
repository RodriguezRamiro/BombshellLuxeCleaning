/* 05_2026 /BomshellLuxeCleaning/src/App.jsx */

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Transformations from './components/Transformations'
import Promotions from './components/Promotions'
import Contact from './components/Contact';
import Footer from './components/Footer'


{/* Missing dak light mode, haburger menu, currenty year function.
needs responsiveness and finish polishing minor details
|| Rough Deal Time Monday */}
function App() {

  return (

    <>

      <Navbar />
      <Hero />
      <Services />
      <Transformations />
      <Promotions />
      <Contact />
      <Footer />

    </>

  )

}

export default App