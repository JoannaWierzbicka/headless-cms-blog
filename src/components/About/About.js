import React from 'react'
// import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Header from '../Header/Header'
import { useSinglePrismicDocument } from '@prismicio/react'

export const About = () => {
  const [about] = useSinglePrismicDocument('about')
  return (
    <>
      <Header/>
      {
        !about
          ? 'Loading...' :
          <div
            className={classes.about}
          ><h3>{about.data.title[0].text}</h3>
            <p>{about.data.text[0].text}</p>

          </div>
      }

    </>
  )
}

// About.propTypes = {
//   className: PropTypes.string
// }

export default About
