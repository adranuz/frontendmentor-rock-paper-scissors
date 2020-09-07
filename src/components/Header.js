import React from 'react'
import styled from 'styled-components'
import Score from './Score'

const HeaderStyled = styled.div`
  border: 1px solid rgba(255,255,255, .29);
  padding: 2em;
  border-radius: .5em;
  color: white;
  h1 {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 16px;
  }
`

function Header() {
  return (
    <HeaderStyled>
      <h1>Rock <br /> Paper <br /> Scissors</h1>
      <Score />
    </HeaderStyled>
  )
}
export default Header
