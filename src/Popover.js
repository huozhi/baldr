import React, {Component, PropTypes} from 'react'
import cx from 'classnames'
import './Popover.css'

export default class Popover extends Component {
  static propTypes = {
    arrow: PropTypes.bool,
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    arrow: false,
  }

  handleClick = (e) => {
    if (e.target.tagName !== 'A') {
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
    }
  }

  render() {
    const {children, arrow, isOpen, className} = this.props

    return isOpen ? (
      <div className={cx('Popover', className)} onClick={this.handleClick}>
        {arrow && <div className="Popver-arrow" />}
        {children}
      </div>
    ) : null
  }
}
