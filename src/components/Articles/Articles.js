import React from 'react'

import StyledDiv from '../../styled/StyledDiv'
import StyledList from '../../styled/StyledList'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'
import StyledUl from '../../styled/StyledUl'

import Posts from '../../posts'
import Loader from '../Loader'

export const Articles = () => {
  const posts = Posts()

  return (
    <>
      <StyledDiv className={'articles-list'}>
        <h3>Articles on blog: </h3>
        <StyledUl>
          {!posts
            ? <Loader/> :
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
        </StyledUl>
      </StyledDiv>
    </>
  )
}

export default Articles
