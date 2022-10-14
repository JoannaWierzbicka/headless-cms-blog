/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
// import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import classes from './styles.module.css'
import Header from '../Header/Header'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useParams } from 'react-router-dom'

export const PostPage = () => {
  const { id } = useParams()

  const [documents, { state }] = useAllPrismicDocumentsByType('post')
  const posts = state === 'loaded' ? documents : ''

  const data = posts && posts.find(post => {
    return post.uid === id
  })

  return (
    <div >
      <Header/>
      {
        !data
          ? 'Loading...' :
          <article className={classes.post}>
            <h3>{data.data.title[0].text}</h3>
            {data.data.text.map(text => {
              return (<p key={uuid()}>{text.text}</p>)
            })}
            <img
              src={data.data.image.url}
              alt={data.data.image.alt}
            />
            <span>Published on: {data.data.date}</span>
          </article>
      }

    </div>
  )
}

// PostPage.propTypes = {
//   className: PropTypes.string
// }

export default PostPage
