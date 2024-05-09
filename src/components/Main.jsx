import { Component } from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

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

        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange} 
            type="text" 
            value={newTask}
          />
          <button type="submit">Create Task</button>
        </form>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <span>
                <FaEdit className="edit" onClick={() => this.handleEdit(index)} />
                <FaWindowClose className="delete" onClick={() => this.handleDelete(index)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Main;
