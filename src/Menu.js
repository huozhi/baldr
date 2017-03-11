import React from 'react'
import cx from 'classnames'
import './Menu.css'

const Menu = ({children, className}) => (
  <div className={cx('Menu', className)}>
    {children}
  </div>
)

const MenuItem = ({
  onClick,
  children,
  className,
  disabled,
}) => (
  <div onClick={onClick} className={cx('MenuItem', className, {'is-disabled': disabled})}>
    {children}
  </div>
)

Menu.Item = MenuItem

export default Menu
