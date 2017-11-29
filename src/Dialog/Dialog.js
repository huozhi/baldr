import React, {Component} from 'react'
import cx from 'classnames'
import Portal from './Portal'
import './Dialog.css'

const DialogHeader = ({title, subtitle}) => (
  <div className="Dialog-header">
    {(title || subtitle) && [
      <div key="title" className="Dialog-title">{title}</div>,
      <div key="subtitle" className="Dialog-subtitle">{subtitle}</div>,
    ]}
  </div>
)

const DialogBody = ({children}) => (
  <div className="Dialog-body">
    {children}
  </div>
)

class Dialog extends Component {
  static defaultProps = {
    isOpen: true, // TODO: 废弃 Modal 后，改为 false
    plain: false,
  }

  render() {
    const {className, children, isOpen, onClose, plain} = this.props

    return (
      <Portal className="Dialog">
        {isOpen && (
          <div className="Dialog-overlay">
            <div className={cx('Dialog-content', className, {'Dialog--plain': plain})}>
              {children}
            </div>
          </div>
        )}
      </Portal>
    )
  }
}

Dialog.Header = DialogHeader
Dialog.Body = DialogBody

export default Dialog
