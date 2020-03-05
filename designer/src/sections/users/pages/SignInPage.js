import React from 'react'
import { Header } from 'semantic-ui-react'
import { Layout } from 'ui/layout'
import { SignInForm } from 'sections/users/forms'

const SignInPage = () => (
  <Layout.Centered>
    <Header>RADEnv</Header>
    <SignInForm onSubmit={ (values, actions) => {} } />
  </Layout.Centered>
)

export { SignInPage }
