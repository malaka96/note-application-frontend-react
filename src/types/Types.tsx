export interface User{
    id: number;
    email: string;
}

export interface Note{
    id: number;
    userEmail: string;
    title: string;
    isFavorite: boolean;
    body: string;
}