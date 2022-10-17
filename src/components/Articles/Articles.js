/* eslint-disable no-unused-vars */
import React from 'react'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import StyledDiv from '../../styled/StyledDiv'
import StyledList from '../../styled/StyledList'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const Articles = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')

  const posts = state === 'loaded' ? documents : ''
  posts && posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))

  return (
    <>
      <StyledDiv>
        <h3>Articles on blog: </h3>
        <ul style={{ padding: '0' }}>
          { !posts
            ? <p>Loading...</p> :
            posts.map(post => (
              <StyledList
                key={post.uid}
              >
                <NavLink
                  style={{ fontSize: '15px' }}
                  to={`/blog/${post.uid}`}
                >{post.data.title[0].text}
                </NavLink>
                <span>{post.data.date}</span>
              </StyledList>
            ))
  }
        </ul>

      </StyledDiv>
    </>

  )
}

export default Articles
