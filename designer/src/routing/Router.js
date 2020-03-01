import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as Paths from './paths'
import * as Pages from './pages'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ Pages.NotFoundPage } />
    </Switch>
  </BrowserRouter>
)

export { Router }
