import styled from 'styled-components'

export const StyledDiv = styled.div`
&.page-numbers{
    display: flex;
    justify-content: space-around;
    width: 15%;
    margin: 0 auto;
    padding-bottom: 15px;
}
&.start-page{
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('https://picsum.photos/1000/700');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
&.about{
    padding: 30px 50px;
    line-height: 2;
}
&.home-page{
    height: fit-content;
}
&.articles-list{
    padding: 30px 50px;
}
&.categories{
    padding: 30px 50px;
}

`

export default StyledDiv
