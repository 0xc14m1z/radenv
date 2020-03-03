import React from 'react'
import { Formik } from 'formik'
import { Form as UIForm } from 'semantic-ui-react'

import { TextField } from './TextField'
import { PasswordField } from './PasswordField'

const Form = ({ initialValues, schema, onSubmit, children, ...props }) => (
  <Formik
    initialValues={ initialValues }
    validationSchema={ schema }
    onSubmit={ onSubmit }
  >
    {
      ({ handleReset, handleSubmit, isSubmitting, ...formikProps }) => (
        <UIForm
          onReset={ handleReset }
          onSubmit={ handleSubmit }
          loading={ isSubmitting }
          { ...props }
          children={
            typeof children === 'function'
              ? children({ isSubmitting, ...formikProps })
              : children
          }
        />
      )
    }
  </Formik>
)

Form.TextField = TextField
Form.PasswordField = PasswordField

export { Form }
