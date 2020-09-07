import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Table from './components/Table'

const AppStyled = styled.main`
  background: #111f43;
  min-height: 100vh;
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%) 30%, hsl(237, 49%, 15%) 90%);
  padding: 2em;
`
function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </AppStyled>
  )
}

export default App