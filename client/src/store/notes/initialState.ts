export type Note = {
    _id?: string;
    title: string;
    description: string;
    notebookId?: number | null;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
};

export interface NotesState {
    data: Note[];
    count: number;
    loading: boolean;
    error: string | null;
}

export const initialState = {
    data: [],
    count: 0,
    loading: false,
    error: null,
} as NotesState;
