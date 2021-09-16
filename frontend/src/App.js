import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import GlobalStyle from './components/globals/GlobalStyles'
import Header from './components/header'
import Home from './pages/home'
import Portifolio from './pages/portifolio'
import Curriculo from './pages/curriculo'
import SobreMim from './pages/sobremim'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portifolio">
            <Portifolio />
          </Route>
          <Route path="/curriculo">
            <Curriculo />
          </Route>
          <Route path="/sobremim">
            <SobreMim />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
