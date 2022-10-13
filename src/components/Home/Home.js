import React from 'react'
// import PropTypes from 'prop-types'
import classes from './styles.module.css'
import Header from '../Header/Header'
import BlogPost from '../BlogPost/BlogPost'
import posts from '../../posts'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

export async function FetchData () {
  const [document] = useAllPrismicDocumentsByType('post')

  const data = await document

  const posts = data && data.map(post => {
    console.log(post)
    return {
      title: post.data.title[0].text,
      text: post.data.text[0].text,
      uid: post.uid
    }
  })

  return posts
}

export const Home = () => {
  FetchData()
  return (
    <div className={classes.home}>
      <Header/>
      {posts && posts.map(post => (
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
