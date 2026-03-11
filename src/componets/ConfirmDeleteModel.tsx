type ConfirmDeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
}: ConfirmDeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-lg bg-white border border-gray-300 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-4">Delete Note</h2>

        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this note? This action cannot be undone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <button
            onClick={onClose}
            type="button"
            className="
              w-full sm:w-auto
              px-6 py-3
              border border-gray-500
              rounded-lg
              bg-white
              text-black
              font-medium
              hover:bg-gray-100
              transition-colors
              focus:outline-none
              focus:ring-2
              focus:ring-black
              focus:ring-offset-2
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            type="button"
            className="
              w-full sm:w-auto
              px-6 py-3
              bg-black
              text-white
              font-medium
              rounded-lg
              hover:bg-gray-800
              transition-colors
              focus:outline-none
              focus:ring-2
              focus:ring-black
              focus:ring-offset-2
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;