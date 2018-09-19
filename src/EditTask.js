import React, { Component } from 'react'
import './App.css'

class EditTask extends Component {
  constructor () {
    super()
    this.state = {
      editedTask: ' '
    }
  }
  render () {
    return (
      <div className='edit' />
    )
  }
}

export default EditTask
