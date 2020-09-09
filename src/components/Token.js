import React  from 'react';
import styled from 'styled-components'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import rock from '../images/icon-rock.svg'


const TokenStyled = styled.div`
  height: 130px;
  width: 130px;
  border: 15px solid ${({color}) => color.base};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items:center;
  box-shadow: 0 5px 2px ${({color}) => color.border};
  cursor: pointer;
  &:active {
    transform: scale(.9);
  }
  .box {
    background: ${({ color }) => (color.icon == 'default') ? '#122343' : 'white'};
    box-shadow: ${({ color }) => (color.icon == 'default') ? 'transparent' : 'inset 0px 8px 4px 1px rgb(184 186 226)'};
    flex: 1;
    border: none;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
  }
`

const colors = {
  paper: {
    icon: paper,
    border: 'hsl(230, 89%, 62%)',
    base: 'hsl(230, 89%, 65%)',
  },
  rock: {
    icon: rock,
    border: 'hsl(349, 71%, 52%)',
    base: 'hsl(349, 70%, 56%)',
  },
  scissors: {
    icon: scissors,
    border: 'hsl(39, 89%, 49%)',
    base: 'hsl(40, 84%, 53%)',
  },
  default: {
    icon: 'default',
    border: 'transparent',
    base: 'transparent',
  }

}

function Token({ name = '', onClick }) {
  function handleClick() {
    onClick && onClick(name)
  }
  return (
    <TokenStyled color={colors[name]} onClick={handleClick} >
      <div className="box">
        {
          (name !== 'default') && (
            <img src={colors[name].icon} alt={name} />
          )
        }
      </div>
    </TokenStyled>
  )
}

export default Token