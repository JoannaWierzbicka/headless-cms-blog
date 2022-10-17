import React from 'react'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import StyledDiv from '../../styled/StyledDiv'
import StyledList from '../../styled/StyledList'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const Categories = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')

  const posts = state === 'loaded' ? documents : ''
  posts && posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))

  const categories = posts && posts.map(post => {
    return post.tags[0]
  }).filter((item, index, array) => array.indexOf(item) === index)

  return (
    <>
      <StyledDiv>
        <h3>Categories </h3>
        <ul style={{ padding: '0' }}>
          { !categories
            ? <p>Loading...</p> :
            categories.map(category => {
              return (
                <StyledList
                  key={category}
                >
                  <NavLink
                    style={{ fontSize: '15px' }}
                    to={`/categories/${category}`}
                  >{category.toUpperCase()}
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
