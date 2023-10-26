export interface Notebook {
    id: number | null;
    title: string;
    isActive: boolean;
}

export interface NotebooksState {
    list: Notebook[];
    count: number;
    loading: boolean;
    error: string | null;
}

export const initialState: NotebooksState = {
    list: [],
    count: 0,
    loading: false,
    error: null,
};
