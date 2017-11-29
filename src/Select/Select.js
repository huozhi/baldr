import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import cx from 'classnames'
import Popover from '../Popover'
import {EventsJar} from '../events'
import Menu from '../Menu'
import Option from './Option'
import {css} from 'emotion'
import './Select.css'

class Select extends Component {
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
          <span className={css(styles.icon, {transform: `rotate(${isOpen ? -135 : -45}deg)`})} />
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

const styles = {
  icon: {
    display: 'inline-block',
    marginLeft: 'auto',
    width: 8,
    height: 8,
    borderTop: '1px solid rgba(0, 0, 0, .15)',
    borderLeft: '1px solid rgba(0, 0, 0, .15)',
  }
}


export default Select
