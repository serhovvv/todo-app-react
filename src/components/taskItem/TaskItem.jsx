const TaskItem = ({ task, index, askDelete, moveUp, moveDown }) => {
  return (
    <li key={index}>
      <span className="text">{task}</span>
      <button className="delete-button" onClick={() => askDelete(index)}>
        Delete
      </button>
      <button className="move-button" onClick={() => moveUp(index)}>
        👆
      </button>
      <button className="move-button" onClick={() => moveDown(index)}>
        👇
      </button>
    </li>
  );
};
export default TaskItem;
