const Modal = ({ confirmDelete, cancelDelete }) => {
  return (
    <div className="modal-overlay" onClick={cancelDelete}>
      <div className="modal">
        <h1 className="modal-title">Delete task?</h1>
        <span className="modal-span">I hope you completed this task.</span>
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
  );
};
export default Modal;
