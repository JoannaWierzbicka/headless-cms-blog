/* eslint-disable no-unused-vars */
import React from 'react'
// import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Header from '../Header/Header'
// import { useParams } from 'react-router-dom'

export const PostPage = () => {
  // const { id } = useParams()
  const data = {
    date: '2022-10-10',
    uid: 'post-nr-1',
    title: 'POST NR 1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam esse labore tempora nihil recusandae amet aspernatur, sequi cum voluptates, maxime suscipit deleniti qui saepe atque expedita dolore dolor assumenda voluptatum.'

  }
  return (
    <div >
      <Header/>
      <article className={classes.post}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <span>{data.date}</span>
      </article>
    </div>
  )
}

// PostPage.propTypes = {
//   className: PropTypes.string
// }

export default PostPage
