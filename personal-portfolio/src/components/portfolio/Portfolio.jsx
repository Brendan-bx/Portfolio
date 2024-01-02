import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/image.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'A vitrine website for a company',
    demo: 'https://romantic-elion-976301.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}></img>
              </div>
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className='btn'>To the site</a>
              </div>
            </article>
            )
          })
        }
      </div>
      <a href='https://github.com/brendan-bx'>More projects here</a>
    </section>
  )
}

export default Portfolio

