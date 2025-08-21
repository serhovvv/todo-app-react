import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // function handleInputChange(e) {
  //   setNewTasks(e.target.value);
  // }

  function AddTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }

  function askDelete(index) {
    setTaskToDelete(index);
    setShowConfirm(true);
  }

  function confirmDelete() {
    if (taskToDelete !== null) {
      const updatedTasks = [
        ...tasks.slice(0, taskToDelete),
        ...tasks.slice(taskToDelete + 1),
      ];
      setTasks(updatedTasks);
      setShowConfirm(false);
      setTaskToDelete(null);
    }
  }

  function cancelDelete() {
    setShowConfirm(false);
    setTaskToDelete(null);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="wrapper">
      <div className="todo-list">
        <h1>ToDo-list</h1>
        <div className="input-wrapper">
          <input
            type="text"
            value={newTasks}
            placeholder="Enter a task..."
            onChange={(e) => setNewTasks(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                AddTask();
              }
            }}
          />
          <button className="add-button" onClick={AddTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => askDelete(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>

        {showConfirm && (
          <div className="modal-overlay">
            <div className="modal">
              <h1 className="modal-title">Delete task?</h1>
              <span className="modal-span">
                I hope you completed this task.
              </span>
              <div className="button-wrapper">
                <button className="cancel-button" onClick={cancelDelete}>
                  Cancel
                </button>
                <button className="confirm-button" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDo;
