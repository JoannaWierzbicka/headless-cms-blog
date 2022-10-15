import React from 'react'

import BlogPost from '../BlogPost/BlogPost'
import StyledDiv from '../../styled/StyledDiv'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

export const Home = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')

  const posts = state === 'loaded' ? documents : ''

  return (
    <StyledDiv>
      {
        !posts
          ? <p>Loading...</p> :
          posts.map(post => {
            return (
              <div
                key={post.uid}
              >
                <BlogPost
                  {...post}
                />
              </div>)
          }

          )
          }
    </StyledDiv>
  )
}

export default Home
