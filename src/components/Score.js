import React from 'react'
import styled from 'styled-components'

const ScoreStyled = styled.div`
   background: white;
   text-align: center;
   padding: 10px 0;
   border-radius: 6px;
   width: 80px;
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

function Score({value = 0}) {
  return (
    <ScoreStyled>
      <small>Score</small> 
      <p>{value}</p>
    </ScoreStyled>
  )
}
export default Score
