const TaskItem = ({
  task,
  index,
  askDelete,
  moveUp,
  moveDown,
  toggleCheckbox,
}) => {
  return (
    <li key={index}>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCheckbox(index)}
        />
        <span className={task.completed ? "done" : ""}>{task.text}</span>
      </div>
      <div>
        <button className="delete-button" onClick={() => askDelete(index)}>
          Delete
        </button>
        <button className="move-button" onClick={() => moveUp(index)}>
          👆
        </button>
        <button className="move-button" onClick={() => moveDown(index)}>
          👇
        </button>
      </div>
    </li>
  );
};
export default TaskItem;
