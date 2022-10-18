import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
font-size: 20px;
text-decoration: none;
color: black;
&:hover{
    color: green;
}
&.categories-link{
    color: grey;
    font-size: 12px;
}
&.page-link{
    color: grey;
    font-size: 12px;
    padding-left: 50px
}
&.page-numbers{
    font-size: 16px
}
&.start-page{
    margin: 25px;
    padding: 15px;
    background-color: green;
    color: black;
    border-radius: 15px;
    &:hover{
        background-color: #0080007a;
    }}
&.category-list{
    font-size: 15px;
    padding: 2px 10px;
    background-color: #D8D6F5;
    border-radius: 5px;
    box-shadow: 7px 6px 9px 0px rgb(156 158 178);
    &:hover{
        background-color: #a8a4e9;
        color: black
    }
}

`

export default StyledNavLink
