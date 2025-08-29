const ClearCompletedBtn = ({ functionCompleted }) => {
  return (
    <div className="clear-completed-wrapper">
      <button className="clear-completed" onClick={() => functionCompleted()}>
        Delete completed
      </button>
    </div>
  );
};
export default ClearCompletedBtn;
