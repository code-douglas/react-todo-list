import { Component } from "react";
import './Main.css';
import Form from './Form'
import Tasks from './Tasks'


class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidUpdate (prevProps, prevState) {
    const { tasks } = this.state

    if(tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if(!tasks) return;

    this.setState({tasks})
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { tasks, newTask, index } = this.state;

    if (!newTask.trim()) return;

    const updatedTasks = [...tasks];
    
    if (index === -1) {
      this.setState({
        tasks: [...updatedTasks, newTask.trim()],
        newTask: "",
      });
    } else {
      updatedTasks[index] = newTask.trim();

      this.setState({
        tasks: [...updatedTasks],
        index: -1,
      });
    }
  };

  handleEdit = (index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index]
    });
  }

  handleDelete = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);

    this.setState({
      tasks: updatedTasks
    });
  }

  render() {
    const { newTask, tasks } = this.state;
    
    return (
      <div className="main">
        <h1>To Do List</h1>

        <Form 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default Main;