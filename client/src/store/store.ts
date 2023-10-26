import { configureStore } from '@reduxjs/toolkit';
import notebookSlice from './notebooks/notebook.slice';
import noteSlice from './notes/note.slice';

export const store = configureStore({
    reducer: {
        notebooks: notebookSlice,
        notes: noteSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
