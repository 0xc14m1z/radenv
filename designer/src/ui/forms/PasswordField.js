import React from 'react'
import { TextField } from './TextField'

const PasswordField = props => (
  <TextField { ...props } type="password" />
)

export { PasswordField }
