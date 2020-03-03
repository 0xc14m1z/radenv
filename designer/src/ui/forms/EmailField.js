import React from 'react'
import { TextField } from './TextField'

const EmailField = props => (
  <TextField { ...props } type="email" />
)

export { EmailField }
