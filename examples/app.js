import React from 'react'
import {render} from 'react-dom'
import styles from './app.css'
import CardExample from './CardExample'
import AutocompleteExample from './AutocompleteExample'
import SelectExample from './SelectExample'
import DropdownExample from './DropdownExample'
import Showcase from './Showcase'
import {OPTIONS, TOOLTIP_CONTENT} from './consts'

const App = () => (
  <div className={styles.app}>
    <div className={styles.name}>React Components</div>
    <AutocompleteExample />

    <SelectExample />
    <DropdownExample />
    <CardExample />
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
