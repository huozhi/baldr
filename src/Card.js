import React, {PropTypes} from 'react'
import cx from 'classnames'
import './Card.css'

const Card = ({children, className, component: Component = 'div', ...rest}) => (
  <Component {...rest} className={cx('Card', className)}>
    {children}
  </Component>
)

const CardHeader = ({children, className, ...rest}) => (
  <div {...rest} className={cx('Card-header', className)}>
    {children}
  </div>
)

const CardBlock = ({children, className, ...rest}) => (
  <div {...rest} className={cx('Card-block', className)}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Card.Header = CardHeader
Card.Block = CardBlock

export default Card
