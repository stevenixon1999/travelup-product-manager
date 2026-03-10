function DeleteModal({ isOpen, onClose, onConfirm }) {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-delete">
      <div className="modal">
        <h3>Delete Product</h3>
        <p>Are you sure you want to delete this product? </p>
        <div className="modal-actions">
          <button className="btn btn-delete" onClick={onConfirm}>
             Delete
          </button>
          <button className="btn btn-edit" onClick={onClose} >
            Cancel
          </button>
        </div>

      </div>

    </div>
  );
}

export default DeleteModal;