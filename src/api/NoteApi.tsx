import axios from "axios";
import api from "./Api"

export const fetchAllNotes = async () => {
    try{
        const res = await api.get("/note/all");
        return res;
    }catch (e){
        if(axios.isAxiosError(e)){
            throw new Error(e.response?.data?.message || "Failed to fetch notes");
        }
        throw new Error("Unexpected error");
    }
} 

export const createNote = async (title: string, body: string) => {
    try{
        const res = await api.post("/note/add", {title, body});
        return res;
    }catch(e){
        if(axios.isAxiosError(e)){
            throw new Error(e.response?.data?.message || "Failed to create note");
        }
        throw new Error("Unexpected error");
    }
}