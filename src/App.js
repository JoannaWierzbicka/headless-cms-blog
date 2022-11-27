/* eslint-disable no-unused-vars */
import React from 'react'

import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import Articles from './components/Articles/Articles'
import About from './components/About/About'
import PostPage from './components/PostPage'
import PostList from './components/PostList/PostList'
import StartPage from './components/StartPage/StartPage'

import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import StyledDiv from './styled/StyledDiv'

function App () {
  return (
    <StyledDiv>
      <Header/>
      <Route
        exact
        path={'/'}
      ><StartPage/>
      </Route>
      <Route path={'/page-:id'}><Home/></Route>
      <Route path={'/articles'}><Articles/></Route>
      <Route path={'/about'}><About/></Route>
      <Route
        exact
        path={'/categories'}
      ><Categories/>
      </Route>
      <Route
        exact
        path={'/blog/:id'}
      ><PostPage/>
      </Route>
      <Route
        exact
        path={'/categories/:tag'}
      ><PostList/>
      </Route>

    </StyledDiv>
  )
}

export default App
