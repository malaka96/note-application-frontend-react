import { useContext, useEffect, useState, type ReactNode } from "react"
import type { Note } from "../types/Types";
import { AuthContext } from "./AuthContext";
import { NoteContext } from "./NoteContext";
import { fetchAllNotes } from "../api/NoteApi";

type NoteContextProviderProp = {
    children: ReactNode;
}


const NoteContextProvider = ({ children }: NoteContextProviderProp) => {

    const [notes, setNotes] = useState<Note[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const {user} = useContext(AuthContext)!;

    useEffect(() => {
        if(!user) return;
        fetchAllNotes().then(res => {setNotes(res.data);console.log(res.data);})
        .catch(() => setNotes([]))
        .finally(() => setIsLoading(false));
    },[user]);

    const contextValue = {
        notes,
        setNotes,
        isLoading,
        setIsLoading
    }

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  )
}

export default NoteContextProvider
