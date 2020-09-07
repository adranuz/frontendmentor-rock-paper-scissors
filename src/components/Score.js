import React from 'react'
import styled from 'styled-components'

const ScoreStyled = styled.div`
   background: white;
   text-align: center;
   padding: 10px 0;
   border-radius: 6px;
   width: 5em;
   small {
     color: #2a45c2;
     text-transform: uppercase;
     font-size: 10px;
     font-weight: bold;
     letter-spacing: 1px;
   }
   p {
     color: #565468;
     font-size: 30px;
     margin: 0;
     font-weight: 700;
   }
`

function Score() {
  return (
    <ScoreStyled>
      <small>Score</small> 
      <p>12</p>
    </ScoreStyled>
  )
}
export default Score