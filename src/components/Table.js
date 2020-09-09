import React, { useState, useContext }  from "react";
import styled from 'styled-components'
import Token from './Token'
import triangle from '../images/bg-triangle.svg'
import { WhiteButton } from './Button'
import { ScoreContext } from '../App'


const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  gap: 30px 60px;
  padding: 2em 0;
  /*background-image: url("{triangle}");*/
  background-repeat: no-repeat;
  background-position: center 95px;
  background-size: 220px 200px;

  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .in-game {
    text-align: center;
    text-transform: uppercase;
    & p {
      margin-top: 2em;
    }
  }
  .results-container {
    width: 100%;
    position: relative;
    height:90px;
  }
  .results {
    position: absolute;
    text-align: center;
    left:0;
    right: 0;
    & h3 {
      font-size: 40px;
      margin: 10px;
      margin-top: -10px;
      text-transform: uppercase;
    }
  }
`

const elements = [
  'paper',
  'scissors',
  'rock'
]

function Table() {
  const [playing, setPlaying] = useState(false)
  const [pick, setPick] = useState('')
  const [housePick, setHousePick] = useState('default')
  const [user, setUser] = useState('')
  const {score, setScore} = useContext(ScoreContext)
  //const scoreHere = score

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  function launchHousePick() {
    const hp = elements[getRandomInt(0,3)]
      setHousePick(hp)
    return hp
  }
  function onClick(name) {
    setPlaying(true) //comienza el juego
    setPick(name) //set our pick
    setTimeout(() => {

      const hp = launchHousePick() //house 
      const result = whoWon(name, hp)
      setUser(result)
      console.log(result)
      settingScore(result)
    }, 1000)

    //setScore(scoreHere)
    //console.log(results)
  }
  function settingScore(result) {
    (result === 'win') && setScore( score + 1 )
    (result === 'lose') && setScore(0)
  }
  function whoWon(pick, housePick) {
    console.log(pick, housePick)
    if(pick === housePick) return 'draw';
    else if(pick === 'rock' && housePick === 'scissors') return 'win'
    else if(pick === 'scissors' && housePick === 'paper') return 'win'
    else if(pick === 'paper' && housePick === 'rock') return 'win'
    else {return 'lose'};
  } 
  function newChance() {
    setHousePick('default')
    setPlaying(false)
  }
  
  return (
    <TableStyled>
      {
        !playing ? (
          <>
            <Token name='paper' onClick={onClick} />
            <Token name='scissors' onClick={onClick} />
            <Token name='rock' onClick={onClick} />
          </>
        ) :
        (
          <>
            <div className="in-game">
              <Token name={pick} />
              <p>You Picked</p>
            </div>
            <div className="in-game" >
              <Token name={housePick} />
              <p>The house picked</p>
            </div>
            <div className="results-container">
              {
                housePick != 'default' && (
                  <div className="results">
                    <h3>YOU {user}</h3>
                    <WhiteButton onClick={newChance}>
                      PLAY AGAIN
                    </WhiteButton>
                  </div>
                ) 
              }
            </div>

          </>
        )
      }
    </TableStyled>
  )
}

export default Table