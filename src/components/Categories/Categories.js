import React from 'react'

import StyledDiv from '../../styled/StyledDiv'
import StyledList from '../../styled/StyledList'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'
import Divider from '@mui/material/Divider'

import Posts from '../../posts'
import Loader from '../Loader'

export const Categories = () => {
  const posts = Posts()

  const categories = posts && posts.map(post => {
    return post.tags[0]
  }).filter((item, index, array) => array.indexOf(item) === index)

  return (
    <>
      <StyledDiv className={'categories'}>
        <h3>Categories </h3>
        <ul style={{ padding: '8px', display: 'flex' }}>
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
                  >{category.toUpperCase()}
                  </NavLink><Divider orientation={'vertical'} />
                </StyledList>)
            })
  }

        </ul>

      </StyledDiv>
    </>

  )
}

export default Categories
