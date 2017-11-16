import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const KEY_MAP = {
  UP: 38,
  DOWN: 40,
}

class Autocomplete extends React.Component {
  static defaultProps = {
    onChange() {},
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
    let nextIndex = activeIndex
    switch (action) {
      case 'prev':
        nextIndex = Math.max(activeIndex - 1, -1)
        break
      case 'next':
        nextIndex = Math.min(activeIndex + 1, options.length - 1)
        break
      default:
        break
    }
    this.setState({activeIndex: nextIndex})
    const selected = options[nextIndex] != null ? options[nextIndex].value : null
    onChange(selected)
  }

  handleFocus = () => {
    this.open()
  }

  render() {
    const {options} = this.props
    const {isOpen, activeIndex} = this.state

    return (
      <div className={css(styles.root)}>
        <input
          className={css(styles.input)}
          onKeyDown={this.handleKeydown}
          onFocus={this.handleFocus}
          onBlur={this.close}
        />
        {isOpen &&
          <div className={css(styles.menu)}>
            {options.map((item, index) => (
              <div
                key={`item-${index}`}
                className={css(
                  styles.item,
                  activeIndex === index && styles.activeItem
                )}
              >
                {item.label}
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  menu: {
    position: 'absolute',
    top: 40,
    left: 0,
    boxShadow: '0 2px 10px 3px rgba(0, 0, 0, .15)',
    borderRadius: 2,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    zIndex: 10,
  },
  activeItem: {
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 10,
    borderTop: '1px solid #eee',
  },
  input: {
    flexGrow: 1,
    flexShrink: 0,
    display: 'block',
    padding: '10px 16px',
  },
})

export default Autocomplete

// API
// <Autocomplete options={} onChange={(value) => {...}} />
