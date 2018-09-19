import React, { Component } from 'react'
import './App.css'

class Task extends Component {
  render () {
    let { task } = this.props
    return (
      <div className='item'>
        <input type='checkbox' /> <span> {task} </span> <button className='edit'>Edit</button><button className='delete'>Delete</button>
      </div>
    )
  }
}
export default Task
