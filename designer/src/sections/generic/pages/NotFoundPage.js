import React from 'react'

import { Grid, Header, Icon, Segment } from 'semantic-ui-react'

const NotFoundPage = () => (
  <Grid
    centered
    columns={ 3 }
    verticalAlign="middle"
    className="full-height"
  >
    <Grid.Column>
      <Segment placeholder>
        <Header icon>
          <Icon name="ban" />
          Page Not Found
        </Header>
      </Segment>
    </Grid.Column>
  </Grid>
)

export { NotFoundPage }
