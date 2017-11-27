import React from 'react'
import cx from 'classnames'
import Arrow from '../Arrow'
import './Menu.css'

const Menu = ({children, className}) => (
  <div className="Menu">
    <Arrow color="#eee" size={5} placement="top" />
    <div className={cx('Menu-content', className)}>
      {children}
    </div>
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
