import React from 'react'

import { useParams } from 'react-router-dom'

import StyledArticle from '../../styled/StyledArticle'
import StyledDiv from '../../styled/StyledDiv'
import StyledImage from '../../styled/StyledImage'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'
import Loader from '../Loader'

import Posts from '../../posts'

export const PostList = () => {
  const { tag } = useParams()
  const posts = Posts()

  const data = posts && posts.filter(post => {
    return post.tags[0] === tag
  })

  return (
    <StyledDiv>
      <h3 style={{ textAlign: 'center' }}>{tag.toUpperCase()}</h3>
      {
        !data
          ? <Loader/> :
          data.map(post => {
            return (

              <StyledArticle
                key={post.uid}
                className={'categories-article'}
              >
                <h2>{post.data.title[0].text}</h2>
                <p>{post.data.text[0].text}...</p>

                <StyledImage
                  src={post.data.image.url}
                  alt={post.data.image.alt}
                  className={'categories-image'}
                />
                <NavLink
                  className={'categories-link'}
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
