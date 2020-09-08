import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Table from './components/Table'
import Rules from './components/Rules'

const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  font-family: 'Barlow Semi Condensed', Arial;
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%) 30%, hsl(237, 49%, 15%) 90%);
  margin: 0;
  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`
function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  )
}

export default App