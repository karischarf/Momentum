import React, { Component } from 'react'
import './App.css'
import AddTask from './AddTask'
import EditTask from './EditTask'

class App extends Component {
  constructor () {
    super()
    this.state = {
      tasksArray: []
    }
    // this.getTasks = this.getTasks.bind(this)
    this.addTask = this.addTask.bind(this)
    this.markComplete = this.markComplete.bind(this)
  }

  // getTasks () {

  // }

  addTask (newTask) {
    let tasksArray = this.state.tasksArray
    tasksArray.push(newTask)
    // this.getTasks()
  }

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
        <AddTask newTask={newTask} addTaskFn={this.addTask} />
        {this.state.tasksArray.map((task) =>
          <div>
            <button onClick={this.markComplete}>Complete</button>
            <p>{task.task}</p>
            <button onClick={this.editButton}>Edit</button>
            <button onClick={this.deleteTask}>Delete</button>
            {/* button for completion */}
            {/* Task text */}
            {/* Button for edit */}
            {/* Button to delete */}
          </div>
        ) }
      </div>
    )
  }
}

export default App
