import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import _ from 'lodash'
import FontAwesome from 'react-fontawesome'

const Options = {
  left: 'align-left',
  center: 'align-center',
  right: 'align-right'
}

export const ToolbarItem = props => {
  const { iconName, ...others } = props
  return (
    <Button {...others}>
      <FontAwesome name={iconName} size="2x" />
    </Button>
  )
}

export const Toolbar = props => {
  const { alignment, onChange } = props
  return (
    <ButtonGroup>
      {_.map(Options, (value, key) => {
        return (
          <ToolbarItem
            active={alignment === key}
            disabled={!onChange}
            iconName={value}
            key={key}
            onClick={() => onChange(key)}
          />
        )
      })}
    </ButtonGroup>
  )
}
