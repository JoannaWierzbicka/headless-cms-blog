import React from 'react'

import { v4 as uuid } from 'uuid'

import { useParams, Link } from 'react-router-dom'

import StyledArticle from '../../styled/StyledArticle'
import StyledDiv from '../../styled/StyledDiv'
import StyledImage from '../../styled/StyledImage'
import StyledFooter from '../../styled/StyledFooter'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'
import Loader from '../Loader'

import Posts from '../../posts'

export const PostPage = () => {
  const { id } = useParams()

  const posts = Posts()

  const data = posts && posts.find(post => {
    return post.uid === id
  })

  return (
    <StyledDiv>
      {
        !data
          ? <Loader/> :
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

            </StyledArticle>
            <StyledFooter>
              <span>Published on: {data.data.date}</span>
              <span>Category: <Link to={`/categories/${data.tags}`}>{data.tags}</Link></span>
              <NavLink
                to={'/articles'}
                className={'page-link'}
              >{'  See articles list  '}
              </NavLink>
              <NavLink
                to={'/categories'}
                className={'page-link'}
              >{'  Check all categories  '}
              </NavLink>

            </StyledFooter>

          </>
      }
    </StyledDiv>
  )
}

export default PostPage
