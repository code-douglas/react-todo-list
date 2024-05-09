import PropTypes from 'prop-types'
import './Tasks.css'
import { FaEdit, FaWindowClose } from "react-icons/fa";

function Tasks ({tasks, handleEdit, handleDelete}) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span>
              <FaEdit 
                className="edit" 
                onClick={() => handleEdit(index)} 
              />
              <FaWindowClose 
                className="delete" 
                onClick={() => handleDelete(index)} 
              />
            </span>
          </li>
      ))}
    </ul>
  )
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
}

export default Tasks