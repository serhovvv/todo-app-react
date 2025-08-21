const AddTaskForm = ({ newTasks, setNewTasks, onAdd }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={newTasks}
        placeholder="Enter a task..."
        onChange={(e) => {
          setNewTasks(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onAdd();
          }
        }}
      />
      <button className="add-button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};
export default AddTaskForm;
