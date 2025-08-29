import { useState } from "react";
import "./components/addTaskForm/AddTaskForm";
import AddTaskForm from "./components/addTaskForm/AddTaskForm";
import TaskItem from "./components/taskItem/TaskItem";
import Modal from "./components/modal/Modal";
import ClearCompletedBtn from "./components/clearCompletedBtn/ClearCompletedBtn";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [filtered, setFiltered] = useState("all");

  const AddTask = () => {
    if (newTasks.trim() !== "") {
      const newObj = {
        text: newTasks,
        completed: false,
      };
      setTasks((t) => [...t, newObj]);
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
  const toggleCheckbox = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const filterCompleted = tasks.filter((item) => !item.completed);
    setTasks(filterCompleted);
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
        <div className="filter-buttons">
          <button
            onClick={() => setFiltered("all")}
            className={filtered === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setFiltered("active")}
            className={filtered === "active" ? "active" : ""}
          >
            Active
          </button>
          <button
            onClick={() => setFiltered("completed")}
            className={filtered === "completed" ? "active" : ""}
          >
            Completed
          </button>
        </div>
        <ol>
          {tasks.some((task) => task.completed) && filtered !== "active" && (
            <ClearCompletedBtn functionCompleted={clearCompleted} />
          )}
          {tasks
            .filter((t) => {
              if (filtered === "active") {
                return !t.completed;
              } else if (filtered === "completed") {
                return t.completed;
              } else {
                return true;
              }
            })
            .map((task, index) => (
              <TaskItem
                task={task}
                index={index}
                askDelete={askDelete}
                moveUp={moveTaskUp}
                moveDown={moveTaskDown}
                toggleCheckbox={toggleCheckbox}
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
