import React, {Component, PropTypes, Children, cloneElement} from 'react'
import {findDOMNode} from 'react-dom'
import Button from '../Button'
import Popover from '../Popover'
import {EventsJar} from '../events'
import './Dropdown.css'

class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    plain: PropTypes.bool,
  }

  state = {
    showOptions: false
  }

  handleToggleDropdown = () => {
    this.setState({showOptions: !this.state.showOptions})
  }

  handleDocumentClick = (e) => {
    if (!findDOMNode(this).contains(e.target)) {
      this.close()
    }
  }

  close = () => {
    this.setState({showOptions: false})
  }

  render() {
    const {children, title, disabled, menu, ...rest} = this.props
    const {showOptions} = this.state

    return (
      <div {...rest} className="Dropdown">
        {cloneElement(Children.only(children), {...rest, onClick: this.handleToggleDropdown})}
        <Popover isOpen={showOptions}>
          <EventsJar target={document} onClick={this.handleDocumentClick} />
          {menu}
        </Popover>
      </div>
    )
  }
}
export default Dropdown
