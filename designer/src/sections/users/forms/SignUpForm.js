import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import * as UI from 'semantic-ui-react'

import { Form } from 'ui/forms'
import { SIGN_IN } from 'routing/paths'

const INITIAL_VALUES = {
  email: '',
  password: '',
  passwordConfirmation: ''
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
          .required('A password is required'),
      passwordConfirmation:
        Yup
          .string()
          .oneOf([Yup.ref('password')], 'Passwords don\'t match')
    })

const SignUpForm = ({ onSubmit }) => {
  const history = useHistory()

  const goToSignIn = () => history.push(SIGN_IN)

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
            <Form.PasswordField
              name="passwordConfirmation"
              required
              placeholder="password confirmation"
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
              <UI.Icon name="check circle outline" />
              Sign Up
            </UI.Button>
            <UI.Button
              basic
              content="Sign in"
              onClick={ goToSignIn }
            />
          </>
        )
      }
    </Form>
  )
}

export { SignUpForm }
