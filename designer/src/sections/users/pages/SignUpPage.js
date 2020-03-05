import React from 'react'
import { Header } from 'semantic-ui-react'
import { Layout } from 'ui/layout'
import { SignUpForm } from 'sections/users/forms'

const SignUpPage = () => (
  <Layout.Centered>
    <Header>RADEnv</Header>
    <SignUpForm onSubmit={ (values, actions) => {} } />
  </Layout.Centered>
)

export { SignUpPage }
