import { useState } from "react";
import "./components/addTaskForm/AddTaskForm";
import AddTaskForm from "./components/addTaskForm/AddTaskForm";
import TaskItem from "./components/taskItem/TaskItem";
import Modal from "./components/modal/Modal";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const AddTask = () => {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  };

  const askDelete = (index) => {
    setTaskToDelete(index);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      const updatedTasks = [
        ...tasks.slice(0, taskToDelete),
        ...tasks.slice(taskToDelete + 1),
      ];
      setTasks(updatedTasks);
      setShowConfirm(false);
      setTaskToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setTaskToDelete(null);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="wrapper">
      <div className="todo-list">
        <h1>ToDo-list</h1>
        <AddTaskForm
          newTasks={newTasks}
          setNewTasks={setNewTasks}
          onAdd={AddTask}
        />

        <ol>
          {tasks.map((task, index) => (
            <TaskItem
              task={task}
              index={index}
              askDelete={askDelete}
              moveUp={moveTaskUp}
              moveDown={moveTaskDown}
            />
          ))}
        </ol>

        {showConfirm && (
          <Modal cancelDelete={cancelDelete} confirmDelete={confirmDelete} />
        )}
      </div>
    </div>
  );
};

export default ToDo;
