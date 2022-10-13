import React from 'react'
// import PropTypes from 'prop-types'

import classes from './styles.module.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header
      className={classes.header}
    ><NavLink to={'/'}>My Blog</NavLink>
      <div className={classes.menu}>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/articles'}>Articles</NavLink>
      </div>

    </header>
  )
}

// Header.propTypes = {
//   className: PropTypes.string
// }

export default Header
