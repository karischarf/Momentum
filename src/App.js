import React, { Component } from 'react'
import './App.css'
import Task from './Task'
import EditTask from './EditTask'

class App extends Component {
  constructor () {
    super()
    this.state = {
      editing: false,
      completed: false,
      tasksArray: [
        'React', 'Dashi', 'Hugs'
      ],
      newTask: ''
    }
    // this.getTasks = this.getTasks.bind(this)
    this.addTask = this.addTask.bind(this)
    this.markComplete = this.markComplete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addTask (newTask) {
    let tasksArray = this.state.tasksArray.slice()
    let newArray = tasksArray.concat(newTask)
    console.log(newArray)
    this.setState({
      tasksArray: newArray
    })
  }

  handleChange (event) {
    console.log(event.target.value)
    let newTask = event.target.value
    this.setState({
      newTask: newTask
    })
  }

  // handleSubmit (event) {
  // console.log(this.state.tasksArray)
  // event.preventDefault()
  // let newTask=this.state.newTask
  //  let newArray = newTask.concat(tasksArray)
  //  this.setState({
  //    tasksArray.concat({newTask})
  //    })
  //    this.setState({ newTask: ' '})
  //    console.log(this.state.tasks)
  //  }

  markComplete () {

  }

  editButton () {

  }

  deleteTask () {

  }

  render () {
    return (
      <div>
        <h1>Do Something</h1>
        <div className='task-list'>
          <input className='taskInput' type='text' placeholder='Enter text to add to list item' autoFocus onChange={this.handleChange} />
          <div> <button className='add-task-button' onClick={() => this.addTask(this.state.newTask)}>Add Task</button>
          </div>
        </div>
        <div>
          {this.state.tasksArray.map((task, idx) =>
            <Task key={idx} task={task} />
          )}
        </div>
      </div>
    )
  }
}

export default App
