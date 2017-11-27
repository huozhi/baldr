import React, {Component, PropTypes} from 'react'
import cx from 'classnames'
import './Button.css'

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  }

  render() {
    const {
      text, plain, children, className, component: Component='button', ...rest
    } = this.props

    return (
      <Component
        className={cx('Button', {'Button-plain': plain}, className)}
        {...rest}
      >
        {children}
      </Component>
    )
  }
}
