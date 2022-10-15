import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
font-size: 20px;
text-decoration: none;
color: black;
&:hover{
    color: green;
}
`

export default StyledNavLink
