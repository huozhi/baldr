import React, {Component, PropTypes} from 'react'
import cx from 'classnames'

class InfiniteScroll extends Component {
  static defaultProps = {
    throttle: 0, /* delta throttle of detecting if reaching the bottom */
    onScrollBottom() {},
  }

  static propTypes = {
    throttle: PropTypes.number.isRequired,
    onScrollBottom: PropTypes.func,
  }

  componentDidMount() {
    if (this.infinite) {
      this.infinite.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    if (this.infinite) {
      this.infinite.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = () => {
    if (this.hasReachedBottom) {
      this.props.onScrollBottom()
    }
  }

  get hasReachedBottom() {
    const {scrollHeight, scrollTop, clientHeight} = this.infinite
    return scrollHeight - scrollTop <= clientHeight + this.props.throttle
  }

  render() {
    const {
      children, className,
      throttle, onScrollBottom, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={cx('InfiniteScroll', className)}
        ref={node => { this.infinite = node }}
      >
        {children}
      </div>
    )
  }
}

export default InfiniteScroll
