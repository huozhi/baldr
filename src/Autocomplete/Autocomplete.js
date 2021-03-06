import React from 'react'
import {css} from 'emotion'
import {EventsJar} from '../events'

const KEY_MAP = {
  UP: 38,
  DOWN: 40,
}

class Autocomplete extends React.Component {
  static defaultProps = {
    onChange() {},
    onInputChange() {},
  }

  state = {
    isOpen: false,
    activeIndex: -1,
  }

  open = () => { this.setState({isOpen: true}) }
  close = () => { this.setState({isOpen: false}) }

  handleKeydown = (e) => {
    const keyCode = e.keyCode
    if (!this.state.isOpen) {
      this.open()
    }

    switch (keyCode) {
      case KEY_MAP.UP:
        this.setActiveItem('prev')
        break
      case KEY_MAP.DOWN:
        this.setActiveItem('next')
        break
      default:
    }
  }

  setActiveItem = (action) => {
    const {activeIndex} = this.state
    const {options, onChange} = this.props
    const lastIndex = options.length - 1
    let nextIndex = activeIndex
    switch (action) {
      case 'prev':
        nextIndex = activeIndex > 0 ? activeIndex - 1 : lastIndex
        break
      case 'next':
        nextIndex = activeIndex < lastIndex ? activeIndex + 1 : 0
        break
      default:
        break
    }
    this.setState({activeIndex: nextIndex})
  }

  handleFocus = () => {
    this.open()
  }

  handleClickOutside = (e) => {
    if (this.wrap && !this.wrap.contains(e.target)) {
      this.close()
    }
  }

  handleFocusOption = (nextIndex) => {
    this.setState({activeIndex: nextIndex})
  }

  handleSelect = (e) => {
    const {activeIndex} = this.state
    const {options, onChange} = this.props
    const selected = (options.length && options[activeIndex] != null) ? options[activeIndex].value : null
    this.close()
    onChange(selected)
  }

  handleInputChange = (e) => {
    const nextInputValue = e.target.value
    if (this.state.inputValue !== nextInputValue) {
      this.setState({inputValue: nextInputValue})
      this.props.onInputChange(nextInputValue)
    }
  }

  render() {
    const {options, value} = this.props
    const {isOpen, activeIndex} = this.state

    return (
      <div className={css(styles.root)} ref={node => { this.wrap = node }}>
        <input
          value={value}
          className={css(styles.input)}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeydown}
          onFocus={this.handleFocus}
          onBlur={this.handleInputBlur}
        />
        {isOpen &&
          <div className={css(styles.menu)}>
            {options.map((item, index) => (
              <div
                key={`item-${index}`}
                onMouseEnter={() => this.handleFocusOption(index)}
                onMouseMove={() => this.handleFocusOption(index)}
                onClick={this.handleSelect}
                className={css(
                  styles.item,
                  activeIndex === index && {backgroundColor: '#f5f5f5'}
                )}
              >
                {item.label}
              </div>
            ))}
            <EventsJar target={document} onClick={this.handleClickOutside} />
          </div>
        }
      </div>
    )
  }
}

const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    borderRadius: 2,
    flexDirection: 'column',
  },
  menu: {
    position: 'absolute',
    top: 40,
    left: 0,
    border: '1px solid rgba(0, 0, 0, .15)',
    borderRadius: 2,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    zIndex: 10,
    boxSizing: 'border-box',
  },
  item: {
    padding: 10,

    '&:not(:first-child)': {
      borderTop: '1px solid #eee',
    }
  },
  input: {
    flexGrow: 1,
    flexShrink: 0,
    outline: 'none',
    display: 'block',
    padding: '10px 16px',
    border: '1px solid rgba(0, 0, 0, .15)',
    borderRadius: 2,
  },
}

export default Autocomplete

// API
// <Autocomplete options={} value={} onChange={(value) => {...}} />
