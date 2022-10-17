import React from 'react'
import StyledDiv from '../../styled/StyledDiv'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const StartPage = () => {
  return (
    <StyledDiv className={'start-page'}>
      <p>Welcome to MyBlog</p>
      <img
        src={'https://picsum.photos/300/200'}
        alt={'start-image'}
      />
      <NavLink
        className={'start-page'}
        to={'/page-1'}
      >START EXPLORING
      </NavLink>

    </StyledDiv>
  )
}

export default StartPage
