import React from 'react'

import { v4 as uuid } from 'uuid'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useParams } from 'react-router-dom'

import StyledArticle from '../../styled/StyledArticle'
import StyledDiv from '../../styled/StyledDiv'
import StyledImage from '../../styled/StyledImage'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const PostPage = () => {
  const { id } = useParams()

  const [documents, { state }] = useAllPrismicDocumentsByType('post')
  const posts = state === 'loaded' ? documents : ''

  const data = posts && posts.find(post => {
    return post.uid === id
  })

  return (
    <StyledDiv>
      {
        !data
          ? <p>Loading...</p> :
          <>
            <StyledArticle>
              <h2>{data.data.title[0].text}</h2>
              {data.data.text.map(text => {
                return (<p key={uuid()}>{text.text}</p>)
              })}
              <StyledImage
                src={data.data.image.url}
                alt={data.data.image.alt}
              />
              <span
                style={{
                  fontSize: '10px',
                  color: 'grey'
                }}
              >Published on: {data.data.date}
              </span>
            </StyledArticle>
            <NavLink to={'/articles'}>{'--> View all posts <--'}</NavLink>
          </>

      }
    </StyledDiv>
  )
}

export default PostPage
