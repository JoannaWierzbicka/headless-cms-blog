/* eslint-disable no-unused-vars */
import React from 'react'

import Home from './components/Home/Home'
import About from './components/About/About'
import Articles from './components/Articles/Articles'
import PostPage from './components/PostPage'

import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import StyledMainDiv from './styled/StyledMainDiv'

function App () {
  return (
    <StyledMainDiv>
      <Header/>
      <Route
        exact
        path={'/'}
      ><Home/>
      </Route>
      <Route path={'/articles'}><Articles/></Route>
      <Route path={'/about'}><About/></Route>
      <Route
        exact
        path={'/blog/:id'}
      ><PostPage/>
      </Route>
    </StyledMainDiv>
  )
}

export default App
