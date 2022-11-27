import styled from 'styled-components'

export const StyledMenu = styled.div`
    min-width: 50%;
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 580px){
    flex-direction: column;
    align-items: flex-end;
}
    `

export default StyledMenu
