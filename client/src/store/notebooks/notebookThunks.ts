import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { Notebook } from './initialState';
import { notebookService } from './notebookService';

const getAllNotebooks = createAsyncThunk(ActionTypes.NOTEBOOKS, async () => {
    const response = await notebookService.getAll();

    return response;
});

const addNotebook = createAsyncThunk(ActionTypes.ADD_NOTEBOOK, async (param: string) => {
    try {
        const data = await notebookService.create({ title: param });
        return data;
    } catch (error) {
        throw new Error('Failed to create notebook');
    }
});

const editNotebookTitle = createAsyncThunk(ActionTypes.EDIT_NOTEBOOK, async (param: Notebook) => {
    try {
        const data = await notebookService.update(param._id, { title: param.title });
        console.log(data);
        return data;
    } catch (error) {
        throw new Error('Failed to edit notebook title');
    }
});

const deleteNotebook = createAsyncThunk(ActionTypes.DELETE_NOTEBOOK, async (param: number) => {
    try {
        const data = await notebookService.delete(param);
        return data;
    } catch (error) {
        throw new Error('Failed to delete notebook');
    }
});

export { addNotebook, getAllNotebooks, editNotebookTitle, deleteNotebook };
