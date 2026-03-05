import {useContext} from "react";
import { NoteContext } from "../../../context/NoteContext";
import NoteCard from "../../../componets/NoteCard";

const Favorite = () => {

  const {favoriteNotes} = useContext(NoteContext)!;

  async function handleDelete(id:number) {

  }

  return (
    <div className="p-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {favoriteNotes && favoriteNotes.length > 0 ? (
        favoriteNotes.map((note) => (
          <NoteCard key={note.id} note={note} handleDelete={handleDelete}/>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">No favorite notes yet</p>
      )}
    </div>
  );
};

export default Favorite;
