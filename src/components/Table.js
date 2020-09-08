import React  from "react";
import styled from 'styled-components'
import Token from './Token'
import triangle from '../images/bg-triangle.svg'



const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  gap: 30px 60px;
  padding: 2em 0;
  background-image: url("${triangle}");
  background-repeat: no-repeat;
  background-position: center 95px;
  background-size: 220px 200px;

  & div:nth-of-type(3) {
    grid-column: span 2;
  }
`

function Table({children}) {
  return (
    <TableStyled>
      <Token name='paper' />
      <Token name='scissors' />
      <Token name='rock' />
    </TableStyled>
  )
}

export default Table