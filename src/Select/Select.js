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
      isOpen: false,
      selected: options.find(o => o.value === value),
    }
  }

  handleDocumentClick = (e) => {
    if (!findDOMNode(this).contains(e.target)) {
      this.setState({isOpen: false})
    }
  }

  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  handleSelect = (selectedValue, index) => {
    const {value, options, onChange} = this.props
    if (selectedValue !== value) {
      const selected = value === '' ? null : options[index]
      onChange(selectedValue)
      this.setState({selected, isOpen: false})
    }
  }

  close = () => {
    this.setState({isOpen: false})
  }

  render() {
    const {
      className, options, bordered, title, renderOption, ...rest
    } = this.props
    const {selected, isOpen} = this.state

    return (
      <div
        {...rest}
        className={cx('Select', className, {
          'is-open': isOpen,
          'is-disabled': options.length === 0,
        })}
        onClick={this.handleClick}
      >
        <div className="Select-control">
          {selected ? selected.label : <span className="Select-title">{title}</span>}
          <SVGIcon className="Select-icon" name="select" width={8} />
        </div>
        {isOpen &&
          <div className="Select-menu">
            <EventsJar target={document} onClick={this.handleDocumentClick} />
            {options.map(({label, value}, index) => (
              renderOption({label, index, value, onClick: this.handleSelect})
            ))}
          </div>
        }
      </div>
    )
  }
}

export default Select
