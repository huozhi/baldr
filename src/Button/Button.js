import React, {Component} from 'react'
import {css} from 'emotion'

const styles = {
  root: {
    display: 'inline-block',
    'white-space': 'nowrap',
    'vertical-align': 'baseline',
    'text-align': 'center',
    cursor: 'pointer',
    'user-select': 'none',
    'box-sizing': 'border-box',
    padding: '8px 16px',
    border: '1px solid rgba(0, 0, 0, .15)',
    'border-radius': 2,
    color: '#fff',
    'text-decoration': 'none',

    '&[disabled]': {
      cursor: 'not-allowed',
      opacity: .6,
    },

    '&:focus': {
      outline: 0,
    },
  },

  plain: {
    backgroundColor: 'transparent',
    color: '#404040',
  },

  block: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
  }
}

class Button extends Component {
  render() {
    const {
      text, plain, block, children, className, component: Component='button', ...rest
    } = this.props

    return (
      <Component
        className={css(
          styles.root,
          block && styles.block,
          plain && styles.plain,
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    )
  }
}

export default Button
