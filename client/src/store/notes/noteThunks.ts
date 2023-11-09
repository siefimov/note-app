import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { noteService } from './noteService';
import { AxiosResponse } from 'axios';

export interface addNoteParam {
    title: string;
    description: string;
    notebookId?: number | null;
    // isActive: boolean;
    createdAt?: string;
    updatedAt?: string;
}

type NoteResponse = {
    title: string;
    description: string;
    notebookId: string;
    cretedAt: string;
    updatedAt: string;
    _id: string;
    __v: string;
};

const getNotes = createAsyncThunk(ActionTypes.GET_NOTES, async () => {
    try {
        const data = await noteService.getAll();
        return data;
    } catch (error) {
        throw new Error('Faild to get Notes');
    }
});

const addNote = createAsyncThunk(ActionTypes.ADD_NOTE, async (param: addNoteParam) => {
    try {
        const response = await noteService.create(param);
        const note: NoteResponse = response.data;

        return note;
    } catch (error) {
        throw new Error('Faild to create note');
    }
});

const deleteNote = createAsyncThunk(ActionTypes.DELETE_NOTE, async (id: number) => {
    try {
        const response = await noteService.delete(id);
        console.log(response);
        return response;
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

            const response = await noteService.update(id, data);
            console.log(response);
            return response?.data;
        } catch (error) {
            throw new Error('Failed to update note');
        }
    }
);

export { getNotes, addNote, deleteNote, updateNote };
