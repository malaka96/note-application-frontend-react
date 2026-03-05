import { Edit2, Heart, Trash2 } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import type { Note } from "../types/Types";
import { updateNoteFavoriteState } from "../api/NoteApi";
import { NoteContext } from "../context/NoteContext";

interface NoteCardProp {
  note: Note;
  handleDelete: (id: number) => void;
}

const NoteCard = ({ note, handleDelete }: NoteCardProp) => {
  const [isFavorite, setFavorite] = useState(note.isFavorite);
  const { setNotes, setFavoriteNotes } = useContext(NoteContext)!;

   async function handleFavorite() {
    const newIsFavorite = !isFavorite; // Calculate the new state once
    try {
      const res = await updateNoteFavoriteState(note.id, newIsFavorite);
      if (res.status === 200) {
        setFavorite(newIsFavorite); // Update local state
        setNotes((prev) =>
          prev.map((prevNote) =>
            prevNote.id === note.id
              ? { ...prevNote, isFavorite: newIsFavorite }
              : prevNote,
          ),
        );
        setFavoriteNotes((prev) => {
          const updatedNote = { ...note, isFavorite: newIsFavorite };
          if (newIsFavorite) {
            return [...prev, updatedNote];
          } else {
            return prev.filter((n) => n.id !== note.id);
          }
        });
        console.log(`${note.id} note's favorite state updated`);
      } else {
        console.log(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 h-full flex flex-col">
      {/* Title + Icons Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-black">
          {note.title || "Untitled Note"}
        </h2>

        {/* Edit and Delete Icons */}
        <div className="flex items-center gap-3">
          <button
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Edit note"
          >
            <Link to={`/details/${note.id}`}>
              <Edit2 className="w-5 h-5" />
            </Link>
          </button>

          <button
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Edit note"
            onClick={() => handleFavorite()}
          >
            {isFavorite ? (
              <Heart className="w-5 h-5 text-black" fill="text-black" />
            ) : (
              <Heart className="w-5 h-5 text-black" />
            )}
          </button>

          <button
            onClick={() => {
              handleDelete(note.id);
            }}
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Delete note"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <p className="text-gray-800 leading-relaxed whitespace-pre-wrap flex-1">
        {note.body || "No content"}
      </p>

      {/* Optional footer later */}
    </div>
  );
};

export default NoteCard;
