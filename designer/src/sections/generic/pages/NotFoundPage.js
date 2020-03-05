import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'
import { Layout } from 'ui/layout'

const NotFoundPage = () => (
  <Layout.Centered>
    <Segment placeholder>
      <Header icon>
        <Icon name="ban" />
        Page Not Found
      </Header>
    </Segment>
  </Layout.Centered>
)

export { NotFoundPage }
