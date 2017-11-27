import React from 'react'
import Showcase from './Showcase'
import Button from '../src/Button'
import Dropdown from '../src/Dropdown'
import Menu from '../src/Menu'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  dropdown: {
    padding: '8px 16px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    border: '1px solid #eee',
    fontSize: 14,
    color: '#404040',
  }
})

const menuExample = (
  <Menu className={css(styles.dropdown)}>
    <Menu.Item>dropped</Menu.Item>
  </Menu>
)

const DropdownExample = () =>
  <Showcase title="Dropdown">
    <Dropdown menu={menuExample}>
      <Button plain>toggler</Button>
    </Dropdown>
  </Showcase>

export default DropdownExample
