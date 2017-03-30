import React from 'react'
import './Option.css'

const Option = ({value, index, label, onClick, ...rest}) => (
  <div className="Option" onClick={() => onClick(value, index)}>
    {label}
  </div>
)

export default Option
