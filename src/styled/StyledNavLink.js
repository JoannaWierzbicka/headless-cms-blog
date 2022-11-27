import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
font-size: 20px;
text-decoration: none;
color: black;
&:hover{
    color: wheat;
    background-color: #303030;
}
&.categories-link{
    color: #303030;
    font-size: 12px;
    margin: 6px;
    padding: 12px;
    &:hover{
    color: wheat;
}
}
&.page-link{
    font-size: 14px;
    color: wheat;
    padding-left: 50px;
}
&.page-numbers{
    font-size: 16px;
    padding: 0
}
&.start-page{
    margin: 25px;
    padding: 20px;
    color: wheat;
    font-weight: 700;
    &:hover{
        background-color: wheat;
        color: #303030;
    }}
&.category-list{
    font-size: 15px;
    padding: 2px 10px;
    &:hover{
        background-color: #303030;
        color: wheat;
        border-radius: 10px;
    }
}
&.navlink-header{
    color: wheat;
 
}

`

export default StyledNavLink
