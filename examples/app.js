import React from 'react'
import cx from 'classnames'
import {render} from 'react-dom'
import Select from 'baldr/Select'
import Dropdown from 'baldr/Dropdown'
import Button from 'baldr/Button'
import Autocomplete from 'baldr/Autocomplete'
import Card from 'baldr/Card'
import Tooltip from 'baldr/Tooltip'
import styles from './app.css'
import AutocompleteExample from './AutocompleteExample'
import Showcase from './Showcase'
import {OPTIONS, TOOLTIP_CONTENT} from './consts'

const App = () => (
  <div className={styles.app}>
    <div className={styles.name}>Baldr Components</div>
    <AutocompleteExample />
    <Showcase title="Select">
      <Select
        options={OPTIONS}
        value="A"
        title="demo select"
        onChange={() => {}}
      />
    </Showcase>

    <Showcase title="Dropdown">
      <Dropdown menu={<div className={styles.dropdown}>dropped</div>}>
        <Button plain>dropdown toggler</Button>
      </Dropdown>
    </Showcase>

    <Showcase title="Card">
      <Card>
        <Card.Header>Title</Card.Header>
        <Card.Block>
          Something Important
        </Card.Block>
      </Card>
    </Showcase>

    <Showcase title="Tooltip">
      <div className={styles.btnGroup}>
        <Tooltip placement="left" tooltip={TOOLTIP_CONTENT}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="top" tooltip={TOOLTIP_CONTENT}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="bottom" tooltip={TOOLTIP_CONTENT}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="right" tooltip={TOOLTIP_CONTENT}>
          <Button>Right</Button>
        </Tooltip>
      </div>
    </Showcase>
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
