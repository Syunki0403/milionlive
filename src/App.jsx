import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, ResultQuestionnaire } from './components/pages/index'
import { ScrollToTop } from './components/templates/index'
import './assets/css/App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/result' component={ResultQuestionnaire} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
