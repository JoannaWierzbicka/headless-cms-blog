/* eslint-disable no-unused-vars */
import React from 'react'
// import PropTypes from 'prop-types'

import classes from './styles.module.css'
// import posts from '../../posts'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

export const Articles = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')

  const posts = state === 'loaded' ? documents : ''

  return (
    <>
      <Header/>
      <div
        className={classes.articles}
      ><h3>Articles on blog: </h3>
        <ul >
          { !posts
            ? 'Loading...' :
            posts.map(post => (
              <div
                key={post.uid}
                className={classes.articleList}
              >
                <NavLink
                  to={`/blog/${post.uid}`}
                >{post.data.title[0].text}
                </NavLink>
                <span>{post.data.date}</span>
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
