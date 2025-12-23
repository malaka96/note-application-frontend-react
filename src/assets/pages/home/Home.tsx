import { useEffect, useState } from "react";
import NoteCard, { type Note } from "../../../componets/NoteCard";

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchAllNotes() {
      try {
        const response = await fetch(`http://localhost:8080/`);
        const notes = await response.json();
        if (notes) {
          console.log(notes);
          setNotes(notes);
        }
      } catch (e) {
        console.log(e);
        setNotes([]);
      }
    }
    fetchAllNotes();
  }, []);

  async function handleDelete(id: number) {
    if(!window.confirm("Are you sure you want to delete this note?")){
      return;
    }
    console.log(id);
    try{
      const respone = await fetch(`http://localhost:8080/delete/${id}`,{
        method:'DELETE'
      });
      if(!respone.ok){
        throw new Error("Failed to delete on server");
      }

      setNotes(prevNotes => prevNotes.filter(note =>note.id !== id));

    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="p-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={handleDelete} /> // Use your NoteCard component
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">No notes yet</p>
      )}
    </div>
  );
};

export default Home;
