import React from 'react'
import { Field } from 'formik'
import { Form as UI } from 'semantic-ui-react'

const TextField = ({ name, ...props }) => (
  <Field name={ name }>
    {
      ({ field, form, meta }) => (
        <UI.Input
          type="text"
          fluid
          { ...field }
          { ...props }
          error={ meta.touched && meta.error }
        />
      )
    }
  </Field>
)

export { TextField }
