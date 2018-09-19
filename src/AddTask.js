import React, { Component } from 'react'
import './App.css'

class AddTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTask: ' '
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    console.log(event.target.value)
    let newTaskText = event.target.value
    this.setState({
      newTask: newTaskText
    })
  }

  handleSubmit () {
    let newTask = {
      task: this.state.newTask,
      complete: false,
      editing: false}
    this.props.addTaskFn(newTask)
  }

  render () {
    return (
      <div className='addTaskDiv'>
        <input className='taskInput' type='text' onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add Task</button>
      </div>
    )
  }
}
export default AddTask
