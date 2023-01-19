import React from 'react'
import { pageLinks, socialLinks } from '../data'
import logo from '../images/logo.svg'

function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id}>
                <a href={href}>{text}</a>
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
