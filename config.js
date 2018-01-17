import { configure } from '@storybook/react'
import { setConsoleOptions } from '@storybook/addon-console'

function loadStories() {
  require('../stories')
}

setConsoleOptions({
  panelExclude: []
})

configure(loadStories, module)
