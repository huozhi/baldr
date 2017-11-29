import React from 'react'
import {css} from 'emotion'

const styles = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, .15)',
    borderRadius: 2,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    marginBottom: '8px',
    color: '#404040',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderBottom: '1px solid rgba(0, 0, 0, .05)',
  },

  block: {
    padding: 16,
  }
}

const Card = ({children, className, component: Component = 'div', ...rest}) => (
  <Component {...rest} className={css(styles.root, className)}>
    {children}
  </Component>
)

const CardHeader = ({children, className, ...rest}) => (
  <div {...rest} className={css(styles.header, className)}>
    {children}
  </div>
)

const CardBlock = ({children, className, ...rest}) => (
  <div {...rest} className={css(styles.block, className)}>
    {children}
  </div>
)

Card.Header = CardHeader
Card.Block = CardBlock

export default Card
