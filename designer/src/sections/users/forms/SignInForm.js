import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import * as UI from 'semantic-ui-react'

import { Form } from 'ui/forms'
import { SIGN_UP } from 'routing/paths'

const INITIAL_VALUES = {
  email: '',
  password: ''
}

const SCHEMA =
  Yup
    .object()
    .shape({
      email:
        Yup
          .string()
          .email('This doesn\'t seem a valid email address')
          .required('An email is required'),
      password:
        Yup
          .string()
          .required('A password is required')
    })

const SignInForm = ({ onSubmit }) => {
  const history = useHistory()

  const goToSignUp = () => history.push(SIGN_UP)

  return (
    <Form
      initialValues={ INITIAL_VALUES }
      schema={ SCHEMA }
      onSubmit={ onSubmit }
    >
      {
        ({ isValid }) => (
          <>
            <Form.EmailField
              name="email"
              required
              placeholder="e-mail"
              icon="at"
              iconPosition="left"
            />
            <Form.PasswordField
              name="password"
              required
              placeholder="password"
              icon="asterisk"
              iconPosition="left"
            />
            <UI.Button
              type="submit"
              positive
              icon
              labelPosition="left"
              disabled={ !isValid }
            >
              <UI.Icon name="key" />
              Sign In
            </UI.Button>
            <UI.Button
              basic
              content="Create an account"
              onClick={ goToSignUp }
            />
          </>
        )
      }
    </Form>
  )
}

export { SignInForm }
