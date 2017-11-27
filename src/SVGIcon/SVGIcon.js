import React from 'react'
import cx from 'classnames'
import './SVGIcon.css'

const SVGIcon = ({name, size, className, ...rest}) => {
  const Icon = require(`./icons/${name}.svg`)
  const sizes = size && {width: size, height: size}

  return (
    <Icon
      {...rest}
      {...sizes}
      className={cx('Icon', className, {[`Icon--${name}`]: name})}
    />
  )
}

SVGIcon.defaultProps = {
  fill: 'currentColor',
}

export default SVGIcon
