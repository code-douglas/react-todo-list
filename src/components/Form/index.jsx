import PropTypes from 'prop-types'

import './Form.css'

function Form ({handleChange, handleSubmit, newTask}) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        type="text" 
        value={newTask}
      />
      <button type="submit">Create Task</button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired
}

export default Form