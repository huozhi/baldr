import React from 'react'
import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  demo: {
    margin: 'auto',
    padding: '24px 0 40px',
    borderBottom: '2px dashed #c5ccd6',
    maxWidth: 600,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 20,
  }
})

const Showcase = ({title, children, className}) => (
  <div className={css(styles.demo, className)}>
    <div className={css(styles.title)}>{title}</div>
    {children}
  </div>
)

export default Showcase
