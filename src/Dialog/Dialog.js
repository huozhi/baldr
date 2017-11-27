import React, {Component, PropTypes} from 'react'
import cx from 'classnames'
import Portal from './Portal'
// import SVGIcon from './SVGIcon'
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
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onClose: PropTypes.func,
    plain: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
  }

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
              {/* <SVGIcon className="Dialog-close" name="rebecca/close" fill="#fff" size={12} onClick={onClose} /> */}
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
