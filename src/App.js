import React from 'react'

import Home from './components/Home/Home'
import About from './components/About/About'
import Articles from './components/Articles/Articles'
import { Route } from 'react-router-dom'

import PostPage from './components/PostPage'

const mainStyles = {
  maxWidth: '65%',
  margin: '0 auto',
  marginTop: '10px',
  border: 'none',
  boxShadow: '8px 8px 24px 0px rgb(66 68 90 / 35%)',
  borderRadius: '5%'
}

function App () {
  return (
    <div style={mainStyles}>
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
