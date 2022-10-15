import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@mui/material/Divider'
import StyledArticle from '../../styled/StyledArticle'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const BlogPost = (props) => {
  const { ...post } = props
  return (
    <StyledArticle>
      <NavLink to={`/blog/${post.uid}`}>{post.data.title[0].text}</NavLink>
      <p>{post.data.text[0].text}...</p>
      <Divider variant={'middle'} />
    </StyledArticle>

  )
}

BlogPost.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  uid: PropTypes.string
}

export default BlogPost
