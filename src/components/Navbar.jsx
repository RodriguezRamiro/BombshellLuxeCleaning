/* //BomshellLuxeCleaning/src/components/Navbar.jsx */

import '../styles/navbar.css'

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        Bombshell Luxe
      </div>

      <div className="nav-links">

        <a href="#services">Services</a>
        <a href="#transformations">Transformations</a>
        <a href="#promotions">Promotions</a>
        <a href="#contact">Contact</a>

      </div>

      <button className="nav-btn">
        Book Now
      </button>

    </nav>

  )

}

export default Navbar