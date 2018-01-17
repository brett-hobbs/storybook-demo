import React from 'react'

import { action } from '@storybook/addon-actions'

import { Toolbar } from '../src/toolbar'
import { storiesOf } from '@storybook/react'

storiesOf('Alignment Toolbar', module)
  .add('Enabled', () => <Toolbar onChange={action('onChange')} />)
  .add('Disabled', () => <Toolbar />)
