import React from 'react'

import BlogPost from '../BlogPost/BlogPost'
import StyledDiv from '../../styled/StyledDiv'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

export const Home = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post')
  const [currentPage, setCurrentPage] = React.useState(1)

  const posts = state === 'loaded' ? documents : ''

  const postPerPage = 6
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(posts.length / postPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleClick = (e) => {
    console.log(e.target)
    setCurrentPage(e.target.id)
  }

  return (
    <StyledDiv>
      {
        !currentPosts
          ? <p>Loading...</p> :
          currentPosts.map(post => {
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
      <StyledDiv className={'page-numbers'}>
        {pageNumbers.map(number => {
          return (
            <NavLink
              activeStyle={{ fontWeight: 700 }}
              className={'page-numbers'}
              to={`/page-${number}`}
              key={number}
              id={number}
              onClick={handleClick}
            >
              {number}
            </NavLink>
          )
        })
}
      </StyledDiv>
    </StyledDiv>
  )
}

export default Home
