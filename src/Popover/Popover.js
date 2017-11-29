import React, {Component} from 'react'
import {css} from 'emotion'
import Arrow from '../Arrow'
import {getOppositePlacement} from '../utils/direction'

class Popover extends Component {
  static defaultProps = {
    arrow: true,
    arrowSize: 5,
  }

  get translate() {
    const {arrowSize, placement} = this.props
    switch (placement) {
      case 'top': return `translateY(${-arrowSize}px)`
      case 'bottom': return `translateY(${arrowSize}px)`
      case 'left': return `translateX(${-arrowSize}px)`
      case 'right': return `translateX(${arrowSize}px)`

      default: return 0
    }
  }

  get arrowStyle() {
    const {arrowSize, placement} = this.props
    const dis = arrowSize * -2
    const arrowStyles = {
      top: {top: dis, left: '50%'},
      bottom: {bottom: dis, left: '50%'},
      left: {top: '50%', left: dis},
      right: {top: '50%', right: dis},
    }
    return arrowStyles[getOppositePlacement(placement)]
  }

  render() {
    const {children, arrow, isOpen, className, placement, arrowSize} = this.props
    if (!isOpen) {
      return null
    }
    const arrowPlacement = getOppositePlacement(placement)

    return (
      <div
        className={css(styles.popover, {
          transform: this.translate
        })
      }>
        {arrow &&
          <Arrow
            size={arrowSize}
            color="rgba(0, 0, 0, .15)"
            placement={arrowPlacement}
            className={css(styles.arrow, this.arrowStyle)}
          />}
        {children}
      </div>
    )
  }
}

const styles = {
  popover: {
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
  },

}

export default Popover
