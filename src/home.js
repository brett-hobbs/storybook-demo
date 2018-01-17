import React from 'react'
import { Toolbar } from './toolbar'

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alignment: 'left'
    }
  }

  onChange = alignment => {
    this.setState({ alignment })
  }

  render() {
    const { alignment } = this.state

    return (
      <div>
        <Toolbar alignment={alignment} />
      </div>
    )
  }
}
