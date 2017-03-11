import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import cx from 'classnames'
import SVGIcon from './SVGIcon'
import Popover from './Popover'
import EventsJar from './EventsJar'
import Menu from './Menu'
import './Select.css'

export default class Select extends Component {
  static propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    const {value, options} = props

    this.state = {
      showOptions: false,
      selected: options.find(o => o.value === value),
    }
  }

  handleDocumentClick = (e) => {
    if (!findDOMNode(this).contains(e.target)) {
      this.setState({showOptions: false})
    }
  }

  handleClick = () => {
    this.setState({showOptions: !this.state.showOptions})
  }

  handleSelect = (item) => {
    this.props.onSelect(item.value)
    const selected = item.value === '' ? null : item
    this.setState({selected, showOptions: false})
  }

  close = () => {
    this.setState({showOptions: false})
  }

  render() {
    const {
      className, options, bordered, disabled, title, ...rest
    } = this.props
    const {selected, showOptions} = this.state

    return (
      <div
        {...rest}
        className={cx('Select', className, {
          'Select--bordered': bordered,
          'is-disabled': disabled || options.length === 0,
        })}
        onClick={this.handleClick}
      >
        {selected ? selected.label : <span className="Select-title">{title}</span>}
        {showOptions && <EventsJar target={document} onClick={this.handleDocumentClick} />}
        <SVGIcon name="select" width={8} />
        <Popover isOpen={showOptions} onClose={this.close}>
          <Menu>
            {options.map((item, index) => (
              <Menu.Item key={index} onClick={() => { this.handleSelect(item) }}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Popover>
      </div>
    )
  }
}
