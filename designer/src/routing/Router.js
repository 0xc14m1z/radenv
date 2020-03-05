import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as Paths from './paths'
import * as Pages from './pages'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ Paths.SIGN_UP } component={ Pages.SignUpPage } />
      <Route exact path={ Paths.SIGN_IN } component={ Pages.SignInPage } />

      <Route component={ Pages.NotFoundPage } />
    </Switch>
  </BrowserRouter>
)

export { Router }
