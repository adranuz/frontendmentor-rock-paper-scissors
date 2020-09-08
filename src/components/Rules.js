import React, { useState }  from "react";
import styled from 'styled-components'
import Button from './Button'
import rulesImg  from '../images/image-rules.svg'
import iconClose from '../images/icon-close.svg'

const RulesStyled = styled.div`
  text-align: center;
  .rules-overlay {
    background:  white;
    padding-top: 4em;
    padding-bottom: 4em;
    position: fixed;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    color: grey;
    text-transform: uppercase;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: -2px;
  }
  .icon-close {
    cursor: pointer;
  }
`

function Rules() {
  const [visible, setVisible] = useState(false)
  function openRules() {
    setVisible(true)
  }
  function closeRules() {
    setVisible(false)
  }
  return (
    <RulesStyled>
      {
        (visible) && (
          <div className="rules-overlay">
            <h2>Rules</h2>
            <img src={rulesImg} alt="game rules" />
            <img className="icon-close" src={iconClose} onClick={closeRules}/>
          </div>
        )
      }
      <Button onClick={openRules}/>
    </RulesStyled>
  )
}

export default Rules