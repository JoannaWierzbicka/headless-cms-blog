import React from 'react'

import StyledHeader from '../../styled/StyledHeader'
import StyledMenu from '../../styled/StyledMenu'
import { StyledNavLink as NavLink } from '../../styled/StyledNavLink'

export const Header = () => {
  const activeStyle = { fontWeight: 700 }
  return (
    <StyledHeader>
      <NavLink
        className={'navlink-header'}
        activeStyle={activeStyle}
        to={'/'}
      >My Blog
      </NavLink>
      <StyledMenu>
        <NavLink
          className={'navlink-header'}
          activeStyle={activeStyle}
          to={'/about'}
        >About
        </NavLink>
        <NavLink
          className={'navlink-header'}
          activeStyle={activeStyle}
          to={'/categories'}
        >Categories
        </NavLink>
        <NavLink
          className={'navlink-header'}
          activeStyle={activeStyle}
          to={'/articles'}
        >Articles
        </NavLink>
      </StyledMenu>

    </StyledHeader>

  )
}

export default Header
