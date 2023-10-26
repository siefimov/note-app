import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { Notebook } from './initialState';
import { getAllNotebooks, addNotebook } from './notebook.actions';

const notebooksSlice = createSlice({
    name: 'notebooks',
    initialState,
    reducers: {
        // addNotebook(state, action: PayloadAction<string>) {
        //     state.list.push({
        //         id: state.list.length + Math.round(Math.random() * 10000),
        //         title: action.payload,
        //         isActive: false,
        //     });
        // },
        deleteNotebook(state, action: PayloadAction<number | null>) {
            state.list = state.list.filter((notebook) => notebook.id !== action.payload);
        },
        changeNotebookTitle(state, action: PayloadAction<Notebook>) {
            const { id, title } = action.payload;

            const notebookToChange = state.list.find((notebook) => notebook.id === id);
            if (notebookToChange) {
                notebookToChange.title = title;
            }
        },
        changeActiveNotebook(state, action: PayloadAction<number | null>) {
            state.list.forEach((notebook) => {
                if (notebook._id === action.payload) {
                    if (notebook.isActive) {
                        notebook.isActive = false;
                    } else {
                        notebook.isActive = true;
                    }
                } else {
                    notebook.isActive = false;
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllNotebooks.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase(addNotebook.fulfilled, (state, action) => {
            state.list.push({
                id: action.payload._id,
                title: action.payload.title,
                isActive: false,
            });
        });

    }
});

export const { deleteNotebook, changeNotebookTitle, changeActiveNotebook } = notebooksSlice.actions;

export default notebooksSlice.reducer;
