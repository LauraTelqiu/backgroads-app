import React from 'react'
import Title from './Title'
import { services } from '../data'

function Services() {
  return (
    <div className='section services' id='services'>
      <Title title="our" subtitle="serivces" />
      <div class="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article key={id} class="service">
              <span class="service-icon"><i class={icon}></i></span>
              <div class="service-info">
                <h4 class="service-title">{title}</h4>
                <p class="service-text">
                  {text}
                </p>
              </div>
            </article>
          )
        })}


      </div>


    </div>
  )
}

export default Services
