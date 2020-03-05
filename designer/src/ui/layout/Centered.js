import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div `
  width: 90%;
  max-width: 400px;
`

const Centered = ({ children }) => (
  <Container>
    <Content>
      { children }
    </Content>
  </Container>
)

export { Centered }
