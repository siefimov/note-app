import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { Note } from './initialState';
import { getNotes, addNote } from './note.actions';

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        // addNote(state, action: PayloadAction<Note>) {
        //     state.list.push(action.payload);
        //     state.count += 1;
        // },
        deleteNote(state, action: PayloadAction<number | null>) {
            state.list = state.list.filter((note) => note.id !== action.payload);
            state.count -= 1;
        },
        updateNote(state, action: PayloadAction<Partial<Note>>) {
            const { id, title, description, updatedAt } = action.payload;

            const noteToUpdate = state.list.find((note) => note.id === id);

            if (noteToUpdate) {
                if (title !== undefined) {
                    noteToUpdate.title = title;
                }
                if (description !== undefined) {
                    noteToUpdate.description = description;
                }
                if (updatedAt !== undefined) {
                    noteToUpdate.updatedAt = updatedAt;
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase(addNote.fulfilled, (state, action) => {
            state.list.push(action.payload);
            state.count += 1;
        });
    },
});

export const { deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
