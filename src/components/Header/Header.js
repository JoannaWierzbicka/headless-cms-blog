import React from 'react'

import StyledHeader from '../../styled/StyledHeader'
import StyledMenu from '../../styled/StyledMenu'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const Header = () => {
  const activeStyle = { fontWeight: 700 }
  return (
    <StyledHeader>
      <NavLink
        activeStyle={activeStyle}
        to={'/'}
      >My Blog
      </NavLink>
      <StyledMenu>
        <NavLink
          activeStyle={activeStyle}
          to={'/about'}
        >About
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to={'/categories'}
        >Categories
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to={'/articles'}
        >Articles
        </NavLink>
      </StyledMenu>

    </StyledHeader>

  )
}

export default Header
