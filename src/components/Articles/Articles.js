import React from 'react'
// import PropTypes from 'prop-types'

import classes from './styles.module.css'
import posts from '../../posts'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'

export const Articles = () => {
  return (
    <>
      <Header/>
      <div
        className={classes.articles}
      ><h3>Articles on blog: </h3>
        <ul >
          {
    posts.map(post => (
      <div
        key={post.uid}
        className={classes.articleList}
      >
        <NavLink
          to={`/blog/${post.uid}`}
        >{post.title}
        </NavLink>
        <span>{post.date}</span>
      </div>

    ))
  }
        </ul>

      </div>
    </>

  )
}

// Articles.propTypes = {
//   className: PropTypes.string
// }

export default Articles
