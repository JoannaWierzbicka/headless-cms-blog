import React from 'react'
// import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Header from '../Header/Header'

export const About = (props) => {
  return (
    <>
      <Header/>
      <div
        className={classes.about}
      ><h3>ABOUT ME</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor et recusandae cum accusantium illum quaerat eius totam, sunt sed consequuntur iure non iusto corporis, voluptate nam quam illo at!</p>

      </div>

    </>
  )
}

// About.propTypes = {
//   className: PropTypes.string
// }

export default About
