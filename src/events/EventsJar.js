import {Component} from 'react'

const EVENT_REGEX = /^on\w+$/

class EventsJar extends Component {
  static defaultProps = {
    target: global.window,
  }

  componentDidMount() {
    if (this.props.target) {
      this.handlerJar = {}
      this.registerEvents(this.props)
    }
  }

  componentWillUnmount() {
    if (this.handlerJar) {
      this.dispose()
    }
  }

  dispose() {
    Object.keys(this.handlerJar).forEach(name => {
      this.props.target.removeEventListener(name.slice(2), this.handlerJar[name])
    })
    this.handlerJar = null
  }

  registerEvents({target, ...events}) {
    if (!this.handlerJar) {
      return
    }
    Object.keys(events).forEach(key => {
      const name = key.toLowerCase()
      const handler = events[key]

      if (name in target &&
        EVENT_REGEX.test(name) &&
        typeof handler === 'function' &&
        !(name in this.handlerJar)
      ) {
        this.handlerJar[name] = handler
        target.addEventListener(name.slice(2), handler)
      }
    })
  }

  render() {
    return null
  }
}

export default EventsJar
