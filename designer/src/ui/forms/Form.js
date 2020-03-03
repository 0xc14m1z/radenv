import React from 'react'
import { Formik } from 'formik'
import { Form as UIForm } from 'semantic-ui-react'

import { TextField } from './TextField'

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

export { Form }
