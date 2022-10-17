import styled from 'styled-components'

export const StyledDiv = styled.div`
padding: 30px;
padding-top: 5px;
&.page-numbers{
    display: flex;
    justify-content: space-around;
    width: 15%;
    margin: 0 auto;
}
&.start-page{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px
}

`

export default StyledDiv
