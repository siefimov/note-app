import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getNotes, addNote, deleteNote, updateNote } from './noteThunks';

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
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
        builder.addCase(updateNote.fulfilled, (state, action) => {
            const { _id, title, description, updatedAt } = action.payload;
            console.log(description);

            const noteToUpdate = state.list.find((note) => note._id === _id);

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
        });
    },
});

export default notesSlice.reducer;
