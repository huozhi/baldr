import React from 'react'
import {unmountComponentAtNode, unstable_renderSubtreeIntoContainer} from 'react-dom'

class Portal extends React.Component {
  static defaultProps = {
    onRef() {}
  }

  componentDidMount() {
    this.el = document.createElement('div')
    document.body.appendChild(this.el)
    this.renderPortal(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.renderPortal(nextProps)
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.el)
    document.body.removeChild(this.el)
    this.el = null
  }

  renderPortal = ({onRef, ...rest}) => {
    unstable_renderSubtreeIntoContainer(this, <div ref={onRef} {...rest} />, this.el)
  }

  render() {
    return null
  }
}

export default Portal
