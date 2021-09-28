import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from './components/00GlobalStyle'
import Header from './components/05header'
import Home from './pages/home'
import Portifolio from './pages/portifolio'
import Curriculo from './pages/curriculo'
import SobreMim from './pages/sobremim'
// import Footer from './components/06footer'
import Layout from './components/Layout'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
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
      <Layout></Layout>
      {/* <Footer /> */}
    </div>
  )
}

export default App
