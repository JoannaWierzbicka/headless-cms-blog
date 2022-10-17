/* eslint-disable no-unused-vars */
import React from 'react'

import { v4 as uuid } from 'uuid'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useParams, Link } from 'react-router-dom'

import StyledArticle from '../../styled/StyledArticle'
import StyledDiv from '../../styled/StyledDiv'
import StyledImage from '../../styled/StyledImage'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const PostList = () => {
  const { tag } = useParams()
  console.log(tag)

  const [documents, { state }] = useAllPrismicDocumentsByType('post')
  const posts = state === 'loaded' ? documents : ''

  const data = posts && posts.filter(post => {
    return post.tags[0] === tag
  })

  return (
    <StyledDiv>
      <h3 style={{ textAlign: 'center' }}>{tag.toUpperCase()}</h3>
      {
        !data
          ? <p>Loading...</p> :
          data.map(post => {
            return (

              <StyledArticle
                key={post.uid}
                className={'categoriesArticle'}
              >
                <h2>{post.data.title[0].text}</h2>
                <p>{post.data.text[0].text}...</p>

                <StyledImage
                  src={post.data.image.url}
                  alt={post.data.image.alt}
                  className={'categoriesImage'}
                />
                <NavLink
                  className={'categoriesNavLink'}
                  to={`/blog/${post.uid}`}
                >READ MORE
                </NavLink>
              </StyledArticle>
            )
          })
}

    </StyledDiv>
  )
}

export default PostList
