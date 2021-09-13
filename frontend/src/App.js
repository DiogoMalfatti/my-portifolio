import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import GlobalStyle from './globals/GlobalStyles'
import Home from './pages/Home'
import Portifolio from './pages/Portifolio'
import Curriculo from './pages/Curriculo'
import SobreMim from './pages/SobreMim'

function App() {
  return (
    <div>
      <GlobalStyle />
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
