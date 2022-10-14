import React from 'react'
// import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Header from '../Header/Header'
import BlogPost from '../BlogPost/BlogPost'
// import posts from '../../posts'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

export const Home = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')

  const posts = state === 'loaded' ? documents : ''

  return (
    <div className={classes.home}>
      <Header/>
      {
        !posts
          ? 'Loading...' :
          posts.map(post => {
            return (
              <div
                key={post.uid}
                className={classes.post}
              >
                <BlogPost
                  {...post}
                />
              </div>)
          }

          )
          }
    </div>
  )
}

// Home.propTypes = {
//   className: PropTypes.string
// }

export default Home
