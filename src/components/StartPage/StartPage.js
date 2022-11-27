import React from 'react'
import StyledDiv from '../../styled/StyledDiv'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'
import StyledP from '../../styled/StyledP'

export const StartPage = () => {
  return (
    <StyledDiv className={'start-page'}>
      <StyledP>Welcome to MyBlog</StyledP>
      <NavLink
        className={'start-page'}
        to={'/page-1'}
      >START EXPLORING
      </NavLink>

    </StyledDiv>
  )
}

export default StartPage
