import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Hello from './Hello'

export const hello = {
  name: 'tom',
}

export const actions = {
  onClick: action('click')
}

storiesOf('Task', module)
  .add('default', () => <Hello {...hello} enthusiasmLevel={2}/>)
