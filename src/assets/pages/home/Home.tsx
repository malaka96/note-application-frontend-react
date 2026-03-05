import { useContext } from "react";
import NoteCard from "../../../componets/NoteCard";
import { NoteContext } from "../../../context/NoteContext";
import { deleteNote } from "../../../api/NoteApi";

const Home = () => {

  const {notes, setNotes, setFavoriteNotes} = useContext(NoteContext)!;


  async function handleDelete(id: number) {
    try{
      const res = await deleteNote(id);
      if(res.status === 200){
        setNotes((prev) => prev.filter(note => note.id !== id));
        setFavoriteNotes((prev) => prev.filter(note => note.id !== id));
        console.log("note deleted");
      }else{
        console.log(res.status);
      }
    }catch(e){
      console.log(e);
    }
  }
  

  return (
    <div className="p-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard key={note.id} note={note} handleDelete={handleDelete}/>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">No notes yet</p>
      )}
    </div>
  );
};

export default Home;
