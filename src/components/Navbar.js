
import { useState } from 'react'
import { pageLinks, socialLinks } from '../data'
import logo from '../images/logo.svg'

function Navbar() {
  const [navLinksVisible, setNavLinksVisible] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle" onClick={() => setNavLinksVisible(!navLinksVisible)}>
            <i className="fas fa-bars"></i>
          </button>

        </div>

        <ul className={`nav-links ${navLinksVisible ? 'show-links' : ''}`} id='nav-links'>
          {pageLinks.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id}>

                <a className="nav-link" href={href}>{text}</a>
              </li>
            )
          })}
        </ul>
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a href={href} target='_blank' rel="noreferrer" className='nav-icon'>
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}

        </ul>
      </div>
    </nav>
  )


}


export default Navbar;