import React from 'react'

import StyledDiv from '../../styled/StyledDiv'
import StyledList from '../../styled/StyledList'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

import Posts from '../../posts'

export const Articles = () => {
  const posts = Posts()

  return (
    <>
      <StyledDiv>
        <h3>Articles on blog: </h3>
        <ul style={{ padding: '0' }}>
          {!posts
            ? <p>Loading...</p> :
            posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date)).map(post => {
              return (
                <StyledList
                  key={post.uid}
                >
                  <NavLink
                    style={{ fontSize: '15px' }}
                    to={`/blog/${post.uid}`}
                  >{post.data.title[0].text}
                  </NavLink>
                  <span>{post.data.date}</span>
                </StyledList>)
            })}
        </ul>
      </StyledDiv>
    </>
  )
}

export default Articles
