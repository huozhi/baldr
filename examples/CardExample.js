import React from 'react'
import Card from '../src/Card'
import Showcase from './Showcase'

const CardExample = () =>
  <Showcase title="Card">
    <Card>
      <Card.Header>Title</Card.Header>
      <Card.Block>
        Something Important
      </Card.Block>
    </Card>
  </Showcase>

export default CardExample
