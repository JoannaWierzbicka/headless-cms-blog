/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import { NavLink } from 'react-router-dom'
import Divider from '@mui/material/Divider'

export const BlogPost = (props) => {
  const { ...post } = props
  return (
    <article className={classes.post}>
      <NavLink to={`/blog/${post.uid}`}>{post.data.title[0].text}</NavLink>
      <p>{post.data.text[0].text}...</p>
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
