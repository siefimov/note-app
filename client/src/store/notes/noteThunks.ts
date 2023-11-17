import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { noteService } from './noteService';
import { NotesState } from './initialState';
import { Note } from './initialState';

// export interface addNoteParam {
//     title: string;
//     description: string;
//     notebookId?: number | null;
//     createdAt?: string;
//     updatedAt?: string;
// }

// type NoteResponse = {
//     title: string;
//     description: string;
//     notebookId: string;
//     cretedAt: string;
//     updatedAt: string;
//     _id: string;
//     __v: string;
// };

const getNotes = createAsyncThunk<Note[]>(ActionTypes.GET_NOTES, async () => {
    try {
        const notes = await noteService.getAll();
        console.log(notes);
        return notes;
    } catch (error) {
        throw new Error('Faild to get Notes');
    }
});

const addNote = createAsyncThunk(ActionTypes.ADD_NOTE, async (param: Note) => {
    try {
        const response = await noteService.create(param);
        const note = response.data;

        return note;
    } catch (error) {
        throw new Error('Faild to create note');
    }
});

const deleteNote = createAsyncThunk(ActionTypes.DELETE_NOTE, async ( id: string ) => {
    try {
        await noteService.delete(id);
        
    } catch (error) {
        throw new Error('Failed to delete note');
    }
});

const updateNote = createAsyncThunk(
    ActionTypes.EDIT_NOTE,
    async (param: { _id: number; title: string; description: string; updatedAt: string }) => {
        try {
            const id = param._id;
            const data: { title: string; description: string; updatedAt: string } = {
                title: param.title,
                description: param.description,
                updatedAt: param.updatedAt,
            };

            return await noteService.update(id, data);
            
        } catch (error) {
            throw new Error('Failed to update note');
        }
    }
);

export { getNotes, addNote, deleteNote, updateNote };
