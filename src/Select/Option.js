import React from 'react'
import Menu from '../Menu'

const Option = ({value, index, label, onClick, ...rest}) => (
  <Menu.Item onClick={() => onClick(value, index)}>
    {label}
  </Menu.Item>
)

export default Option
