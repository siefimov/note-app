export interface Note {
    id: number | null;
    title: string;
    description: string;
    isActive: boolean;
    notebookId: number | null;
    createdAt: string;
    updatedAt: string;
}

interface NotesState {
    list: Note[];
    count: number;
    loading: boolean;
    error: string | null;
}

export const initialState: NotesState = {
    list: [],
    count: 0,
    loading: false,
    error: null,
};
