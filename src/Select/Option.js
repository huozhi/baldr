import React from 'react'
import {css} from 'emotion'

const Option = ({value, index, label, onClick, ...rest}) => (
  <div className={css(styles.root)} onClick={() => onClick(value, index)}>
    {label}
  </div>
)

const styles = {
  root: {
    padding: '8px 16px',
    cursor: 'auto',
    whiteSpace: 'nowrap',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#f8f8f8',
    }
  }
}

export default Option
