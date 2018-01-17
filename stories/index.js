import React from 'react'

import { action } from '@storybook/addon-actions'

import { Toolbar } from '../src/toolbar'
import { storiesOf } from '@storybook/react'

storiesOf('Alignment Toolbar', module)
  .addWithJSX('Enabled', () => <Toolbar onChange={action('onChange')} />)
  .addWithJSX('Disabled', () => <Toolbar />)
