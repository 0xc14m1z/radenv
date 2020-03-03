import React from 'react'
import { Grid } from 'semantic-ui-react'

const Centered = ({ children }) => (
  <Grid
    centered
    columns={ 3 }
    verticalAlign="middle"
    className="full-height"
  >
    <Grid.Column>
      { children }
    </Grid.Column>
  </Grid>
)

export { Centered }
