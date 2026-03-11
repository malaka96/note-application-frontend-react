import { useContext, useState } from "react";
import NoteCard from "../../../componets/NoteCard";
import { NoteContext } from "../../../context/NoteContext";
import { deleteNote } from "../../../api/NoteApi";
import ConfirmDeleteModal from "../../../componets/ConfirmDeleteModel";

const Home = () => {
  const { notes, setNotes, setFavoriteNotes } = useContext(NoteContext)!;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

  function openDeleteModal(id: number) {
    setSelectedNoteId(id);
    setIsModalOpen(true);
  }

  function closeDeleteModal() {
    setSelectedNoteId(null);
    setIsModalOpen(false);
  }

  async function confirmDelete() {
    if (selectedNoteId === null) return;

    try {
      const res = await deleteNote(selectedNoteId);

      if (res.status === 200) {
        setNotes((prev) => prev.filter((note) => note.id !== selectedNoteId));
        setFavoriteNotes((prev) =>
          prev.filter((note) => note.id !== selectedNoteId)
        );
        console.log("note deleted");
      } else {
        console.log(res.status);
      }
    } catch (e) {
      console.log(e);
    } finally {
      closeDeleteModal();
    }
  }

  return (
    <>
      <div className="p-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {notes && notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              handleDelete={openDeleteModal}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No notes yet</p>
        )}
      </div>

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default Home;