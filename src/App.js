/* eslint-disable no-unused-vars */
import React from 'react'
import './app.css'

import Home from './components/Home/Home'
import About from './components/About/About'
import Articles from './components/Articles/Articles'
import PostPage from './components/PostPage'

import { Route } from 'react-router-dom'

function App () {
  return (
    <div className={'main'}>
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
    </div>
  )
}

export default App
