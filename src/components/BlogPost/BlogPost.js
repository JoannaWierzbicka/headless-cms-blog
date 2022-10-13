import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import { NavLink } from 'react-router-dom'
import Divider from '@mui/material/Divider'

export const BlogPost = (props) => {
  const { title, text, uid } = props
  return (
    <article className={classes.post}>
      <NavLink to={`/blog/${uid}`}>{title}</NavLink>
      <p>{text}</p>
      <Divider variant={'middle'} />
    </article>

  )
}

BlogPost.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  uid: PropTypes.string
}

export default BlogPost
