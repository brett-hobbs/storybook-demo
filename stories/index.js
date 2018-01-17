import React from 'react'

import { action } from '@storybook/addon-actions'

import { storiesOf } from '@storybook/react'
import { Toolbar } from '../src/toolbar'

storiesOf('Alignment Toolbar', module)
  .add('Disabled', () => <Toolbar />)
  .add('Left Aligned', () => <Toolbar alignment="left" onChange={action('onChange')} />)
  .add('Center Aligned', () => <Toolbar alignment="center" onChange={action('onChange')} />)
  .add('Right Aligned', () => <Toolbar alignment="right" onChange={action('onChange')} />)
