import { useContext, useEffect, useState, type ReactNode } from "react";
import type { Note } from "../types/Types";
import { AuthContext } from "./AuthContext";
import { NoteContext } from "./NoteContext";
import { fetchAllNotes, fetchFavoriteNotes } from "../api/NoteApi";

type NoteContextProviderProp = {
  children: ReactNode;
};

const NoteContextProvider = ({ children }: NoteContextProviderProp) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [favoriteNotes, setFavoriteNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(AuthContext)!;

  useEffect(() => {
    if (!user) return;
    const fetchNotes = async () => {
      try {
        const [allNotesRes, favoriteNotesRes] = await Promise.all([
          fetchAllNotes(),
          fetchFavoriteNotes(),
        ]);

        setNotes(allNotesRes.data);
        setFavoriteNotes(favoriteNotesRes.data);
      } catch (e) {
        setNotes([]);
        setFavoriteNotes([]);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [user]);

  const contextValue = {
    notes,
    setNotes,
    favoriteNotes,
    setFavoriteNotes,
    isLoading,
    setIsLoading,
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};

export default NoteContextProvider;
