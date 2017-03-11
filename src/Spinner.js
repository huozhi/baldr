import React from 'react'
import cx from 'classnames'
import './Spinner.css'

/*
 * set viewBox to 44 x 44, use when scale
 */
const Spinner = ({className, size=36, ...rest}) => {
  const borderRadius = 3
  const barWidth = 5
  const barHeight = 10
  const radius = 40 / 2 - barHeight / 2

  return (
    <svg
      {...rest}
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="#cdd6e1"
      className={cx('Spinner', className)}
    >
      {Array.from(Array(8), (_, i) => {
        const angle = 360 / 8 * i
        const style = {
          transform: `rotate(${90 + angle}deg)`,
          animationDelay: `${0.2 * i}s`,
        }

        /* (barWidth + borderRadius) / 2 is used to fix the excursion caused by thickness */
        const x = Math.cos(Math.PI * angle / 180) * radius + radius + (barWidth + borderRadius) / 2
        const y = Math.sin(Math.PI * angle / 180) * radius + radius
        return (
          <rect
            className="Spinner-item"
            style={style}
            x={x}
            y={y}
            key={`r-${i}`}
            width={barWidth}
            height={barHeight}
            rx={borderRadius}
            ry={borderRadius}
          />
        )
      })}
    </svg>
  )
}

export default Spinner
