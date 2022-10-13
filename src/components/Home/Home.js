import React from 'react'
// import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Header from '../Header/Header'
import BlogPost from '../BlogPost/BlogPost'
import posts from '../../posts'

export const Home = () => {
  return (
    <div className={classes.home}>
      <Header/>
      {posts.map(post => (
        <div
          key={post.uid}
          className={classes.post}
        >
          <BlogPost
            {...post}
          />
        </div>

      ))}
    </div>
  )
}

// Home.propTypes = {
//   className: PropTypes.string
// }

export default Home
