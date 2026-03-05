import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Note } from "../types/Types";

// Allow both direct arrays and updater functions just like useState
type NoteContextType = {
    notes: Note[];
    setNotes: Dispatch<SetStateAction<Note[]>>;
    favoriteNotes: Note[];
    setFavoriteNotes: Dispatch<SetStateAction<Note[]>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const NoteContext = createContext<NoteContextType | undefined>(undefined);