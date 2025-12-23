import { Edit2, Trash2 } from "lucide-react";

export interface Note {
  id : number;
  title : string;
  body : string;
}

interface NoteCardProp{
  note : Note;
  onDelete : (id:number) => void;
}

const NoteCard = ({note, onDelete} : NoteCardProp) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 h-full flex flex-col">
      {/* Title + Icons Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-black">
          {note.title || 'Untitled Note'}
        </h2>

        {/* Edit and Delete Icons */}
        <div className="flex items-center gap-3">
          <button
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Edit note"
          >
            <Edit2 className="w-5 h-5" />
          </button>

          <button
          onClick={() => onDelete(note.id)}
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Delete note"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <p className="text-gray-800 leading-relaxed whitespace-pre-wrap flex-1">
        {note.body || 'No content'}
      </p>

      {/* Optional footer later */}
    </div>
  );
};

export default NoteCard
