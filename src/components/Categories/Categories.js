import React from 'react'

import StyledDiv from '../../styled/StyledDiv'
import StyledList from '../../styled/StyledList'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

import Posts from '../../posts'
import Loader from '../Loader'

export const Categories = () => {
  const posts = Posts()

  const categories = posts && posts.map(post => {
    return post.tags[0]
  }).filter((item, index, array) => array.indexOf(item) === index)

  return (
    <>
      <StyledDiv>
        <h3>Categories </h3>
        <ul style={{ padding: '0', display: 'flex', justifyContent: 'space-around' }}>
          { !categories
            ? <Loader/> :
            categories.map(category => {
              return (
                <StyledList
                  key={category}
                >
                  <NavLink
                    className={'category-list'}
                    to={`/categories/${category}`}
                  >{category}
                  </NavLink>
                </StyledList>)
            })
  }

        </ul>

      </StyledDiv>
    </>

  )
}

export default Categories
