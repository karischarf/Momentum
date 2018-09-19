import React, { Component } from 'react'
import './App.css'
import NewTask from './NewTask'
import EditTask from './EditTask'

class App extends Component {
  constructor () {
    super()
    this.state = {
      editing: false,
      completed: false,
      tasksArray: []
    }
    // this.getTasks = this.getTasks.bind(this)
    this.addTask = this.addTask.bind(this)
    this.markComplete = this.markComplete.bind(this)
  }

  // getTasks () {

  //

  addTask (newTask, newArray) {
    let tasksArray = this.state.tasksArray
    let newArray = tasksArray.concat(tasksArray[newArray])
    )
  this.setState(newArray)}
  
    
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
        <NewTask tasks={this.tasksArray} addTaskFn={this.addTask} />
        {this.state.tasksArray.map((task) =>
          <div>
            <input type='checkbox' onClick={this.markComplete} />
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
