import React from 'react'
import cx from 'classnames'
import {css} from 'emotion'

const Menu = ({children, className}) => (
  <div className={css(styles.content, className)}>
    {children}
  </div>
)

const MenuItem = ({
  onClick,
  children,
  className,
  disabled,
}) => (
  <div onClick={onClick} className={css(styles.item, disabled && styles.isDisabled)}>
    {children}
  </div>
)

Menu.Item = MenuItem

const styles = {
  content: {
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, .15)',
    borderRadius: 2,
    textAlign: 'left',
  },

  item: {
    padding: '8px 16px',
    color: '#404040',
    cursor: 'auto',
    whiteSpace: 'nowrap',
  },

  isDisabled: {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    color: '#eee',
  }
}


export default Menu
