import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import cx from 'classnames'
import SVGIcon from '../SVGIcon'
import Popover from '../Popover'
import EventsJar from '../EventsJar'
import Menu from '../Menu'
import Option from './Option'
import './Select.css'

class Select extends Component {
  static propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    renderOption: PropTypes.func,
    options: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    renderOption: ({value, ...rest}) => (
      <Option {...rest} value={value} key={value} />
    )
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

  handleSelect = (selectedValue, index) => {
    const {value, options, onChange} = this.props
    if (selectedValue !== value) {
      const selected = value === '' ? null : options[index]
      onChange(selectedValue)
      this.setState({selected, showOptions: false})
    }
  }

  close = () => {
    this.setState({showOptions: false})
  }

  render() {
    const {
      className, options, bordered, disabled, title, renderOption, ...rest
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
        <SVGIcon name="select" width={8} />
        <Popover isOpen={showOptions} onClose={this.close}>
          <EventsJar target={document} onClick={this.handleDocumentClick} />
          <Menu>
            {options.map(({label, value}, index) => (
              renderOption({label, index, value, onClick: this.handleSelect})
            ))}
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default Select
