import React from 'react'
import Showcase from './Showcase'
import Button from '../src/Button'
import Dropdown from '../src/Dropdown'
import Menu from '../src/Menu'
import {css} from 'emotion'

const styles = {
  dropdown: {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    fontSize: 14,
    color: '#404040',
  }
}

const menuExample = (
  <Menu className={css(styles.dropdown)}>
    <Menu.Item>dropped</Menu.Item>
    <Menu.Item>halo</Menu.Item>
    <Menu.Item>what the u</Menu.Item>
  </Menu>
)

const DropdownExample = () =>
  <Showcase title="Dropdown">
    <Dropdown menu={menuExample}>
      <Button plain block>click to trigger dropdown</Button>
    </Dropdown>
  </Showcase>

export default DropdownExample
