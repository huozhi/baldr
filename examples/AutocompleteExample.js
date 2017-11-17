import React from 'react'
import Autocomplete from 'baldr/Autocomplete'
import Showcase from './Showcase'
import {OPTIONS} from './consts'

class AutocompleteExample extends React.Component {
  state = {
    value: '',
  }

  handleInputChange = (inputValue) => {
    this.setState({value: inputValue})
  }

  render() {
    return (
      <Showcase title="Autocomplete">
        <Autocomplete
          value={this.state.value}
          options={OPTIONS}
          onInputChange={this.handleInputChange}
          onChange={(value) => { console.debug('selected', value) }}
        />
      </Showcase>
    )
  }
}

export default AutocompleteExample
