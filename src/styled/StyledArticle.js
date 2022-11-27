import styled from 'styled-components'

export const StyledArticle = styled.article`
 padding: 30px 50px;
 line-height: 1.5;
&.categories-article{
    font-size: 12px;
    display: flex;
    @media only screen and (max-width: 790px){
    flex-direction: column;
}

}
`

export default StyledArticle
