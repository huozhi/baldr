import React from 'react'
import {css} from 'emotion'
import {getOppositePlacement} from '../utils/direction'

const Arrow = ({placement, className, color = '#fff', size = 5}) => (
  <span
    className={css`
      width: 0;
      height: 0;
      border-top: ${size}px solid transparent;
      border-bottom: ${size}px solid transparent;
      border-left: ${size}px solid transparent;
      border-right: ${size}px solid transparent;
      border-${getOppositePlacement(placement)}: ${size}px solid ${color};
      ${'' /* transform: ${(placement === 'top' || placement === 'bottom') ? 'translateY(-50%)' : 'translateX(-50%)'}; */}

      ${className}
    `}
  />
)

export default Arrow
