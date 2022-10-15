import React from 'react'

import { useAllPrismicDocumentsByType } from '@prismicio/react'
import StyledDiv from '../../styled/StyledDiv'
import StyledList from '../../styled/StyledList'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const Articles = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')

  const posts = state === 'loaded' ? documents : ''

  return (
    <>
      <StyledDiv ><h3>Articles on blog: </h3>
        <ul style={{ padding: '0' }}>
          { !posts
            ? 'Loading...' :
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

// Articles.propTypes = {
//   className: PropTypes.string
// }

export default Articles
