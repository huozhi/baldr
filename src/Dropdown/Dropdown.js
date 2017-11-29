import React, {Component, Children, cloneElement} from 'react'
import Button from '../Button'
import Popover from '../Popover'
import {EventsJar} from '../events'
import {css} from 'emotion'

const styles = {
  root: {
    position: 'relative',
  }
}

class Dropdown extends Component {
  state = {
    showOptions: false
  }

  handleRef = (node) => {
    this.element = node
  }

  handleToggleDropdown = () => {
    this.setState({showOptions: !this.state.showOptions})
  }

  handleClickOutside = (e) => {
    if (this.element && !this.element.contains(e.target)) {
      this.close()
    }
  }

  close = () => {
    this.setState({showOptions: false})
  }

  render() {
    const {children, title, disabled, menu, className, ...rest} = this.props
    const {showOptions} = this.state

    return (
      <div {...rest} ref={this.handleRef} className={css(styles.root, className)}>
        {cloneElement(Children.only(children), {...rest, onClick: this.handleToggleDropdown})}
        <Popover isOpen={showOptions} placement="bottom">
          <EventsJar target={document} onClick={this.handleClickOutside} />
          {menu}
        </Popover>
      </div>
    )
  }
}

export default Dropdown
