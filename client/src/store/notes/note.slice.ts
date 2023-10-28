import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
// import { Note } from './initialState';
import { getNotes, addNote, deleteNote } from './note.actions';

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        // updateNote(state, action: PayloadAction<Partial<Note>>) {
        //     const { id, title, description, updatedAt } = action.payload;

        //     const noteToUpdate = state.list.find((note) => note.id === id);

        //     if (noteToUpdate) {
        //         if (title !== undefined) {
        //             noteToUpdate.title = title;
        //         }
        //         if (description !== undefined) {
        //             noteToUpdate.description = description;
        //         }
        //         if (updatedAt !== undefined) {
        //             noteToUpdate.updatedAt = updatedAt;
        //         }
        //     }
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase(addNote.fulfilled, (state, action) => {
            state.list.push(action.payload);
            state.count += 1;
        });
        builder.addCase(deleteNote.fulfilled, (state, action) => {
            state.list = state.list.filter((note) => note._id !== action.payload);
            state.count -= 1;
        });
    },
});

// export const { updateNote } = notesSlice.actions;

export default notesSlice.reducer;
