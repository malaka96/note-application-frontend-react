import { createContext } from "react";
import type { Note } from "../types/Types";

type NoteContextType = {
    notes: Note[] | [];
    setNotes: (value: Note[] | []) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

export const NoteContext = createContext<NoteContextType | undefined>(undefined);