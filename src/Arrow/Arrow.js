import React from 'react'
import {css} from 'emotion'

const oppositePlacements = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
}

const getOppositePlacement = (placement) => {
  return oppositePlacements[placement]
}

const Arrow = ({placement, color = '#fff', size = 5}) => (
  <span
    className={css`
      width: 0;
      height: 0;
      display: block;
      border-top: ${size}px solid transparent;
      border-bottom: ${size}px solid transparent;
      border-left: ${size}px solid transparent;
      border-right: ${size}px solid transparent;
      border-${getOppositePlacement(placement)}: ${size}px solid ${color};
      transform: ${(placement === 'top' || placement === 'bottom') ? 'translateY(-50%)' : 'translateX(-50%)'};
    `}
  />
)

export default Arrow
