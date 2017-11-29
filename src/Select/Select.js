import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Popover from '../Popover'
import {EventsJar} from '../events'
import Menu from '../Menu'
import Option from './Option'
import {css} from 'emotion'

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
        className={css(styles.root, className)}
        onClick={this.handleClick}
      >
        <div className={css(styles.control, isOpen && styles.isOpen)}>
          {selected ? selected.label : <span className={css(styles.title)}>{title}</span>}
          <span className={css(styles.icon, {transform: `rotate(${isOpen ? -135 : -45}deg)`})} />
        </div>
        {isOpen &&
          <div className={css(styles.menu)}>
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
  },

  root: {
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
  },

  control: {
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    border: '1px solid rgba(0, 0, 0, .15)',
    borderRadius: 2,
  },

  isOpen: {
    borderRadius: '3px 3px 0 0',
  },

  menu: {
    marginTop: -1,
    position: 'absolute',
    top: '100%',
    width: '100%',
    maxHeight: 480,
    border: '1px solid rgba(0, 0, 0, .15)',
    // borderTop: 0,
    borderRadius: '0 0 3px 3px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    overflowY: 'auto',
    zIndex: 1,
  },

  title: {
    color: '#96a3b3',
  },
}


export default Select
