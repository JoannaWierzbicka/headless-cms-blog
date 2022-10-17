import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
font-size: 20px;
text-decoration: none;
color: black;
&:hover{
    color: green;
}
&.categoriesNavLink{
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
    }
}
`

export default StyledNavLink
