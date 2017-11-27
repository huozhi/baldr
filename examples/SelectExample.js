import React from 'react'
import Select from '../src/Select'
import Showcase from './Showcase'
import {OPTIONS} from './consts'

const SelectExample = () =>
  <Showcase title="Select">
    <Select
      options={OPTIONS}
      value="A"
      title="demo select"
      onChange={() => {}}
    />
  </Showcase>

export default SelectExample
